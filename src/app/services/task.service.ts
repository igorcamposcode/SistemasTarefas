import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

export const API_PATH = 'http://localhost:3000/api';

@Injectable({
  providedIn: "root",
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


  /** Criar uma nova tarefa */
  criarTarefa(tarefa: any): Observable<any> {
    return this.http.post(`${API_PATH}/tarefa`, tarefa);
  }

  /** Concluir uma tarefa, atualizando dthrfim */
  concluirTarefa(id: number, data: any): Observable<any> {
    return this.http.put(`${API_PATH}/tarefa/${id}/concluir`, data);
  }

  /** Obter subtarefas pelo ID do usuário */
  obterSubtarefas(idUsuario: number): Observable<any> {
    return this.http.get(`${API_PATH}/subtarefa/${idUsuario}`);
  }

  /** Obter todas as tarefas de um usuário */
  obterTarefas(idUsuario: number): Observable<any> {
    return this.http.get(`${API_PATH}/usuario/${idUsuario}`);
  }

  /** Excluir uma tarefa pelo ID */
  excluirTarefa(id: number): Observable<any> {
    return this.http.delete(`${API_PATH}/tarefa/${id}`);
  }
}
