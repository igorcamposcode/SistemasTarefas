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
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { TaskService } from '../services/task.service';

interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  usuario: string;
  prioridade: string;
  estado: string;
  dthrfim: Date | number | string;
  dthrinicio: Date | number | string;
  documento?: { nome: string; url: string };
  subTarefas: SubTarefa[];
}

interface SubTarefa {
  id: number;
  titulo: string;
  prioridade: string;
  estado: string;
  dthrinicio: Date;
  dthrfim?: Date;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgFor, DatePipe, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  usuario: any = {}; // Dados do usuário logado
  tarefas: any[] = []; // Lista de tarefas do usuário
  prioridades: any[] = []; // Prioridades disponíveis (ex.: Muito alta, Alta)
  estados: any[] = []; // Estados disponíveis (ex.: Aberto, Concluído)

  usuarioForm!: FormGroup; // Formulário para edição de dados do usuário
  tarefaForm!: FormGroup; // Formulário para criação/edição de tarefas

  isUsuarioModalVisible = false; // Controle de visibilidade do modal de usuário
  isEditarUsuarioModalVisible = false; // Controle de visibilidade do modal de edição de usuário
  isModalVisible = false; // Controle de visibilidade do modal de tarefa

  tarefaEditando: any = null; // Tarefa sendo editada (null para criação de nova)

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router
  ) {}

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
      const horarioBrasilia = new Date(dataAtual.setHours(dataAtual.getHours() + fusoHorarioBrasilia - diferencaUTC));
      return horarioBrasilia;
    }

    this.tarefaForm = this.fb.group({
      id: [null], // ID da tarefa para atualizações
      idusuario: [this.authService.obterIdUsuarioLogado(), Validators.required], // ID do usuário logado
      idprioridade: ['', Validators.required], // Prioridade selecionada
      titulo: ['', Validators.required], // Título da tarefa
      descricao: [''], // Descrição opcional
      idestado: ['', Validators.required], // Estado da tarefa
      idmae: [''], // Subtarefa (opcional)
      dthrinicio: [
        getHorarioBrasilia().toISOString().slice(0, 16), // Data de início ajustada para Brasília
        Validators.required,
      ],
      dthrfim: [
        getHorarioBrasilia().toISOString().slice(0, 16),null, // Inicialmente `null`, atualizado quando o usuário preenche
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
      alert('Preencha todos os campos corretamente.');
      return;
    }

    const dadosAtualizados = this.usuarioForm.value;

    this.authService.atualizarUsuario(dadosAtualizados).subscribe({
      next: (res) => {
        alert(res.message || 'Dados atualizados com sucesso!');
        this.carregarUsuario(); // Atualiza os dados no formulário
      },
      error: (err) => {
        console.error('Erro ao atualizar usuário:', err);
        alert('Erro ao atualizar os dados. Tente novamente.');
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
    this.taskService.obterTarefas().subscribe({
      next: (res: any[]) => {
        this.tarefas = res.map((tarefa) => {
          // Estrutura do objeto tarefa
          const tarefaCompleta = {
            id: tarefa.id,
            titulo: tarefa.titulo,
            descricao: tarefa.descricao || 'Sem descrição',
            usuario: tarefa.Usuario?.nome || 'Desconhecido',
            prioridade: tarefa.Prioridade?.nome || 'Sem prioridade',
            estado: tarefa.TarefasEstados?.[0]?.Estado?.nome || 'Não definido',
            dthrinicio: tarefa.dthrinicio ? new Date(tarefa.dthrinicio) : null,
            dthrfim: tarefa.dthrfim ? new Date(tarefa.dthrfim) : null,
            documento: tarefa.Documentos?.[0]
              ? {
                  nome: tarefa.Documentos[0].nome,
                  url: tarefa.Documentos[0].caminho,
                }
              : undefined,
            subTarefas:
              tarefa.SubTarefas?.map((sub: any) => ({
                id: sub.id,
                titulo: sub.titulo,
                prioridade: sub.Prioridade?.nome || 'Sem prioridade',
                estado: sub.TarefasEstados?.[0]?.Estado?.nome || 'Não definido',
                dthrinicio: sub.dthrinicio,
                dthrfim: sub.dthrfim,
              })) || [],
          };

          // Atualizar progresso (assumindo que a lógica está em `atualizarProgresso`)
          this.atualizarProgresso(tarefaCompleta);

          return tarefaCompleta;
        });

        console.log('Tarefas carregadas:', this.tarefas);
      },
      error: (err) => {
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
        : null, // Envia como `null` se não preenchido
    };

    if (this.tarefaEditando) {
      // Atualizar tarefa existente
      this.taskService.atualizarTarefa(this.tarefaEditando.id, tarefaData).subscribe({
        next: () => {
          alert('Tarefa atualizada com sucesso!');
          this.carregarTarefas();
          this.fecharModal();
        },
        error: (err) => {
          console.error('Erro ao atualizar tarefa:', err);
          alert('Erro ao atualizar tarefa.');
        },
      });
    } else {
      // Criar nova tarefa
      this.taskService.criarTarefa(tarefaData).subscribe({
        next: () => {
          alert('Nova tarefa criada com sucesso!');
          this.carregarTarefas();
          this.fecharModal();
        },
        error: (err) => {
          console.error('Erro ao criar tarefa:', err);
          alert('Erro ao criar nova tarefa.');
        },
      });
    }
    window.location.reload()
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

  concluirTarefa(idTarefa: number): void {
    this.taskService.concluirTarefa(idTarefa).subscribe({
      next: () => {
        alert('Tarefa concluída com sucesso!');
        this.carregarTarefas(); // Recarrega as tarefas atualizadas
      },
      error: (err) => {
        console.error('Erro ao concluir a tarefa:', err);
        alert('Erro ao concluir a tarefa.');
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

  /** Abrir o modal para criar uma subtarefa */
  incluirSubTarefa(tarefa: any): void {
    this.tarefaForm.reset();
    this.tarefaForm.patchValue({
      idUsuario: this.usuario.id,
      idmae: tarefa.id,
    });
    this.isModalVisible = true;
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


  /** Fecha o modal de criação/edição de tarefa */
  fecharModal(): void {
    this.isModalVisible = false;
    this.tarefaEditando = null;
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
    const total =
      new Date(tarefa.dthrfim).getTime() -
      new Date(tarefa.dthrinicio).getTime();
    const elapsed =
      new Date().getTime() - new Date(tarefa.dthrinicio).getTime();
    return Math.min((elapsed / total) * 0, 100);
  }

  // Atualiza o progresso de uma tarefa
  atualizarProgresso(tarefa: any): void {
    this.taskService.getProgresso(tarefa.id).subscribe({
      next: (res) => {
        tarefa.progresso = res.progresso; // Adiciona o progresso à tarefa
      },
      error: (err) => {
        console.error(
          `Erro ao carregar progresso da tarefa ${tarefa.id}:`,
          err
        );
        tarefa.progresso = 0; // Define progresso zero em caso de erro
      },
    });
  }
}
