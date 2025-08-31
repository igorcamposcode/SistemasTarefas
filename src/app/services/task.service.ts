import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const API_PATH = 'http://localhost:3000/api';

// Interfaces para tipagem forte
export interface Prioridade {
  id: number;
  nome: string;
}

export interface Estado {
  id: number;
  nome: string;
}

export interface Tarefa {
  id?: number;
  idusuario: number;
  idprioridade: number;
  titulo: string;
  descricao?: string;
  idestado: number;
  idmae?: number;
  dthrinicio?: string;
  dthrfim?: string;
  progresso?: number;
  usuario?: string;
  prioridade?: string;
  estado?: string;
  documento?: Documento;
  subTarefas?: SubTarefa[];
}

export interface SubTarefa extends Tarefa {
  idmae: number;
}

export interface Documento {
  id?: number;
  nome: string;
  caminho: string;
  idtarefa: number;
  idusuario: number;
}

export interface MetadadosTarefa {
  prioridades: Prioridade[];
  estados: Estado[];
}

export interface ProgressoTarefa {
  progresso: number;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private authToken = localStorage.getItem('authToken');

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
  }

  /** Obter prioridades e estados disponíveis */
  public obterMetadados(): Observable<MetadadosTarefa> {
    return this.http.get<MetadadosTarefa>(`${API_PATH}/tarefa/meta`);
  }

  /** Obter estados relacionados às tarefas */
  public obterEstadosTarefa(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${API_PATH}/tarefa-estados`);
  }

  public obterPrioridades(): Observable<Prioridade[]> {
    return this.http.get<Prioridade[]>(`${API_PATH}/prioridades`);
  }

  // Criar nova tarefa
  public criarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(
      `${API_PATH}/tarefa`,
      tarefa,
      { headers: this.getHeaders() }
    );
  }

  // Incluir subtarefa vinculada à tarefa pai
  public criarSubTarefa(idmae: number, subtarefaData: Partial<SubTarefa>): Observable<SubTarefa> {
    return this.http.post<SubTarefa>(
      `${API_PATH}/tarefa/${idmae}/subtarefa`,
      subtarefaData,
      { headers: this.getHeaders() }
    );
  }

  public atualizarSubTarefa(id: number, idmae: number, subTarefaData: Partial<SubTarefa>): Observable<SubTarefa> {
    const body = {
      ...subTarefaData,
      dthrfim: subTarefaData.dthrfim ? new Date(subTarefaData.dthrfim).toISOString() : null,
    };

    return this.http.put<SubTarefa>(
      `${API_PATH}/tarefa/${id}/subtarefa/${idmae}`,
      body,
      { headers: this.getHeaders() }
    );
  }

  public excluirSubTarefa(id: number): Observable<void> {
    return this.http.delete<void>(
      `${API_PATH}/tarefa/subtarefa/${id}`,
      { headers: this.getHeaders() }
    );
  }

  public atualizarTarefa(id: number, tarefaData: Partial<Tarefa>): Observable<Tarefa> {
    const body = {
      ...tarefaData,
      dthrfim: tarefaData.dthrfim ? new Date(tarefaData.dthrfim).toISOString() : null,
    };

    return this.http.put<Tarefa>(
      `${API_PATH}/tarefa/${id}`,
      body,
      { headers: this.getHeaders() }
    );
  }

  // Excluir tarefa
  public excluirTarefa(id: number): Observable<void> {
    return this.http.delete<void>(
      `${API_PATH}/tarefa/${id}`,
      { headers: this.getHeaders() }
    );
  }

  /** Obter subtarefas pelo ID do usuário */
  public obterSubtarefas(idusuario: number): Observable<SubTarefa[]> {
    return this.http.get<SubTarefa[]>(
      `${API_PATH}/tarefa/${idusuario}`,
      { headers: this.getHeaders() }
    );
  }

  public concluirTarefa(id: number): Observable<Tarefa> {
    return this.http.put<Tarefa>(
      `${API_PATH}/tarefa/${id}/concluir`,
      {},
      { headers: this.getHeaders() }
    );
  }

  // Obter progresso de uma tarefa
  public getProgresso(id: number): Observable<ProgressoTarefa> {
    return this.http.get<ProgressoTarefa>(
      `${API_PATH}/tarefa/${id}/progresso`,
      { headers: this.getHeaders() }
    );
  }

  public atualizarProgresso(id: number, progresso: number): Observable<ProgressoTarefa> {
    return this.http.put<ProgressoTarefa>(
      `${API_PATH}/tarefa/${id}/progresso`,
      { progresso },
      { headers: this.getHeaders() }
    );
  }

  /** Obter todas as tarefas de um usuário */
  public obterTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(
      `${API_PATH}/tarefa`,
      { headers: this.getHeaders() }
    );
  }

  /** Upload de documento para uma tarefa */
  public uploadDocumento(idtarefa: number, idusuario: number, arquivo: File): Observable<Documento> {
    const formData = new FormData();
    formData.append('documento', arquivo);
    formData.append('idtarefa', idtarefa.toString());
    formData.append('idusuario', idusuario.toString());

    return this.http.post<Documento>(
      `${API_PATH}/documento/upload`,
      formData,
      { headers: this.getHeaders() }
    );
  }

  /** Obter documentos de uma tarefa */
  public obterDocumentosTarefa(idtarefa: number, idusuario: number): Observable<Documento[]> {
    return this.http.get<Documento[]>(
      `${API_PATH}/documento/tarefa/${idtarefa}/${idusuario}`,
      { headers: this.getHeaders() }
    );
  }

  /** Download de um documento */
  public downloadDocumento(id: number): Observable<Blob> {
    return this.http.get(
      `${API_PATH}/documento/download/${id}`,
      {
        headers: this.getHeaders(),
        responseType: 'blob'
      }
    );
  }

  /** Excluir um documento */
  public excluirDocumento(id: number): Observable<void> {
    return this.http.delete<void>(
      `${API_PATH}/documento/${id}`,
      { headers: this.getHeaders() }
    );
  }

  // Atualizar token de autenticação
  public atualizarToken(): void {
    this.authToken = localStorage.getItem('authToken');
  }
}
