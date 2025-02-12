import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { TaskService } from '../services/task.service';

interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  usuario: string;
  prioridade: string;
  estado: string;
  dthrfim: Date | number | string | null;
  dthrinicio: Date | number | string | null;
  documento?: { nome: string; url: string };
  subTarefas: SubTarefa[];
  progresso: number; // Adiciona a propriedade 'progresso'
}

interface SubTarefa {
  id: number;
  titulo: string;
  prioridade: string;
  estado: string;
  progresso: number; // ✅ Adicionando a propriedade progresso
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgFor, DatePipe, NgIf, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  usuario: any = {}; // Dados do usuário logado
  tarefas: any[] = []; // Lista de tarefas do usuário
  prioridades: any[] = []; // Prioridades disponíveis (ex.: Muito alta, Alta)
  estados: any[] = []; // Estados disponíveis (ex.: Aberto, Concluído)
  loading: boolean = false;

  usuarioForm!: FormGroup; // Formulário para edição de dados do usuário
  tarefaForm!: FormGroup; // Formulário para criação/edição de tarefas

  isUsuarioModalVisible = false; // Controle de visibilidade do modal de usuário
  isEditarUsuarioModalVisible = false; // Controle de visibilidade do modal de edição de usuário
  isModalVisible = false; // Controle de visibilidade do modal de tarefa
  isSubTarefa = false; // Indica se estamos adicionando uma subtarefa
  tarefaMae: any = null; // Referência à tarefa principal

