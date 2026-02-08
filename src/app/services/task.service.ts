import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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

  /**
   * Obtém o token de autenticação dinamicamente do localStorage
   * Isso garante que sempre usamos o token mais recente
   * Segurança: Não armazena o token em memória, sempre busca do storage
   */
  private getHeaders(): HttpHeaders {
    const token = this.getAuthToken();
    if (!token) {
      // Retorna headers sem autorização se não houver token
      // O backend deve validar e retornar erro 401
      return new HttpHeaders();
    }
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  /**
   * Obtém o token de autenticação de forma segura
   * @returns Token de autenticação ou null se não existir
   */
  private getAuthToken(): string | null {
    try {
      return localStorage.getItem('authToken');
    } catch {
      return null;
    }
  }

  /** Obter prioridades e estados disponíveis */
  public obterMetadados(): Observable<MetadadosTarefa> {
    return this.http.get<MetadadosTarefa>(`${environment.apiUrl}/tarefa/meta`);
  }

  /** Obter estados relacionados às tarefas */
  public obterEstadosTarefa(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${environment.apiUrl}/tarefa-estados`);
  }

  public obterPrioridades(): Observable<Prioridade[]> {
    return this.http.get<Prioridade[]>(`${environment.apiUrl}/prioridades`);
  }

  // Criar nova tarefa
  public criarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(
      `${environment.apiUrl}/tarefa`,
      tarefa,
      { headers: this.getHeaders() }
    );
  }

  // Incluir subtarefa vinculada à tarefa pai
  public criarSubTarefa(idmae: number, subtarefaData: Partial<SubTarefa>): Observable<SubTarefa> {
    return this.http.post<SubTarefa>(
      `${environment.apiUrl}/tarefa/${idmae}/subtarefa`,
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
      `${environment.apiUrl}/tarefa/${id}/subtarefa/${idmae}`,
      body,
      { headers: this.getHeaders() }
    );
  }

  public excluirSubTarefa(id: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.apiUrl}/tarefa/subtarefa/${id}`,
      { headers: this.getHeaders() }
    );
  }

  public atualizarTarefa(id: number, tarefaData: Partial<Tarefa>): Observable<Tarefa> {
    const body = {
      ...tarefaData,
      dthrfim: tarefaData.dthrfim ? new Date(tarefaData.dthrfim).toISOString() : null,
    };

    return this.http.put<Tarefa>(
      `${environment.apiUrl}/tarefa/${id}`,
      body,
      { headers: this.getHeaders() }
    );
  }

  // Excluir tarefa
  public excluirTarefa(id: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.apiUrl}/tarefa/${id}`,
      { headers: this.getHeaders() }
    );
  }

  /** Obter subtarefas pelo ID do usuário */
  public obterSubtarefas(idusuario: number): Observable<SubTarefa[]> {
    return this.http.get<SubTarefa[]>(
      `${environment.apiUrl}/tarefa/${idusuario}`,
      { headers: this.getHeaders() }
    );
  }

  public concluirTarefa(id: number): Observable<Tarefa> {
    return this.http.put<Tarefa>(
      `${environment.apiUrl}/tarefa/${id}/concluir`,
      {},
      { headers: this.getHeaders() }
    );
  }

  // Obter progresso de uma tarefa
  public getProgresso(id: number): Observable<ProgressoTarefa> {
    return this.http.get<ProgressoTarefa>(
      `${environment.apiUrl}/tarefa/${id}/progresso`,
      { headers: this.getHeaders() }
    );
  }

  public atualizarProgresso(id: number, progresso: number): Observable<ProgressoTarefa> {
    return this.http.put<ProgressoTarefa>(
      `${environment.apiUrl}/tarefa/${id}/progresso`,
      { progresso },
      { headers: this.getHeaders() }
    );
  }

  /** Obter todas as tarefas de um usuário */
  public obterTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(
      `${environment.apiUrl}/tarefa`,
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
      `${environment.apiUrl}/documento/upload`,
      formData,
      { headers: this.getHeaders() }
    );
  }

  /** Obter documentos de uma tarefa */
  public obterDocumentosTarefa(idtarefa: number, idusuario: number): Observable<Documento[]> {
    return this.http.get<Documento[]>(
      `${environment.apiUrl}/documento/tarefa/${idtarefa}/${idusuario}`,
      { headers: this.getHeaders() }
    );
  }

  /** Download de um documento */
  public downloadDocumento(id: number): Observable<Blob> {
    return this.http.get(
      `${environment.apiUrl}/documento/download/${id}`,
      {
        headers: this.getHeaders(),
        responseType: 'blob'
      }
    );
  }

  /** Excluir um documento */
  public excluirDocumento(id: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.apiUrl}/documento/${id}`,
      { headers: this.getHeaders() }
    );
  }

  // Método removido - token é obtido dinamicamente via getAuthToken()
  // Isso melhora a segurança evitando armazenar token em memória
}
