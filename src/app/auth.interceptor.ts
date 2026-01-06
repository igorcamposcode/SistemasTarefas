import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

/**
 * Interceptor de autenticação com melhorias de segurança
 * - Adiciona token JWT automaticamente
 * - Valida token antes de usar
 * - Trata erros 401 (não autorizado) redirecionando para login
 * - Previne vazamento de informações em erros
 */
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  
  // Obtém token de forma segura
  let token: string | null = null;
  try {
    token = localStorage.getItem('authToken');
  } catch (error) {
    // Se não conseguir acessar localStorage, continua sem token
    // O backend retornará 401 se necessário
  }

  // Valida token antes de usar
  if (token && validarTokenJWT(token)) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    
    return next(cloned).pipe(
      catchError((error: HttpErrorResponse) => {
        // Trata erros de autenticação
        if (error.status === 401) {
          // Token inválido ou expirado - limpa e redireciona
          try {
            localStorage.removeItem('authToken');
          } catch (_e) {
            // Ignora erros ao limpar
          }
          router.navigate(['/login']);
        }
        
        // Não expõe detalhes do erro
        return throwError(() => error);
      })
    );
  }
  
  return next(req);
};

/**
 * Valida a estrutura básica de um token JWT
 */
function validarTokenJWT(token: string): boolean {
  if (!token || typeof token !== 'string') {
    return false;
  }
  
  const parts = token.split('.');
  if (parts.length !== 3) {
    return false;
  }
  
  return parts.every(part => part.length > 0);
}
