export interface Tarefa {
  estado: any;
  documento: any;
  dthrfim: string | number | Date;
  dthrinicio: string | number | Date;
  id?: number;
  titulo: string;
  descricao?: string;
  prioridade: string;
  usuario: string;
  dataFim?: string;
  subtarefas?: Tarefa[];
}

export interface Prioridade {
  id: number;
  nome: string;
}

export interface Usuario {
  id: number;
  nome: string;
  telefone: string;
  email: string;
}
