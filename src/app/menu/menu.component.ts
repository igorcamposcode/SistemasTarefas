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

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgFor, DatePipe, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  tarefas: any[] = []; // Lista de tarefas
  prioridades: any[] = []; // Lista de prioridades
  tarefaForm!: FormGroup; // Formulário para tarefas
  usuarioForm!: FormGroup; // Formulário para dados do usuário
  isModalVisible: boolean = false; // Controle de visibilidade do modal de tarefas
  isUsuarioModalVisible: boolean = false;
  isEditarUsuarioModalVisible: boolean = false;
  tarefaEditando: any = null; // Armazena a tarefa sendo editada

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router
  ) {}

  usuario = {
    nome: '',
    telefone: '',
    email: '',
  };

  ngOnInit(): void {
    this.inicializarFormularios();
    this.carregarTarefas();
    this.carregarPrioridades();
    this.carregarDadosUsuario();
  }

  // Inicializa os formulários reativos
  inicializarFormularios() {
    this.tarefaForm = this.fb.group({
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      prioridade: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      dataFim: [''],
    });

    this.usuarioForm = this.fb.group({
      nome: ['', [Validators.required]],
      telefone: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Carrega as tarefas do backend
  carregarTarefas() {
    this.taskService.getTarefas().subscribe({
      next: (dados) => (this.tarefas = dados),
      error: (err) => console.error('Erro ao carregar tarefas:', err),
    });
  }

  // Carrega as prioridades do backend
  carregarPrioridades() {
    this.taskService.getPrioridades().subscribe({
      next: (dados) => (this.prioridades = dados),
      error: (err) => console.error('Erro ao carregar prioridades:', err),
    });
  }

  // Busca os dados do usuário logado pelo ID
  carregarDadosUsuario() {
    this.authService.getUsuarioId().subscribe({
      next: (dados) => (this.usuario = dados),
      error: (err) => console.error('Erro ao carregar usuário:', err),
    });
  }



  // Abre o modal de exibição do usuário
  abrirModalUsuario() {
    this.isUsuarioModalVisible = true;
  }

  // Fecha o modal de exibição do usuário
  fecharModalUsuario() {
    this.isUsuarioModalVisible = false;
  }

// Abrir modal de edição
abrirModalEditarUsuario() {
  this.isUsuarioModalVisible = false;
  this.isEditarUsuarioModalVisible = true;
}

// Fechar modal de edição
fecharModalEditarUsuario() {
  this.isEditarUsuarioModalVisible = false;
}

// Salvar alterações
salvarDadosUsuario() {
  if (this.usuarioForm.invalid) {
    alert('Por favor, preencha os campos corretamente.');
    return;
  }
  const dadosAtualizados = this.usuarioForm.value;
  this.authService.atualizarUsuario(dadosAtualizados).subscribe({
    next: () => {
      alert('Dados do usuário atualizados com sucesso!');
      this.fecharModalEditarUsuario();
    },
    error: (err) => console.error('Erro ao atualizar usuário:', err),
  });
}
  // Abre o modal para criar ou editar uma tarefa
  CliqueTarefa() {
    this.isModalVisible = true;
    this.tarefaEditando = null;
    this.tarefaForm.reset();
  }

  // Salva uma nova tarefa ou atualiza uma existente
  salvarTarefa() {
    if (this.tarefaForm.invalid) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const tarefa = this.tarefaForm.getRawValue();

    if (this.tarefaEditando) {
      this.taskService
        .atualizarTarefa(this.tarefaEditando.id, tarefa)
        .subscribe({
          next: () => {
            this.carregarTarefas();
            this.fecharModal();
          },
          error: (err) => console.error('Erro ao atualizar tarefa:', err),
        });
    } else {
      this.taskService.criarTarefa(tarefa).subscribe({
        next: () => {
          this.carregarTarefas();
          this.fecharModal();
        },
        error: (err) => console.error('Erro ao criar tarefa:', err),
      });
    }
  }

  editarTarefa(tarefa: any) {
    this.isModalVisible = false;
    this.tarefaEditando = tarefa;
    this.tarefaForm.patchValue(tarefa);
  }

  excluirTarefa(id: number) {
    this.taskService.excluirTarefa(id).subscribe(() => this.carregarTarefas());
  }
  // Fechar o modal
  fecharModal() {
    this.isModalVisible = false;
    this.tarefaForm.reset();
    this.tarefaEditando = null;
  }

  // Lidar com seleção de arquivo
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const fakeUploadUrl = URL.createObjectURL(file);
      this.tarefaForm.patchValue({
        documento: {
          nome: file.name,
          url: fakeUploadUrl,
        },
      });
    }
  }

  // Navegar para "Minhas Tarefas"
  CliqueMinhaTarefa(pageName: string) {
    this.router.navigate([pageName]);
  }

  // Encerrar sessão e sair
  CliqueHome(pageName: string) {
    this.authService.removerToken();
    alert('Você saiu do sistema!');
    this.router.navigate([pageName]);
  }
}