  tarefaEditando: any = null; // Tarefa sendo editada (null para criação de nova)

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarUsuario(); // Obter dados do usuário logado
    this.carregarTarefas(); // Obter lista de tarefas do usuário
    this.carregarPrioridadesEstados(); // Obter prioridades e estados disponíveis
    this.inicializarFormularios(); // Configurar formulários reativos
  }

  /** Inicializa os formulários reativos */
  inicializarFormularios(): void {
    // Verifica se `usuario` está carregado antes de inicializar
    if (!this.usuario) {
      console.warn(
        'Usuário não carregado. Aguardando carregamento para inicializar formulários.'
      );
      return;
    }

    // Formulário para dados do usuário
    this.usuarioForm = this.fb.group({
      nome: [this.usuario.nome || '', Validators.required],
      telefone: [
        this.usuario.telefone || '',
        [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)],
      ],
      email: [
        this.usuario.email || '',
        [Validators.required, Validators.email],
      ],
    });

    // Formulário para criação/edição de tarefas
    function getHorarioBrasilia(): Date {
      const dataAtual = new Date();
      const fusoHorarioBrasilia = -3; // UTC-3 para Brasília
      const diferencaUTC = dataAtual.getTimezoneOffset() / 60; // Diferença do UTC em horas
      const horarioBrasilia = new Date(
        dataAtual.setHours(
          dataAtual.getHours() + fusoHorarioBrasilia - diferencaUTC
        )
      );
      return horarioBrasilia;
    }

    this.tarefaForm = this.fb.group({
      id: [null], // ID da tarefa para atualizações
      idusuario: [this.authService.obterIdUsuarioLogado(), Validators.required], // ID do usuário logado
      idprioridade: [''], // Prioridade selecionada
      titulo: ['', Validators.required], // Título da tarefa
      descricao: [''], // Descrição opcional
      idestado: [''], // Estado da tarefa
      idmae: [null], // Subtarefa (opcional)
      dthrinicio: [
        getHorarioBrasilia().toISOString().slice(0, 16), // Data de início ajustada para Brasília
      ],
      dthrfim: [
        getHorarioBrasilia().toISOString().slice(0, 16),
        null, // Inicialmente `null`, atualizado quando o usuário preenche
      ],
    });
  }

  /** Carregar o usuário logado */
  carregarUsuarioLogado(): void {
    this.authService.obterUsuarioLogado().subscribe({
      next: (usuario) => {
        this.usuario = usuario;

        // Atualiza o formulário com o ID do usuário logado
        this.tarefaForm.patchValue({ idUsuario: usuario.id });
      },
      error: () => alert('Erro ao carregar usuário logado.'),
    });
  }

  /** Carrega os dados do usuário logado */
  carregarUsuario(): void {
    try {
      const idUsuario = this.authService.obterIdUsuarioLogado();
      this.authService.obterUsuarioPorId(idUsuario).subscribe({
        next: (res) => {
          this.usuario = res;
          this.usuarioForm.patchValue(this.usuario); // Preenche o formulário
        },
        error: (err) => {
          console.error('Erro ao carregar usuário:', err);
          alert('Erro ao carregar os dados do usuário.');
        },
      });
    } catch (error) {
      console.error('Erro ao obter ID do usuário logado:', error);
      alert('Erro ao carregar o usuário. Faça login novamente.');
    }
  }

  /** Salva os dados atualizados do usuário */
  salvarDadosUsuario(): void {
    if (this.usuarioForm.invalid) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const dadosAtualizados = this.usuarioForm.value;

    console.log("Dados enviados ao backend:", dadosAtualizados);

    this.authService.atualizarUsuario(dadosAtualizados).subscribe({
      next: (res) => {
        alert(res.message || "Dados atualizados com sucesso!");
        this.carregarUsuario(); // Atualiza os dados no formulário
      },
      error: (err) => {
        console.error("Erro ao atualizar usuário:", err);
        alert("Erro ao atualizar os dados. Tente novamente.");
      },
    });
  }


  /** Abre o modal para exibir os dados do usuário */
  abrirModalUsuario(): void {
    this.isUsuarioModalVisible = true;
  }

  /** Fecha o modal de exibição do usuário */
  fecharModalUsuario(): void {
    this.isUsuarioModalVisible = false;
  }

  /** Abre o modal de edição do usuário */
  abrirModalEditarUsuario(): void {
    this.usuarioForm.patchValue(this.usuario);
    this.isUsuarioModalVisible = false;
    this.isEditarUsuarioModalVisible = true;
  }

  /** Fecha o modal de edição do usuário */
  fecharModalEditarUsuario(): void {
    this.isEditarUsuarioModalVisible = false;
  }

  /** Carregar prioridades e estados */
  carregarPrioridadesEstados(): void {
    this.taskService.obterMetadados().subscribe({
      next: (res) => {
        this.prioridades = res.prioridades;
        this.estados = res.estados;
      },
      error: () => alert('Erro ao carregar prioridades e estados.'),
    });
  }

  /** Carrega as prioridades diretamente da tabela prioridade */
  carregarPrioridades(): void {
    this.taskService.obterPrioridades().subscribe({
      next: (res) => {
        this.prioridades = res;
        console.log('Prioridades carregadas:', this.prioridades);
      },
      error: (err) => {
        console.error('Erro ao carregar prioridades:', err);
        alert(
          'Erro ao carregar prioridades. Verifique a conexão com o servidor.'
        );
      },
    });
  }

  /** Carregar todas as tarefas do usuário */
  carregarTarefas(): void {
    this.loading = true; // Inicia o carregamento

    this.taskService.obterTarefas().subscribe({
      next: (res: any) => {
        this.loading = false; // Finaliza o carregamento

        console.log(res); // Inspeciona a resposta

        if (res && Array.isArray(res.tarefas)) {
          this.tarefas = res.tarefas.map((tarefa: any) => {
            const tarefaCompleta: Tarefa = {
              id: tarefa.id,
              titulo: tarefa.titulo,
              descricao: tarefa.descricao || 'Sem descrição',
              usuario: tarefa.Usuario?.nome || 'Desconhecido',
              prioridade: tarefa.Prioridade?.nome || 'Sem prioridade',
              estado: tarefa.TarefasEstados?.[0]?.Estado?.nome || 'Não definido',
              dthrinicio: tarefa.dthrinicio ? new Date(tarefa.dthrinicio) : '',
              dthrfim: tarefa.dthrfim ? new Date(tarefa.dthrfim) : '',
              documento: tarefa.Documentos?.[0]
                ? { nome: tarefa.Documentos[0].nome, url: tarefa.Documentos[0].caminho }
                : undefined,
              subTarefas: tarefa.SubTarefas?.map((sub: any) => ({
                id: sub.id,
                titulo: sub.titulo,
                prioridade: sub.Prioridade?.nome || 'Sem prioridade',
                estado: sub.TarefasEstados?.[0]?.Estado?.nome || 'Não definido',
              })) || [],
              progresso: 0, // ✅ Inicialize com 0
            };

            // ✅ Calcula o progresso da tarefa
            tarefaCompleta.progresso = this.calcularProgresso(tarefaCompleta);

            return tarefaCompleta;
          });

          // Atualiza as prioridades e estados
          this.prioridades = res.opcoes.prioridades;
          this.estados = res.opcoes.estados;
        } else {
          console.error("res não é um array ou não contém a propriedade tarefas:", res);
        }
      },
      error: (err) => {
        this.loading = false; // Finaliza o carregamento em caso de erro
        console.error('Erro ao carregar tarefas:', err);
        alert('Erro ao carregar tarefas.');
      },
    });
  }

  /** Salvar uma nova tarefa ou editar uma existente */
  salvarTarefa(): void {
    if (this.tarefaForm.invalid) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    const tarefaData = {
      ...this.tarefaForm.value,
      dthrinicio: new Date(this.tarefaForm.value.dthrinicio).toISOString(),
      dthrfim: this.tarefaForm.value.dthrfim
        ? new Date(this.tarefaForm.value.dthrfim).toISOString()
        : null,
    };

    if (tarefaData.idmae) {
      // Criação de uma subtarefa
      this.taskService.criarSubTarefa(tarefaData.idmae, tarefaData).subscribe({
        next: (res) => {
          alert('Subtarefa criada com sucesso!');
          const tarefaMae = this.tarefas.find((tarefa) => tarefa.id === tarefaData.idmae);
          if (tarefaMae) {
            tarefaMae.subTarefas = tarefaMae.subTarefas || [];
            tarefaMae.subTarefas.push(res.subtarefa); // Atualiza localmente sem duplicar
          }
          this.fecharModal();
          window.location.reload()
        },
        error: (err) => {
          console.error('Erro ao criar subtarefa:', err);
          alert('Erro ao criar subtarefa.');
        },
      });
    } else if (this.tarefaEditando) {
      // Atualização de uma tarefa existente
      this.taskService.atualizarTarefa(this.tarefaEditando.id, tarefaData).subscribe({
        next: () => {
          alert('Tarefa atualizada com sucesso!');
          this.carregarTarefas();
          this.fecharModal();
          window.location.reload()
        },
        error: (err) => {
          console.error('Erro ao atualizar tarefa:', err);
          alert('Erro ao atualizar tarefa.');
        },
      });
    } else {
      // Criação de uma nova tarefa
      this.taskService.criarTarefa(tarefaData).subscribe({
        next: () => {
          alert('Nova tarefa criada com sucesso!');
          this.carregarTarefas();
          this.fecharModal();
          window.location.reload()
        },
        error: (err) => {
          console.error('Erro ao criar nova tarefa:', err);
          alert('Erro ao criar nova tarefa.');
        },
      });
    }
  }

  salvarNovaTarefa(tarefa: any): void {
    if (!tarefa.idusuario || isNaN(Number(tarefa.idusuario))) {
      alert('ID do usuário é obrigatório e deve ser um número válido.');
      return;
    }

    this.taskService.obterTarefas().subscribe({
      next: (res: any) => {
        alert('Tarefa criada com sucesso!');
        this.carregarTarefas(); // Atualiza a lista de tarefas
      },
      error: (err: any) => {
        console.error('Erro ao criar tarefa:', err);
        alert('Erro ao criar tarefa. Verifique os dados.');
      },
    });
  }

  /** Excluir uma tarefa */
  excluirTarefa(id: number): void {
    this.taskService.excluirTarefa(id).subscribe({
      next: () => {
        alert('Tarefa excluída com sucesso.');
        this.carregarTarefas(); // Recarrega os cards após exclusão
      },
      error: (err) => {
        console.error('Erro ao excluir tarefa:', err);
        alert('Erro ao excluir tarefa.');
      },
    });
  }

  concluirTarefa(id: number): void {
    this.taskService.concluirTarefa(id).subscribe({
      next: () => {
        alert('Tarefa concluída com sucesso!');
        const tarefa = this.tarefas.find((t) => t.id === id);
        if (tarefa) {
          tarefa.estado = 'Concluído';
          tarefa.progresso = this.calcularProgresso(tarefa);
        }
        this.carregarTarefas(); // Recarrega para refletir no frontend
      },
      error: (err) => {
        console.error('Erro ao concluir a tarefa:', err);
        alert('Erro ao concluir a tarefa.');
      },
    });
  }

