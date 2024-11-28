import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../menu/menu.model'

export const API_PATH = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // Método para criar usuário
  criarUsuario(data: Object): Observable<Object> {
    return this.http.post(`${API_PATH}/usuario`, data);
  }

  // Método para listar todos os usuários
  listarUsuarios(): Observable<Object> {
    return this.http.get(`${API_PATH}`);
  }
// Realiza o login e retorna os dados do usuário e token
login( email: string, senha: string ): Observable<any> {
  return this.http.post(`${API_PATH}/login`, { email, senha })
}

// Armazena o token e o ID do usuário no Local Storage
armazenarCredenciais(token: string, userId: number) {
  localStorage.setItem('authToken', token);
  localStorage.setItem('userId', userId.toString());
}

// Obtém o ID do usuário logado armazenado no Local Storage
 // Busca os dados do usuário pelo ID
 getUsuarioId(): Observable<any> {
  return this.http.get(`${API_PATH}/${1}`);
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
    email: Object,
    senha: Object,
    checkPassword: Object
  ): Observable<Object> {
    return this.http.post(`${API_PATH}/recuperar-senha`, {
      email,
      senha,
      checkPassword,
    });
  }

  // Obtém os dados do usuário logado
  getUsuario(): Observable<any> {
    return this.http.get(`${API_PATH}`); // Realiza um GET para buscar os dados do usuário
  }

  // Atualiza os dados do usuário
  atualizarUsuario(usuario: Object): Observable<Object> {
    return this.http.put(`${API_PATH}/usuario`, usuario); // Realiza um PUT para atualizar os dados do usuário
  }

}
