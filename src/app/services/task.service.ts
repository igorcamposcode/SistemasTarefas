import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

export const API_PATH = 'http://localhost:3000/api';

@Injectable({
  providedIn: "root",
})
export class TaskService {

  constructor(private http: HttpClient) {}

  // Obter todas as tarefas
  getTarefas(): Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH}/tarefa`);
  }

  // Criar nova tarefa
  criarTarefa(tarefa: Object): Observable<Object> {
    return this.http.post(`${API_PATH}/tarefa`, tarefa);
  }

  // Atualizar tarefa existente
  atualizarTarefa(id: number, tarefa: any): Observable<any> {
    return this.http.put(`${API_PATH}/tarefa/${id}`, tarefa);
  }

  // Excluir tarefa
  excluirTarefa(id: number): Observable<any> {
    return this.http.delete(`${API_PATH}/tarefa/${id}`);
  }


  // Obter dados do usuário
  getUsuario(): Observable<any> {
    return this.http.get(`${API_PATH}/usuario`);
  }

  // Atualizar dados do usuário
  atualizarUsuario(usuario: any): Observable<any> {
    return this.http.put(`${API_PATH}/usuario`, usuario);
  }

  // Obter prioridades
  getPrioridades(): Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH}/prioridades`);
  }
}
