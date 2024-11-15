/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:3306'

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`,{email,senha})
  }

  cadastro(email: string, senha: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cadastro`, { email, senha });
  }

  logout() {
    localStorage.removeItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
