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


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgFor,DatePipe,NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  tarefas: any[] = []; // Lista de tarefas
  tarefaForm: FormGroup; // Formulário reativo para tarefas
  tarefaEditando: any = null; // Tarefa que está sendo editada
  isModalVisible: boolean = true; // Controle de visibilidade do modal
  prioridades: string[] = ['Muito Alta', 'Alta', 'Média', 'Baixa', 'Muito Baixa']; // Opções de prioridade

  constructor(private fb: FormBuilder,private authService: AuthService, private router: Router) {
    // Inicialização do formulário de tarefas
    this.tarefaForm = this.fb.group({
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      prioridade: ['Média', [Validators.required]],
      usuario: ['', [Validators.required]],
      dataInicio: [{ value: '', disabled: true }], // Desativado para preenchimento automático
      dataFim: [''],
      documento: [null], // Campo para anexar documento
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Abre o modal para criar uma nova tarefa
  CliqueTarefa() {
    this.isModalVisible = true;
    this.tarefaEditando = null; // Reseta o estado de edição
    this.tarefaForm.reset({
      prioridade: 'Média', // Define valor padrão
    });
  }

  // Abre o modal para editar uma tarefa
  editarTarefa(tarefa: any) {
    this.isModalVisible = false;
    this.tarefaEditando = tarefa;
    this.tarefaForm.patchValue(tarefa); // Preenche o formulário com os dados da tarefa
  }

  // Salva ou edita a tarefa
  salvarTarefa() {
    if (this.tarefaForm.invalid) {
      // Verifica se o formulário é válido
      return;
    }

    const tarefa = this.tarefaForm.getRawValue(); // Pega os valores do formulário

    if (!this.tarefaEditando) {
      // Nova tarefa
      tarefa.id = Date.now(); // Gera um ID único
      tarefa.dataInicio = new Date(); // Define a data de início como o momento atual
      tarefa.subTarefas = []; // Inicializa sub-tarefas
      tarefa.estado = 'Em Progresso'; // Define o estado inicial
      this.tarefas.push(tarefa); // Adiciona à lista de tarefas
    } else {
      // Edição de tarefa existente
      const index = this.tarefas.findIndex((t) => t.id === this.tarefaEditando.id);
      this.tarefas[index] = { ...this.tarefaEditando, ...tarefa }; // Atualiza os dados da tarefa
    }

    this.fecharModal(); // Fecha o modal após salvar
  }

  // Exclui uma tarefa
  excluirTarefa(id: number) {
    this.tarefas = this.tarefas.filter((t) => t.id !== id); // Remove a tarefa com o ID correspondente
  }

  // Fecha o modal e reseta o formulário
  fecharModal() {
    this.isModalVisible = false;
    this.tarefaForm.reset({
      prioridade: 'Média', // Define o valor padrão para prioridade
    });
    this.tarefaEditando = true; // Reseta o estado de edição
  }

  // Adiciona uma sub-tarefa
  incluirSubTarefa(tarefa: any) {
    const novaSubTarefa = {
      id: Date.now(),
      titulo: 'Nova Sub-Tarefa',
      concluido: false,
      dataInicio: new Date(),
      dataFim: null,
    };
    tarefa.subTarefas.push(novaSubTarefa); // Adiciona à lista de sub-tarefas
  }

  // Calcula o progresso da tarefa com base nas sub-tarefas
  calcularProgresso(tarefa: any) {
    if (!tarefa.subTarefas || tarefa.subTarefas.length === 0) {
      return 0; // Sem sub-tarefas, progresso é 0%
    }

    const concluido = tarefa.subTarefas.filter((st: any) => st.concluido).length;
    return Math.round((concluido / tarefa.subTarefas.length) * 100); // Calcula o percentual
  }

  // Lida com a seleção de arquivos para upload
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const fakeUploadUrl = URL.createObjectURL(file); // Simula o upload com uma URL local
      this.tarefaForm.patchValue({
        documento: {
          nome: file.name,
          url: fakeUploadUrl,
        },
      });
    }
  }

  // Redireciona para "Minhas Tarefas"
  CliqueMinhaTarefa(route: string) {
    console.log('Redirecionando para:', route);
    // Aqui você pode implementar lógica para redirecionar
  }

  // Retorna ao login/Finaliza a sessão
  CliqueHome(pageName: string) {
    this.authService.removerToken(); // Remove o token
    alert('Você saiu do sistema!');
    this.router.navigate([`${pageName}`]);
  }
}
