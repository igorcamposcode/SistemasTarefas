// Interfaces para tipagem do sistema de tarefas

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  senha?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Prioridade {
  id: number;
  nome: string;
  cor?: string;
}

export interface Estado {
  id: number;
  nome: string;
  cor?: string;
}

export interface Documento {
  id: number;
  idtarefa: number;
  idusuario: number;
  nome: string;
  caminho: string;
  extensao: string;
  tamanho: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SubTarefa {
  id: number;
  titulo: string;
  descricao?: string;
  prioridade: string;
  estado: string;
  progresso: number;
  usuario?: string;
  idusuario?: number;
  dthrinicio?: Date | string | null;
  dthrfim?: Date | string | null;
  idmae?: number;
  Prioridade?: Prioridade;
  EstadoAtual?: Estado;
}

export interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  usuario: string;
  prioridade: string;
  estado: string;
  dthrfim: Date | string | null;
  dthrinicio: Date | string | null;
  documentos?: Documento[];
  subTarefas: SubTarefa[];
  progresso: number;
  idusuario?: number;
  idmae?: number | null;
  Usuario?: Usuario;
  Prioridade?: Prioridade;
  EstadoAtual?: Estado;
  Documentos?: Documento[];
  TarefasEstados?: {
    Estado?: Estado;
  }[];
  UsuarioResponsavel: string;
  SubTarefas?: SubTarefa[];
}

export interface MetadadosResponse {
  prioridades: Prioridade[];
  estados: Estado[];
}

export interface TarefasResponse {
  tarefas: Tarefa[];
  opcoes: {
    prioridades: Prioridade[];
    estados: Estado[];
  };
}

export interface CriarTarefaRequest {
  id?: number;
  idusuario: number;
  idprioridade: number;
  titulo: string;
  descricao?: string;
  idestado: number;
  idmae?: number;
  dthrinicio: string;
  dthrfim?: string | null;
}

export interface AtualizarTarefaRequest {
  idestado?: number;
  dthrfim?: string;
  progresso?: number;
  titulo?: string;
  descricao?: string;
  idprioridade?: number;
  dthrinicio?: string;
}

export interface UploadDocumentoResponse {
  message: string;
  documento: Documento;
}

export interface AuthResponse {
  message: string;
  user?: Usuario;
  token?: string;
}

export interface ProgressoSalvo {
  id: number;
  progresso: number;
  estado: string;
  subTarefas: {
    id: number;
    estado: string;
  }[];
}

export interface LocalStorageData {
  tarefas: ProgressoSalvo[];
  timestamp: number;
}