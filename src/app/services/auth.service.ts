import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  login(email: string, senha: string): Observable<any> {
    return this.http.post(`${API_PATH}/login`, { email, senha });
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

  listarTarefas(): Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH}`);
  }

  criarTarefa(tarefa: any): Observable<any> {
    return this.http.post(`${API_PATH}`, tarefa);
  }

  atualizarTarefa(id: number, tarefa: any): Observable<any> {
    return this.http.put(`${API_PATH}/${id}`, tarefa);
  }

  excluirTarefa(id: number): Observable<any> {
    return this.http.delete(`${API_PATH}/${id}`);
  }
}
