import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
export interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'authToken';
  private http = inject(HttpClient);

  // Método para criar usuário
  criarUsuario(data: object): Observable<object> {
    return this.http.post(`${environment.apiUrl}/usuario`, data);
  }
  /** Lista usuários (requer autenticação). Rota deve existir no backend (ex: GET /api/usuario). */
  listarUsuarios(): Observable<object> {
    const token = this.obterToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : undefined;
    return this.http.get(`${environment.apiUrl}/usuario`, { headers });
  }
  login(email: string, senha: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${environment.apiUrl}/login`, { email, senha }).pipe(
      tap((response) => {
        if (response.token) {
          // Valida o token antes de armazenar
          if (this.validarTokenJWT(response.token)) {
            this.armazenarToken(response.token);
            // Não loga o token por segurança
          } else {
            throw new Error('Token inválido recebido do servidor.');
          }
        } else {
          throw new Error('Token não recebido do servidor.');
        }
      })
    );
  }
  // Este método é redundante. O login já armazena o token, e o ID do usuário pode ser obtido do próprio token.
  armazenarCredenciais(token: string) {
    this.armazenarToken(token);
    // localStorage.setItem('userId', userId.toString()); // Desnecessário
  }
  // Obtém o ID do usuário logado armazenado no Local Storage
  // Busca os dados do usuário pelo ID
  getUsuarioId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.apiUrl}/usuario/${id}`);
  }
  // Limpa as credenciais do usuário
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    // localStorage.removeItem('userId'); // Remover se não estiver mais usando
  }
  /**
   * Armazena o token de forma segura
   * Valida o token antes de armazenar
   */
  armazenarToken(token: string): void {
    if (!this.validarTokenJWT(token)) {
      throw new Error('Token inválido. Não foi possível armazenar.');
    }
    try {
      localStorage.setItem(this.TOKEN_KEY, token);
    } catch {
      // Em caso de erro (ex: localStorage desabilitado), não expõe detalhes
      throw new Error('Erro ao armazenar token de autenticação.');
    }
  }

  /**
   * Valida a estrutura básica de um token JWT
   * Verifica se tem 3 partes separadas por ponto
   */
  private validarTokenJWT(token: string): boolean {
    if (!token || typeof token !== 'string') {
      return false;
    }
    
    const parts = token.split('.');
    if (parts.length !== 3) {
      return false;
    }
    
    // Verifica se as partes não estão vazias
    return parts.every(part => part.length > 0);
  }

  obterToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  removerToken(): void {
    this.logout();
  }
  estaAutenticado(): boolean {
    return !!this.obterToken(); // Retorna verdadeiro se o token existir
  }
  recuperarSenha(
    email: string,
    senha: string,
    checkPassword: string
  ): Observable<object> {
    return this.http.post(`${environment.apiUrl}/recuperar-senha`, {
      email,
      senha,
      checkPassword,
    });
  }
  /** Obtém os dados do usuário logado */
  obterUsuarioLogado(): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.apiUrl}/usuario/logado`, {
      // A adição do header de autorização é idealmente feita por um HttpInterceptor.
      headers: { Authorization: `Bearer ${this.obterToken()}` },
    });
  }
  /** Obtém o ID do usuário logado */
  obterIdUsuarioLogado(): number | null {
    const token = this.obterToken();
    if (!token) {
      return null;
    }
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decodifica o payload do token JWT
      return payload.id; // Retorna o ID do usuário do payload
    } catch {
      // Token inválido ou corrompido
      // Token inválido ou corrompido
      return null;
    }
  }
  /** Obtém os dados do usuário pelo ID */
  obterUsuarioPorId(id: number): Observable<Usuario> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.obterToken() ?? ''}`
    );
    return this.http.get<Usuario>(`${environment.apiUrl}/usuario/${id}`, { headers }).pipe(
      catchError((err) => {
        // Não loga detalhes do erro por segurança
        throw err;
      })
    );
  }
  /**
   * Atualiza os dados do usuário no backend
   * @param dadosAtualizados
   * @returns
   */
  atualizarUsuario(dados: Partial<Usuario>): Observable<{ message: string }> {
    const token = this.obterToken();
    if (!token) {
      throw new Error(
        'Token não encontrado. O usuário precisa estar autenticado.'
      );
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    // Ajuste a rota conforme o backend: singular ou plural
    return this.http.put<{ message: string }>(`${environment.apiUrl}/usuario`, dados, { headers });
  }
}
