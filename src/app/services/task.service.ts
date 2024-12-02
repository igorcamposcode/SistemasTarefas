import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export const API_PATH = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) { }

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

  // Busca o progresso da tarefa pelo ID
  getProgresso(id: number): Observable<{ progresso: number }> {
    return this.http.get<{ progresso: number }>(`${API_PATH}/tarefa/${id}/progresso`);
  }

  // Concluir Tarefa
  concluirTarefa(idTarefa: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Inclui o token JWT
    });

    return this.http.put(`${API_PATH}/tarefa/${idTarefa}/concluir`, {}, { headers });
  }

  atualizarTarefa(id: number, tarefaData: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('authToken')}` // Certifique-se de que o token está armazenado corretamente
    );

    // Garante que os campos `dthrfim` e outros dados estão no formato correto
    const body = {
      ...tarefaData,
      dthrfim: tarefaData.dthrfim ? new Date(tarefaData.dthrfim).toISOString() : null, // Formata `dthrfim` corretamente
    };

    return this.http.put(`${API_PATH}/tarefa/${id}`, body, { headers });
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
  obterTarefas(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Inclui o token JWT
    });

    return this.http.get(`${API_PATH}/tarefa`, { headers });
  }
}
