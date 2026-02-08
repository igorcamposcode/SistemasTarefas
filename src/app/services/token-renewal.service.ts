/**
 * Exemplo: Cliente Angular usando Sistema de Rotação JWT
 *
 * Mostra como detectar e renovar tokens na aplicação Angular
 *
 * Usar este exemplo em um interceptor ou serviço de autenticação
 */

import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Component, OnInit, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

// Interface para resposta de renovação de token
interface TokenRenewalResponse {
  token: string;
  success: boolean;
  wasFromPreviousKey?: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TokenRenewalService {
  private tokenRefreshedSubject = new Subject<string>();
  public tokenRefreshed$ = this.tokenRefreshedSubject.asObservable();

  private http = inject(HttpClient);

  /**
   * Verificar se a resposta indica que o token precisa ser renovado
   *
   * O servidor envia o header X-Token-Refresh-Available quando
   * detecta um token emitido com a chave anterior
   */
  checkAndRenewToken(response: HttpResponse<TokenRenewalResponse>): void {
    const refreshAvailable = response.headers.get('X-Token-Refresh-Available');

    if (refreshAvailable === 'true') {
      console.log('⚠️ Token detectado como antigo - iniciando renovação');
      this.renewToken();
    }
  }

  /**
   * Renovar o token atual
   *
   * Chamada automática quando detectado header X-Token-Refresh-Available
   */
  renewToken(): void {
    const currentToken = this.getToken();

    if (!currentToken) {
      console.warn('Sem token para renovar');
      return;
    }

    this.http.post<TokenRenewalResponse>('/api/renovar-token', {}, {
      headers: {
        'Authorization': `Bearer ${currentToken}`
      }
    }).subscribe({
      next: (response) => {
        if (response.success && response.token) {
          console.log('Token renovado com sucesso');
          this.saveToken(response.token);
          this.tokenRefreshedSubject.next(response.token);
        }
      },
      error: (error: Error) => {
        console.error('Erro ao renovar token:', error);
        // Se falhar, pode ser necessário fazer login novamente
        this.logout();
      }
    });
  }

  /**
   * Guardar token no localStorage
   */
  saveToken(token: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('token_refreshed_at', new Date().toISOString());
  }

  /**
   * Obter token atual
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Logout (limpar token)
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('token_refreshed_at');
  }

  /**
   * Mostrar informações do token (para debugging)
   */
  debugToken(): void {
    const token = this.getToken();

    if (!token) {
      console.log('Sem token armazenado');
      return;
    }

    // Decodificar JWT (apenas header.payload, sem verificação)
    const parts = token.split('.');
    if (parts.length !== 3) {
      console.error('Token inválido');
      return;
    }

    try {
      const decoded = JSON.parse(atob(parts[1]));
      console.log('📋 Token Info:', {
        exp: new Date(decoded.exp * 1000),
        iat: new Date(decoded.iat * 1000),
        userId: decoded.id,
        email: decoded.email,
        expiresIn: Math.round((decoded.exp - Date.now() / 1000) / 60) + ' minutos'
      });
    } catch (error) {
      console.error('Erro ao decodificar token:', error);
    }
  }
}

// ============================================================================
// EXEMPLO 1: HTTP Interceptor
// ============================================================================

@Injectable()
export class TokenRefreshInterceptor implements HttpInterceptor {
  private tokenRenewalService = inject(TokenRenewalService);

  intercept(req: HttpRequest<TokenRenewalResponse>, next: HttpHandler): Observable<HttpEvent<TokenRenewalResponse>> {
    return next.handle(req).pipe(
      tap({
        next: (event: HttpEvent<TokenRenewalResponse>) => {
          // Verificar se é a resposta completa (HttpResponse)
          if (event instanceof HttpResponse) {
            // Checar header de renovação após cada resposta
            this.tokenRenewalService.checkAndRenewToken(event);
          }
        },
        error: (error: { status?: number }) => {
          // Se receber 401, token pode ter expirado
          if (error.status === 401) {
            console.log('Token expirado (401) - logout necessário');
            this.tokenRenewalService.logout();
          }
        }
      })
    );
  }
}

// ============================================================================
// EXEMPLO 2: Componente usando o serviço
// ============================================================================

@Component({
  selector: 'app-dashboard',
  template: `
    <div>
      <h1>Dashboard</h1>
      <p>{{ message }}</p>
      <button (click)="debugToken()">Ver Info do Token</button>
      <button (click)="renewTokenManually()">Renovar Token Manualmente</button>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  message = 'Bem-vindo!';
  private tokenRenewalService = inject(TokenRenewalService);

  ngOnInit(): void {
    // Ouvir quando o token for renovado
    this.tokenRenewalService.tokenRefreshed$.subscribe(() => {
      console.log('Novo token recebido, sessão renovada');
      this.message = 'Token renovado! Sua sessão continua ativa.';
    });
  }

  /**
   * Debug: Mostrar informações do token
   */
  debugToken(): void {
    this.tokenRenewalService.debugToken();
  }

  /**
   * Debug: Renovar token manualmente
   */
  renewTokenManually(): void {
    console.log('Renovando token manualmente...');
    this.tokenRenewalService.renewToken();
  }
}

// ============================================================================
// EXEMPLO 3: Registrar o Interceptor no app.config.ts (Angular 14+)
// ============================================================================

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenRefreshInterceptor,
      multi: true
    }
  ]
};

// ============================================================================
// EXEMPLO 4: Registrar em app.module.ts (Angular 13 e anteriores)
// ============================================================================

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenRefreshInterceptor,
      multi: true
    }
  ]
})
export class AppModule { }

/**
 * Fluxo Visual do Lado do Cliente
 *
 * 1. Usuário faz uma requisição
 *    ↓
 * 2. Servidor responde com dados + header (se token antigo)
 *    ↓
 * 3. Interceptor detecta header X-Token-Refresh-Available
 *    ↓
 * 4. TokenRenewalService.renewToken() é chamado
 *    ↓
 * 5. POST /api/renovar-token é feito
 *    ↓
 * 6. Servidor retorna novo token
 *    ↓
 * 7. TokenRenewalService salva novo token
 *    ↓
 * 8. Componentes são notificados via tokenRefreshed$
 *    ↓
 * 9. Próximas requisições usam novo token
 */

export {}; // Fim do arquivo
