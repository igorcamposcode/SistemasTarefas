import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';
import { AuthService, Usuario } from '../services/auth.service';

interface Subtarefa {
  id: number;
  titulo: string;
  dthrinicio: string;
  dthrfim: string | null;
  EstadoAtual?: {
    nome: string;
  };
  Prioridade?: {
    nome: string;
  };
}

interface Tarefa {
  id: number;
  titulo: string;
  descricao: string | null;
  dthrinicio: string;
  dthrfim: string | null;
  idmae: number | null;
  UsuarioResponsavel: string;
  EstadoAtual?: {
    nome: string;
  };
  Prioridade?: {
    nome: string;
  };
  SubTarefas: Subtarefa[];
}

@Component({
  selector: 'app-minhas-tarefas',
  standalone: true,
  imports: [
    NzTableModule,
    NzIconModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    NzDropdownMenuComponent,
    NzTagModule,
    NzButtonModule,
    NzCollapseModule,
    CommonModule,
  ],
  templateUrl: './minhas-tarefas.component.html',
  styleUrl: './minhas-tarefas.component.css',
})
export class MinhasTarefasComponent implements OnInit {
  searchValue = '';
  visible = false;
  listOfData: Tarefa[] = [];
  listOfDisplayData: Tarefa[] = [];
  loading = false;
  usuario: Usuario[] = [];
  isUsuarioModalVisible = false;
  isEditarUsuarioModalVisible = false;

  usuarioForm!: FormGroup; // Formulário para edição de dados do usuário

  private router = inject(Router);
  private taskService = inject(TaskService);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.carregarTarefas();
    this.carregarUsuario();
    this.inicializarFormularios();
  }

  /** Inicializa os formulários reativos */
  public inicializarFormularios(): void {
    this.usuarioForm = this.fb.group({
      nome: [this.usuario.length > 0 && this.usuario[0].nome ? this.usuario[0].nome : '', Validators.required],
      telefone: [
        this.usuario.length > 0 && this.usuario[0].telefone ? this.usuario[0].telefone : '',
        [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)],
      ],
      email: [
        this.usuario.length > 0 && this.usuario[0].email ? this.usuario[0].email : '',
        [Validators.required, Validators.email],
      ],
    });
  }

  /** Carrega os dados do usuário logado */
  private carregarUsuario(): void {
    try {
      const idUsuario = this.authService.obterIdUsuarioLogado();
      if (!idUsuario) {
        throw new Error('ID do usuário não encontrado.');
      }
      this.authService.obterUsuarioPorId(idUsuario).subscribe({
        next: (res) => {
          this.usuario = [res]; // Garante que usuario é um array de Usuario
          this.usuarioForm.patchValue(res); // Preenche o formulário com o objeto Usuario
        },
        error: (err) => {
          console.error('Erro ao carregar usuário:', err);
          alert('Erro ao carregar os dados do usuário.');
        },
      });
    } catch (error) {
      console.error('Erro ao obter ID do usuário logado:', error);
      alert('Erro ao carregar o usuário. Faça login novamente.');
      this.router.navigate(['/login']);
    }
  }

  /** Salva os dados atualizados do usuário */
  public salvarDadosUsuario(): void {
    if (this.usuarioForm.invalid) {
      alert('Preencha todos os campos obrigatórios corretamente.');
      return;
    }

    const dadosAtualizados = this.usuarioForm.value;

    this.authService.atualizarUsuario(dadosAtualizados).subscribe({
      next: (res) => {
        alert(res?.message || 'Dados atualizados com sucesso!');
        this.carregarUsuario();
        this.fecharModalEditarUsuario();
      },
      error: (err) => {
        console.error('Erro ao atualizar usuário:', err);
        alert(`Erro no servidor (${err.status}). Tente novamente mais tarde.`);
      },
    });
  }

  /** Abre o modal para exibir os dados do usuário */
 public abrirModalUsuario(): void {
    this.isUsuarioModalVisible = true;
  }
  /** Fecha o modal de exibição do usuário */
 public fecharModalUsuario(): void {
    this.isUsuarioModalVisible = false;
  }
  /** Abre o modal de edição do usuário */
 public abrirModalEditarUsuario(): void {
    this.usuarioForm.patchValue(this.usuario);
    this.isUsuarioModalVisible = false;
    this.isEditarUsuarioModalVisible = true;
  }
  /** Fecha o modal de edição do usuário */
 public fecharModalEditarUsuario(): void {
    this.isEditarUsuarioModalVisible = false;
  }

 private carregarTarefas(): void {
    this.loading = true;
    this.taskService.obterTarefas().subscribe({
      next: (response: any) => {
        if (response && response.tarefas) {
          this.listOfData = response.tarefas;
          this.listOfDisplayData = [...this.listOfData];
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar tarefas:', error);
        this.loading = false;
      },
    });
  }

 public Clique_Retornar(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

 public CliqueHome(pageName: string): void {
    this.authService.removerToken();
    alert('Você saiu do sistema!');
    this.router.navigate([pageName]);
  }

  public reset(): void {
    this.searchValue = '';
    this.search();
  }

 public search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter(
      (item: Tarefa) =>
        item.titulo.toLowerCase().indexOf(this.searchValue.toLowerCase()) !==
          -1 ||
        item.UsuarioResponsavel.toLowerCase().indexOf(
          this.searchValue.toLowerCase()
        ) !== -1
    );
  }

  public formatarData(data: string | null): string {
    if (!data) return 'Não definida';
    return new Date(data).toLocaleString('pt-BR');
  }

  public obtobterTarefaMae(idmae: number | null): string {
    if (!idmae) return 'Tarefa Principal';
    const tarefaMae = this.listOfData.find((t) => t.id === idmae);
    return tarefaMae ? `Sub Tarefa de: ${tarefaMae.titulo}` : `ID: ${idmae}`;
  }

 public obterCorEstado(estado: string): string {
    switch (estado?.toLowerCase()) {
      case 'concluída':
      case 'finalizada':
        return 'success';
      case 'em andamento':
      case 'em progresso':
        return 'processing';
      case 'pendente':
        return 'warning';
      case 'cancelada':
        return 'error';
      default:
        return 'default';
    }
  }
}
