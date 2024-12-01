import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export const API_PATH = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  /** Obter prioridades e estados disponíveis */
  obterMetadados(): Observable<any> {
    return this.http.get(`${API_PATH}/tarefa/meta`);
  }

  /** Obter estados relacionados às tarefas */
  obterEstadosTarefa(): Observable<any> {
    return this.http.get(`${API_PATH}/tarefa-estados`);
  }

  obterPrioridades(): Observable<any> {
    return this.http.get(`${API_PATH}/prioridades`);
  }

  // Criar nova tarefa
  criarTarefa(tarefa: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('authToken')}`
    );
    return this.http.post(`${API_PATH}/tarefa`, tarefa, { headers });
  }

  // Concluir tarefa
  concluirTarefa(id: number, dados: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('authToken')}`
    );
    return this.http.put(`${API_PATH}/tarefa/${id}/concluir`, dados, {
      headers,
    });
  }

  // Excluir tarefa
  excluirTarefa(id: number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('authToken')}`
    );
    return this.http.delete(`${API_PATH}/tarefa/${id}`, { headers });
  }

  /** Obter subtarefas pelo ID do usuário */
  obterSubtarefas(idusuario: number): Observable<any> {
    return this.http.get(`${API_PATH}/subtarefa/${idusuario}`);
  }

  /** Obter todas as tarefas de um usuário */
  obterTarefas():Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH}/tarefa`).pipe(
      catchError((err) => {
        console.error('Erro ao obter tarefas:', err);
        return throwError(() => new Error('Erro ao carregar tarefas.'));
      })
    );
  }
}
