import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const API_PATH =  "http://localhost:3000/api/usuario"

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

   // Método para criar usuário
   criarUsuario(data: Object): Observable<Object> {
    return this.http.get(`${API_PATH}`, data);
  }

  // Método para listar todos os usuários
  listarUsuarios(): Observable<Object> {
    return this.http.get(`${API_PATH}`);
  }
}
