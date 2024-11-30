import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

export const API_PATH = 'http://localhost:3000/api/tarefa';

@Injectable({
  providedIn: "root",
})
export class TaskService {


  criarTarefa(tarefa: any): Observable<any> {
    return this.http.post(`${API_PATH}/tarefa`, tarefa);
  }

  obterMetadados(): Observable<any> {
    return this.http.get(`${API_PATH}/tarefa`);
  }

  atualizarTarefa(id: any, tarefa: any) {
    return this.http.post(`${API_PATH}/tarefa`,tarefa);
  }

  constructor(private http: HttpClient) {}

  obterEstados(): Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH}/estado`);
  }

  obterPrioridades(): Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH}/prioridade`);
  }

  obterTarefas(): Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH}/tarefa`);
  }

  atualizarEstadoTarefa(idtarefa: number, idestado: number): Observable<any> {
    return this.http.put(`${API_PATH}/tarefa/${idtarefa}`, { idestado, dthrfim: new Date() });
  }
  // Excluir tarefa
  excluirTarefa(id: number): Observable<any> {
    return this.http.delete(`${API_PATH}/tarefa/${id}`);
  }

  // Obter prioridades
  getPrioridades(): Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH}/prioridade`);
  }
}
