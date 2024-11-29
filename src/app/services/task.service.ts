import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

export const API_PATH = 'http://localhost:3000/api';

@Injectable({
  providedIn: "root",
})
export class TaskService {
  atualizarTarefa(id: any, tarefa: any) {
    return this.http.post(`${API_PATH}/tarefas`,tarefa);
  }

  constructor(private http: HttpClient) {}

  obterEstados(): Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH}/estados`);
  }

  obterPrioridades(): Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH}/prioridades`);
  }

  obterTarefas(): Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH}/tarefas`);
  }

  criarTarefa(tarefa: any): Observable<any> {
    return this.http.post(`${API_PATH}/tarefas`, tarefa);
  }

  atualizarEstadoTarefa(idtarefa: number, idestado: number): Observable<any> {
    return this.http.put(`${API_PATH}/tarefaEstado/${idtarefa}`, { idestado, dthrfim: new Date() });
  }
  // Excluir tarefa
  excluirTarefa(id: number): Observable<any> {
    return this.http.delete(`${API_PATH}/tarefa/${id}`);
  }

  // Obter prioridades
  getPrioridades(): Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH}/prioridades`);
  }
}
