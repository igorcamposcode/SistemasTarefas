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
import { Tarefa, Prioridade, Usuario } from '../menu/menu.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgFor, DatePipe, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  usuario: any = {}; // Armazena os dados do usuário
  tarefas: any[] = []; // Lista de tarefas do usuário
  prioridades: string[] = []; // Prioridades disponíveis (ex.: Muito alta, Alta)
  estados: string[] = []; // Estados disponíveis (ex.: Aberto, Concluído)

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
  ) { }

  ngOnInit(): void {
    this.carregarUsuario(); // Obter dados do usuário logado
    this.carregarTarefas(); // Obter lista de tarefas do usuário
    this.carregarPrioridadesEEstados(); // Obter prioridades e estados disponíveis
    this.inicializarFormularios(); // Configurar formulários reativos
  }

  /** Inicializa os formulários reativos */
inicializarFormularios(): void {
  // Verifica se `usuario` está carregado antes de inicializar
  if (!this.usuario) {
    console.warn('Usuário não carregado. Aguardando carregamento para inicializar formulários.');
    return;
  }

  // Formulário para dados do usuário
  this.usuarioForm = this.fb.group({
    nome: [this.usuario.nome || '', Validators.required],
    telefone: [this.usuario.telefone || '', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
    email: [this.usuario.email || '', [Validators.required, Validators.email]],
  });

  // Formulário para criação/edição de tarefas
  this.tarefaForm = this.fb.group({
    titulo: ['', Validators.required],
    descricao: [''],
    prioridade: ['', Validators.required],
    usuario: [this.usuario.nome || '', Validators.required],
    dataInicio: [new Date().toISOString().substring(0, 16), Validators.required],
    dataFim: [''],
  });
}

  /** Carrega dados do usuário logado */
  carregarUsuario(): void {
    try {
      const idUsuario = this.authService.obterIdUsuarioLogado(); // Obtém o ID do usuário logado
      this.authService.obterUsuarioPorId(idUsuario).subscribe({
        next: (res: any) => {
          this.usuario = res; // Armazena os dados do usuário
          console.log('Dados do usuário carregados:', this.usuario);
        },
        error: (err) => {
          console.error('Erro ao carregar dados do usuário:', err);
          alert('Erro ao carregar dados do usuário.');
        },
      });
    } catch (err: any) {
      console.error(err.message);
      alert(err.message);
    }
  }

  /** Carrega a lista de tarefas do usuário */
  carregarTarefas(): void {
    this.taskService.obterTarefas().subscribe({
      next: (res) => (this.tarefas = res),
      error: () => alert('Erro ao carregar tarefas.'),
    });
  }

  /** Carrega as prioridades e estados disponíveis */
  carregarPrioridadesEEstados(): void {
    this.taskService.obterPrioridades().subscribe({
      next: (res) => (this.prioridades = res),
      error: () => alert('Erro ao carregar prioridades.'),
    });

    this.taskService.obterEstados().subscribe({
      next: (res) => (this.estados = res),
      error: () => alert('Erro ao carregar estados.'),
    });
  }

  /** Salva os dados do usuário após edição */
  salvarDadosUsuario(): void {
    if (this.usuarioForm.invalid) {
      alert('Preencha todos os campos corretamente antes de salvar.');
      return;
    }

    const dadosAtualizados = this.usuarioForm.value;

    this.authService.atualizarUsuario(this.usuario.id, dadosAtualizados).subscribe({
      next: () => {
        alert('Seus dados foram atualizados com sucesso!');
        this.carregarUsuario(); // Atualiza os dados do usuário no frontend
        this.fecharModalEditarUsuario(); // Fecha o modal de edição
      },
      error: (err) => {
        console.error('Erro ao atualizar os dados do usuário:', err);
        const mensagemErro = err.status === 400
          ? 'Erro na validação dos dados. Verifique os campos e tente novamente.'
          : 'Ocorreu um erro inesperado ao atualizar os dados. Tente novamente mais tarde.';
        alert(mensagemErro);
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

  /** Salva uma nova tarefa ou atualiza uma existente */
  salvarTarefa(): void {
    if (this.tarefaForm.invalid) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    const tarefa = this.tarefaForm.getRawValue();

    if (this.tarefaEditando) {
      this.taskService.atualizarTarefa(this.tarefaEditando.id, tarefa).subscribe({
        next: () => {
          alert('Tarefa atualizada com sucesso!');
          this.carregarTarefas();
          this.fecharModal();
        },
        error: () => alert('Erro ao atualizar tarefa.'),
      });
    } else {
      this.taskService.criarTarefa(tarefa).subscribe({
        next: () => {
          alert('Tarefa criada com sucesso!');
          this.carregarTarefas();
          this.fecharModal();
        },
        error: () => alert('Erro ao criar tarefa.'),
      });
    }
  }

  /** Abre o modal para criar ou editar tarefa */
  editarTarefa(tarefa: any): void {
    this.tarefaForm.patchValue(tarefa);
    this.tarefaEditando = tarefa;
    this.isModalVisible = true;
  }

  /** Exclui uma tarefa */
  excluirTarefa(id: number): void {
    this.taskService.excluirTarefa(id).subscribe({
      next: () => {
        alert('Tarefa excluída com sucesso!');
        this.carregarTarefas();
      },
      error: () => alert('Erro ao excluir tarefa.'),
    });
  }

  /** Abre o modal para criar uma subtarefa vinculada */
  incluirSubTarefa(tarefaPai: any): void {
    this.tarefaForm.reset();
    this.tarefaForm.patchValue({ usuario: this.usuario.nome, idmae: tarefaPai.id });
    this.tarefaEditando = null;
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
    const total = new Date(tarefa.dthrfim).getTime() - new Date(tarefa.dthrinicio).getTime();
    const elapsed = new Date().getTime() - new Date(tarefa.dthrinicio).getTime();
    return Math.min((elapsed / total) * 100, 100);
  }

}
