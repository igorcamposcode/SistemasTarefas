import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap} from 'rxjs';

export const API_PATH = 'http://localhost:3000/api';

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
  private http = inject(HttpClient);

  // Método para criar usuário
  criarUsuario(data: object): Observable<object> {
    return this.http.post(`${API_PATH}/usuario`, data);
  }

  // Método para listar todos os usuários
  listarUsuarios(): Observable<object> {
    return this.http.get(`${API_PATH}`);
  }
  login(email: string, senha: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${API_PATH}/login`, { email, senha }).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token); // Salva o token JWT
          console.log('Token salvo:', response.token);
        } else {
          throw new Error('Token não recebido do servidor.');
        }
      })
    );
  }

  // Armazena o token e o ID do usuário no Local Storage
  armazenarCredenciais(token: string, userId: number) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId.toString());
  }

  // Obtém o ID do usuário logado armazenado no Local Storage
  // Busca os dados do usuário pelo ID
  getUsuarioId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${API_PATH}/usuario/${id}`);
  }

  // Limpa as credenciais do usuário
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
  }
  armazenarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  obterToken(): string | null {
    return localStorage.getItem('token');
  }

  removerToken(): void {
    localStorage.removeItem('token');
  }

  estaAutenticado(): boolean {
    return !!this.obterToken(); // Retorna verdadeiro se o token existir
  }

  recuperarSenha(
    email: string,
    senha: string,
    checkPassword: string
  ): Observable<object> {
    return this.http.post(`${API_PATH}/recuperar-senha`, {
      email,
      senha,
      checkPassword,
    });
  }

  /** Obtém os dados do usuário logado */
  obterUsuarioLogado(): Observable<Usuario> {
    return this.http.get<Usuario>(`${API_PATH}/usuario/logado`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
    });
  }

  /** Obtém o ID do usuário logado */
  obterIdUsuarioLogado(): number {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('Usuário não autenticado. Token não encontrado.');
    }

    const payload = JSON.parse(atob(token.split('.')[1])); // Decodifica o token JWT
    return payload.id; // Retorna o ID do usuário do payload
  }

  /** Obtém os dados do usuário pelo ID */
  obterUsuarioPorId(id: number): Observable<Usuario> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('authToken')}`
    );
    return this.http.get<Usuario>(`${API_PATH}/usuario/${id}`, { headers }).pipe(
      catchError((err) => {
        console.error('Erro ao obter usuário:', err);
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
    const token = localStorage.getItem('authToken');
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
    return this.http.put<{ message: string }>(`${API_PATH}/usuario`, dados, { headers });
  }
}
