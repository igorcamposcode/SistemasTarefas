import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { 
  MetadadosResponse, 
  TarefasResponse, 
  CriarTarefaRequest, 
  AtualizarTarefaRequest, 
  UploadDocumentoResponse, 
  Documento,
  Estado,
  Prioridade,
  SubTarefa 
} from '../types/interfaces';

export const API_PATH = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  /** Obter prioridades e estados disponíveis */
  obterMetadados(): Observable<MetadadosResponse> {
    return this.http.get<MetadadosResponse>(`${API_PATH}/tarefa/meta`);
  }

  /** Obter estados relacionados às tarefas */
  obterEstadosTarefa(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${API_PATH}/tarefa-estados`);
  }

  obterPrioridades(): Observable<Prioridade[]> {
    return this.http.get<Prioridade[]>(`${API_PATH}/prioridades`);
  }

  // Criar nova tarefa
  criarTarefa(tarefa: CriarTarefaRequest): Observable<{ id: number; message: string }> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('authToken')}`
    );
    return this.http.post<{ id: number; message: string }>(`${API_PATH}/tarefa`, tarefa, { headers });
  }

  // Incluir subtarefa vinculada à tarefa pai
  criarSubTarefa(idmae: number, subtarefaData: CriarTarefaRequest): Observable<{ id: number; message: string }> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('authToken')}`
    );
    return this.http.post<{ id: number; message: string }>(
      `${API_PATH}/tarefa/${idmae}/subtarefa`,
      subtarefaData,
      { headers }
    );
  }

  atualizarSubTarefa(id: number, idmae: number, subTarefaData: AtualizarTarefaRequest): Observable<{ message: string }> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('authToken')}`
    );

    // Garante que os campos `dthrfim` e outros dados estão no formato correto
    const body = {
      ...subTarefaData,
      dthrfim: subTarefaData.dthrfim
        ? new Date(subTarefaData.dthrfim).toISOString()
        : null,
    };

    // Constrói a URL correta para a API
    return this.http.put<{ message: string }>(`${API_PATH}/tarefa/${id}/subtarefa/${idmae}`, body, { headers });
  }

  excluirSubTarefa(id: number): Observable<{ message: string }> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('authToken')}`
    );
    return this.http.delete<{ message: string }>(`${API_PATH}/tarefa/subtarefa/${id}`, { headers });
  }

  atualizarTarefa(id: number, tarefaData: AtualizarTarefaRequest): Observable<{ message: string }> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('authToken')}` // Certifique-se de que o token está armazenado corretamente
    );

    // Garante que os campos `dthrfim` e outros dados estão no formato correto
    const body = {
      ...tarefaData,
      dthrfim: tarefaData.dthrfim
        ? new Date(tarefaData.dthrfim).toISOString()
        : null, // Formata `dthrfim` corretamente
    };

    return this.http.put<{ message: string }>(`${API_PATH}/tarefa/${id}`, body, { headers });
  }

  // Excluir tarefa
  excluirTarefa(id: number): Observable<{ message: string }> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('authToken')}`
    );
    return this.http.delete<{ message: string }>(`${API_PATH}/tarefa/${id}`, { headers });
  }

  /** Obter subtarefas pelo ID do usuário */
  obterSubtarefas(idusuario: number): Observable<SubTarefa[]> {
    return this.http.get<SubTarefa[]>(`${API_PATH}/tarefa/${idusuario}`);
  }

  concluirTarefa(id: number): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${API_PATH}/tarefa/${id}/concluir`, {});
  }

  // Obter progresso de uma tarefa
  getProgresso(id: number): Observable<{ progresso: number }> {
    return this.http.get<{ progresso: number }>(`${API_PATH}/tarefa/${id}/progresso`);
  }

  atualizarProgresso(id: number, progresso: number): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${API_PATH}/tarefa/${id}/progresso`, { progresso });
  }

  /** Obter todas as tarefas de um usuário */
  obterTarefas(): Observable<TarefasResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Inclui o token JWT
    });

    return this.http.get<TarefasResponse>(`${API_PATH}/tarefa`, { headers });
  }

  /** Upload de documento para uma tarefa */
  uploadDocumento(idtarefa: number, idusuario: number, arquivo: File): Observable<UploadDocumentoResponse> {
    console.log('TaskService - Iniciando upload...');
    console.log('ID Tarefa:', idtarefa);
    console.log('ID Usuário:', idusuario);
    console.log('Arquivo:', arquivo);

    const formData = new FormData();
    formData.append('documento', arquivo);
    formData.append('idtarefa', idtarefa.toString());
    formData.append('idusuario', idusuario.toString());

    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    });

    console.log('Headers:', headers);
    console.log('FormData criado com documento e IDs');

    return this.http.post<UploadDocumentoResponse>(`${API_PATH}/documento/upload`, formData, { headers });
  }

  /** Obter documentos de uma tarefa */
  obterDocumentosTarefa(idtarefa: number, idusuario: number): Observable<Documento[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    });

    return this.http.get<Documento[]>(`${API_PATH}/documento/tarefa/${idtarefa}/${idusuario}`, { headers });
  }

  /** Download de um documento */
  downloadDocumento(id: number): Observable<Blob> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    });

    return this.http.get(`${API_PATH}/documento/download/${id}`, {
      headers,
      responseType: 'blob'
    });
  }

  /** Excluir um documento */
  excluirDocumento(id: number): Observable<{ message: string }> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    });

    return this.http.delete<{ message: string }>(`${API_PATH}/documento/${id}`, { headers });
  }
}
