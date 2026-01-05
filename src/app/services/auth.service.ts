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
  private readonly TOKEN_KEY = 'authToken';
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
          this.armazenarToken(response.token);
          console.log('Token salvo:', response.token);
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
    return this.http.get<Usuario>(`${API_PATH}/usuario/${id}`);
  }
  // Limpa as credenciais do usuário
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    // localStorage.removeItem('userId'); // Remover se não estiver mais usando
  }
  armazenarToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
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
    return this.http.post(`${API_PATH}/recuperar-senha`, {
      email,
      senha,
      checkPassword,
    });
  }
  /** Obtém os dados do usuário logado */
  obterUsuarioLogado(): Observable<Usuario> {
    return this.http.get<Usuario>(`${API_PATH}/usuario/logado`, {
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
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return null;
    }
  }
  /** Obtém os dados do usuário pelo ID */
  obterUsuarioPorId(id: number): Observable<Usuario> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.obterToken() ?? ''}`
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
    return this.http.put<{ message: string }>(`${API_PATH}/usuario`, dados, { headers });
  }
}
