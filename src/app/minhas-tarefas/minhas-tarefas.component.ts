import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { AuthService } from '../services/auth.service';

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
    styleUrl: './minhas-tarefas.component.css'
})
export class MinhasTarefasComponent implements OnInit {
  searchValue = '';
  visible = false;
  listOfData: Tarefa[] = [];
  listOfDisplayData: Tarefa[] = [];
  loading = false;
  usuario: any = {};
  isUsuarioModalVisible = false;
  isEditarUsuarioModalVisible = false;

  usuarioForm!: FormGroup; // Formulário para edição de dados do usuário

  constructor(
    private router: Router,
    private taskService: TaskService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.carregarTarefas();
    this.carregarUsuario();
    this.inicializarFormularios();
  }

  /** Inicializa os formulários reativos */
  inicializarFormularios(): void {
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
  }

  /** Carrega os dados do usuário logado */
  carregarUsuario(): void {
    try {
      const idUsuario = this.authService.obterIdUsuarioLogado();
      if (!idUsuario) {
        throw new Error('ID do usuário não encontrado.');
      }
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
      this.router.navigate(['/login']);
    }
  }

  /** Salva os dados atualizados do usuário */
  salvarDadosUsuario(): void {
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

  carregarTarefas(): void {
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
      }
    });
  }

  Clique_Retornar(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  CliqueHome(pageName: string): void {
    this.authService.removerToken();
    alert('Você saiu do sistema!');
    this.router.navigate([pageName]);
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter(
      (item: Tarefa) =>
        item.titulo.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1 ||
        item.UsuarioResponsavel.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1
    );
  }

  formatarData(data: string | null): string {
    if (!data) return 'Não definida';
    return new Date(data).toLocaleString('pt-BR');
  }

  obterTarefaMae(idmae: number | null): string {
    if (!idmae) return 'Tarefa Principal';
    const tarefaMae = this.listOfData.find(t => t.id === idmae);
    return tarefaMae ? `Sub Tarefa de: ${tarefaMae.titulo}` : `ID: ${idmae}`;
  }

  obterCorEstado(estado: string): string {
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