/** Abrir o modal para criar uma subtarefa */
incluirSubTarefa(tarefa: any): void {
  this.isSubTarefa = true; // Define que estamos criando uma subtarefa
  this.tarefaMae = tarefa; // Armazena a tarefa pai


  // Obtém o nome do usuário logado
  const nomeUsuario = this.authService.obterIdUsuarioLogado() || 'Usuário desconhecido';

  // Atualiza o formulário com os valores da tarefa pai e bloqueia os campos necessários
  this.tarefaForm.patchValue({
    idmae: tarefa.id, // ID da tarefa pai
    titulo: '', // Campo editável para o título da subtarefa
    descricao: '', // Campo editável para a descrição da subtarefa
  });

  // Bloqueia os campos que não podem ser editados
  this.tarefaForm.get('idprioridade')?.enable(); // Bloqueia prioridade
  this.tarefaForm.get('idestado')?.disable(); // Bloqueia estado
  this.tarefaForm.get('idusuario')?.enable(); // Exibe nome do usuário, mas bloqueado
  this.tarefaForm.get('dthrinicio')?.enable(); // Bloqueia data de início
  this.tarefaForm.get('dthrfim')?.disable(); // Bloqueia data de início

  this.isModalVisible = true; // Exibe o modal
}


  /** Abrir o modal para criar ou editar uma tarefa */
  editarTarefa(tarefa: any): void {
    this.tarefaEditando = tarefa;

    this.tarefaForm.patchValue({
      ...tarefa,
      dthrinicio: tarefa.dthrinicio
        ? new Date(tarefa.dthrinicio).toISOString().slice(0, 16)
        : null,
      dthrfim: tarefa.dthrfim
        ? new Date(tarefa.dthrfim).toISOString().slice(0, 16) // Formato ISO para `datetime-local`
        : null,
    });

    this.isModalVisible = true;
  }

  /** Editar uma subtarefa */
  editarSubTarefa(subTarefa: any, tarefaMae: any): void {
    this.tarefaEditando = subTarefa;

    // Preenche o formulário com os dados da subtarefa
    this.tarefaForm.patchValue({
      id: subTarefa.idmae,
      idusuario: this.usuario.id, // ID do usuário logado
      idprioridade: subTarefa.idprioridade,
      titulo: subTarefa.titulo,
      descricao: subTarefa.descricao,
      idestado: subTarefa.idestado,
      idmae: tarefaMae.id, // Referência à tarefa principal
    });

    this.isModalVisible = true; // Exibe o modal de edição
  }
  /** Fecha o modal de criação/edição de tarefa */
  fecharModal(): void {
    this.isModalVisible = false;
    this.tarefaEditando = null;
    this.isSubTarefa = false;
    this.tarefaMae = null;
    this.tarefaForm.reset();
  }
  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.tarefaForm.patchValue({
        documento: {
          nome: file.name,
          url: URL.createObjectURL(file),
        },
      });
    }
  }

  // Navigate to "My Tasks"
  CliqueMinhaTarefa(pageName: string): void {
    this.router.navigate([pageName]);
  }

  // Logout and navigate to login
  CliqueHome(pageName: string): void {
    this.authService.removerToken();
    alert('Você saiu do sistema!');
    this.router.navigate([pageName]);
  }

  // Calculate task progress
  calcularProgresso(tarefa: Tarefa): number {
    if (!tarefa.subTarefas || tarefa.subTarefas.length === 0) {
      return tarefa.estado === 'Concluído' ? 100 : 0;
    }

    const totalSubTarefas = tarefa.subTarefas.length;
    const concluidas = tarefa.subTarefas.filter((sub) => sub.estado === 'Concluído').length;

    // ✅ Retorna o progresso calculado
    return Math.round((concluidas / totalSubTarefas) * 100);
  }


 marcarSubTarefaConcluida(subTarefa: any, tarefa: any): void {
  // Alterna o estado entre "Concluído" e "Pendente"
  subTarefa.estado = subTarefa.estado === 'Concluído' ? 'Pendente' : 'Concluído';

  // Atualiza o progresso da tarefa principal
  tarefa.progresso = this.calcularProgresso(tarefa);

  // Atualiza o backend para salvar o estado da subtarefa
  this.taskService.atualizarSubTarefa(subTarefa.id, { estado: subTarefa.estado }).subscribe({
    next: () => {
      alert('Subtarefa atualizada com sucesso!');
    },
    error: (err) => {
      console.error('Erro ao atualizar subtarefa:', err);
      alert('Erro ao atualizar subtarefa.');
    },
  });
}


// Atualiza o progresso de uma tarefa no frontend e backend
atualizarProgresso(tarefa: any): void {
  const concluidas = tarefa.subTarefas.filter((sub: any) => sub.estado === 'Concluído').length;
  const progresso = Math.round((concluidas / tarefa.subTarefas.length) * 100) || 0;

  // Atualiza o progresso no frontend
  tarefa.progresso = progresso;

  // Atualiza o progresso no backend
  this.taskService.atualizarProgresso(tarefa.id, progresso).subscribe({
    next: () => alert('Progresso atualizado com sucesso!'),
    error: (err) => {
      console.error('Erro ao atualizar progresso:', err);
      alert('Erro ao atualizar progresso.');
    },
  });
}

}
