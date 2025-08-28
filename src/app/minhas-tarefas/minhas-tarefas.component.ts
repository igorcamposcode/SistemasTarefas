import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

  constructor(
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.carregarTarefas();
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
