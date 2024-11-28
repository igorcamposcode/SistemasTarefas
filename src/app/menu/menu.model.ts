export interface SubTarefa {
    titulo: string;
    estado: 'Pendente' | 'Concluído';
  }
  
  export interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    prioridade: string;
    usuario: string;
    dataInicio: string;
    dataFim: string;
    subtarefas: SubTarefa[];
  }
  