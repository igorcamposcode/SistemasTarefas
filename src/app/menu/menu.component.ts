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
  descricao?: string;
  prioridade: string;
  estado: string;
  progresso: number; // ✅ Adicionando a propriedade progresso
  usuario?: string;
  idusuario?: number;
  dthrinicio?: Date | number | string | null;
  dthrfim?: Date | number | string | null;
}

@Component({
  selector: 'app-menu',
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
      idprioridade: [null, Validators.required], // Prioridade selecionada
      titulo: ['', Validators.required], // Título da tarefa
      descricao: [''], // Descrição opcional
      idestado: [null, Validators.required], // Estado da tarefa (obrigatório)
      idmae: [null], // Subtarefa (opcional)
      dthrinicio: [
        getHorarioBrasilia().toISOString().slice(0, 16), // Data de início ajustada para Brasília
      ],
      dthrfim: [null], // Data de fim (opcional)
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
      alert('Preencha todos os campos obrigatórios corretamente.');
      return;
    }

    const dadosAtualizados = this.usuarioForm.value;

    console.log('Payload enviado ao backend:', dadosAtualizados);

    this.authService.atualizarUsuario(dadosAtualizados).subscribe({
      next: (res) => {
        alert(res?.message || 'Dados atualizados com sucesso!');
        this.carregarUsuario();
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
          const tarefasPrincipais = res.tarefas.filter((t: any) => !t.idmae);

          this.tarefas = tarefasPrincipais.map((tarefa: any) => {
            const subTarefasAssociadas = res.tarefas
              .filter((sub: any) => sub.idmae === tarefa.id)
              .map((sub: any) => ({
                id: sub.id,
                titulo: sub.titulo,
                descricao: sub.descricao,
                prioridade: sub.Prioridade?.nome || 'Sem prioridade',
                estado:
                  sub.EstadoAtual?.nome ||
                  sub.TarefasEstados?.slice(-1)?.[0]?.Estado?.nome ||
                  'Não definido',
                dthrinicio: sub.dthrinicio ? new Date(sub.dthrinicio) : null,
                dthrfim: sub.dthrfim ? new Date(sub.dthrfim) : null,
                usuario: sub.Usuario?.nome || 'Desconhecido',
                idusuario: sub.idusuario,
              }));

            const tarefaCompleta: Tarefa = {
              id: tarefa.id,
              titulo: tarefa.titulo,
              descricao: tarefa.descricao || 'Sem descrição',
              usuario: tarefa.Usuario?.nome || 'Desconhecido',
              prioridade: tarefa.Prioridade?.nome || 'Sem prioridade',
              estado:
                tarefa.EstadoAtual?.nome ||
                tarefa.TarefasEstados?.slice(-1)?.[0]?.Estado?.nome ||
                'Não definido',
              dthrinicio: tarefa.dthrinicio ? new Date(tarefa.dthrinicio) : '',
              dthrfim: tarefa.dthrfim ? new Date(tarefa.dthrfim) : '',
              documento: tarefa.Documentos?.[0]
                ? {
                    nome: tarefa.Documentos[0].nome,
                    url: tarefa.Documentos[0].caminho,
                  }
                : undefined,
              subTarefas: subTarefasAssociadas, // Usa a lista de subtarefas corrigida
              progresso: tarefa.progresso || 0,
            };

            // Calcula o progresso baseado no estado das subtarefas
            tarefaCompleta.progresso = this.calcularProgresso(tarefaCompleta);

            return tarefaCompleta;
          });

          // Atualiza as prioridades e estados
          this.prioridades = res.opcoes.prioridades;
          this.estados = res.opcoes.estados;

          // Carrega o estado salvo do localStorage
          this.carregarLocalStorage();
        } else {
          console.error(
            'res não é um array ou não contém a propriedade tarefas:',
            res
          );
        }
      },
      error: (err) => {
        this.loading = false; // Finaliza o carregamento em caso de erro
        console.error('Erro ao carregar tarefas:', err);
        alert('Erro ao carregar tarefas.');
      },
    });
  }
  atualizarTarefa(): void {
    this.carregarTarefas();
    window.location.reload();
  }
  /** Salvar uma nova tarefa ou editar uma existente */
  salvarTarefa(): void {
    if (this.tarefaForm.invalid) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    const tarefaData = {
      ...this.tarefaForm.value,
      idusuario: this.authService.obterIdUsuarioLogado(),
      dthrinicio: new Date(this.tarefaForm.value.dthrinicio).toISOString(),
      dthrfim: this.tarefaForm.value.dthrfim
        ? new Date(this.tarefaForm.value.dthrfim).toISOString()
        : null,
    };

    Object.keys(tarefaData).forEach((key) => {
      if (tarefaData[key] === undefined || tarefaData[key] === null) {
        delete tarefaData[key];
      }
      if (key === 'titulo' && tarefaData[key] === '') {
        delete tarefaData[key];
      }
    });

    console.log('Dados da tarefa a serem enviados:', tarefaData);

    if (this.tarefaEditando) {
      // MODO DE EDIÇÃO: Atualiza uma tarefa ou subtarefa existente.
      const idParaAtualizar = this.tarefaEditando.id;
      const eSubtarefa = this.isSubTarefa && this.tarefaMae;

      const mensagemSucesso = eSubtarefa
        ? 'Subtarefa atualizada com sucesso!'
        : 'Tarefa atualizada com sucesso!';
      const mensagemErro = eSubtarefa
        ? 'Erro ao atualizar subtarefa'
        : 'Erro ao atualizar tarefa';

      console.log(
        `Atualizando ${eSubtarefa ? 'subtarefa' : 'tarefa'}:`,
        idParaAtualizar,
        tarefaData
      );

      this.taskService.atualizarTarefa(idParaAtualizar, tarefaData).subscribe({
        next: () => {
          alert(mensagemSucesso);
          this.carregarTarefas();
          this.fecharModal();
        },
        error: (err) => {
          console.error(`${mensagemErro}:`, err);
          alert(
            `${mensagemErro}: ` +
              (err.error?.message || err.message || 'Erro desconhecido')
          );
        },
      });
    } else {
      // MODO DE CRIAÇÃO: Cria uma nova tarefa ou subtarefa.
      if (tarefaData.idmae) {
        // Criação de uma subtarefa
        this.taskService
          .criarSubTarefa(tarefaData.idmae, tarefaData)
          .subscribe({
            next: () => {
              alert('Subtarefa criada com sucesso!');
              this.carregarTarefas();
              this.fecharModal();
            },
            error: (err) => {
              console.error('Erro ao criar subtarefa:', err);
              alert(
                'Erro ao criar subtarefa: ' +
                  (err.error?.message || err.message || 'Erro desconhecido')
              );
            },
          });
      } else {
        // Criação de uma nova tarefa principal
        this.taskService.criarTarefa(tarefaData).subscribe({
          next: () => {
            alert('Nova tarefa criada com sucesso!');
            this.carregarTarefas();
            this.fecharModal();
          },
          error: (err) => {
            console.error('Erro ao criar nova tarefa:', err);
            alert('Erro ao criar nova tarefa.');
          },
        });
      }
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
  /** Excluir uma subtarefa */
  excluirSubTarefa(subTarefa: any, tarefa: any): void {
    if (
      confirm(
        `Tem certeza que deseja excluir a subtarefa "${subTarefa.titulo}"?`
      )
    ) {
      this.taskService.excluirSubTarefa(subTarefa.id).subscribe({
        next: () => {
          alert('Subtarefa excluída com sucesso.');
          // Remove a subtarefa da lista local
          tarefa.subTarefas = tarefa.subTarefas.filter(
            (sub: any) => sub.id !== subTarefa.id
          );
          // Atualiza o progresso da tarefa
          this.atualizarProgresso(tarefa);
          // Recarrega as tarefas para sincronizar com o backend
          this.carregarTarefas();
        },
        error: (err) => {
          console.error('Erro ao excluir subtarefa:', err);
          alert(
            'Erro ao excluir subtarefa: ' +
              (err.error?.message || err.message || 'Erro desconhecido')
          );
        },
      });
    }
  }
  salvarLocalStorage(): void {
    const progressoTarefas = {
      tarefas: this.tarefas.map((tarefa) => ({
        id: tarefa.id,
        progresso: tarefa.progresso,
        estado: tarefa.estado,
        subTarefas: tarefa.subTarefas.map((sub: { id: any; estado: any }) => ({
          id: sub.id,
          estado: sub.estado,
        })),
      })),
      timestamp: new Date().getTime(),
    };

    localStorage.setItem('progressoTarefas', JSON.stringify(progressoTarefas));
  }
  carregarLocalStorage(): void {
    const progressoSalvo = localStorage.getItem('progressoTarefas');

    if (progressoSalvo) {
      try {
        const estado = JSON.parse(progressoSalvo);
        const agora = new Date().getTime();
        const umDia = 24 * 60 * 60 * 1000; // 24 horas em milissegundos

        // Verifica se o estado não é muito antigo (mais de 1 dia)
        if (agora - estado.timestamp < umDia) {
          this.aplicarProgressoSalvo(estado.tarefas);
        } else {
          // Remove estado antigo
          localStorage.removeItem('progressoTarefas');
        }
      } catch (error) {
        console.error('Erro ao carregar o progresso do localStorage:', error);
        localStorage.removeItem('progressoTarefas');
      }
    }
  }
  aplicarProgressoSalvo(progressoSalvo: any[]): void {
    progressoSalvo.forEach((progressoTarefa) => {
      const tarefa = this.tarefas.find((t) => t.id === progressoTarefa.id);

      if (tarefa) {
        // Aplica o progresso salvo
        tarefa.progresso = progressoTarefa.progresso || 0;
        tarefa.estado = progressoTarefa.estado || tarefa.estado;

        // Aplica o estado das subtarefas
        progressoTarefa.subTarefas.forEach((progressoSub: any) => {
          const subTarefa = tarefa.subTarefas.find(
            (s: { id: any }) => s.id === progressoSub.id
          );
          if (subTarefa) {
            subTarefa.estado = progressoSub.estado || subTarefa.estado;
          }
        });
      }
    });
  }
  /** Abrir o modal para criar uma subtarefa */
  incluirSubTarefa(tarefa: any): void {
    this.isSubTarefa = true; // Define que estamos criando uma subtarefa
    this.tarefaMae = tarefa; // Armazena a tarefa pai

    // Obtém o nome do usuário logado
    const nomeUsuario =
      this.authService.obterIdUsuarioLogado() || 'Usuário desconhecido';

    // Atualiza o formulário com os valores da tarefa pai e bloqueia os campos necessários
    this.tarefaForm.patchValue({
      idmae: tarefa.id, // ID da tarefa pai
      titulo: '', // Campo editável para o título da subtarefa
      descricao: '', // Campo editável para a descrição da subtarefa
    });

    // Configura os campos para subtarefa
    this.tarefaForm.get('idprioridade')?.enable(); // Prioridade pode ser editada
    this.tarefaForm.get('idestado')?.disable(); // Estado é bloqueado para subtarefas
    this.tarefaForm.get('idusuario')?.disable(); // Usuário é bloqueado
    this.tarefaForm.get('dthrinicio')?.enable(); // Data de início pode ser editada
    this.tarefaForm.get('dthrfim')?.disable(); // Data de fim é bloqueada para subtarefas
    this.isModalVisible = true; // Exibe o modal
  }
  /** Abrir o modal para criar ou editar uma tarefa */
  editarTarefa(tarefa: any): void {
    this.tarefaEditando = tarefa;

    // Mapeia corretamente os campos da tarefa para o formulário
    const idPrioridade = this.obterIdPrioridade(tarefa.prioridade);
    const idEstado = this.obterIdEstado(tarefa.estado);

    console.log('Mapeando tarefa para formulário:', {
      id: tarefa.id,
      idusuario: tarefa.usuario || this.authService.obterIdUsuarioLogado(),
      idprioridade: idPrioridade,
      titulo: tarefa.titulo,
      descricao: tarefa.descricao,
      idestado: idEstado,
      dthrinicio: tarefa.dthrinicio,
      dthrfim: tarefa.dthrfim,
    });

    this.tarefaForm.patchValue({
      id: tarefa.id,
      idusuario: tarefa.usuario || this.authService.obterIdUsuarioLogado(),
      idprioridade: idPrioridade,
      titulo: tarefa.titulo,
      descricao: tarefa.descricao,
      idestado: idEstado,
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
    if (this.isSubTarefaConcluida(subTarefa)) {
      alert('Não é possível editar uma subtarefa que já foi concluída.');
      return;
    }

    this.tarefaEditando = subTarefa;
    this.isSubTarefa = true; // Indica que estamos editando uma subtarefa
    this.tarefaMae = tarefaMae; // Armazena a tarefa pai

    // Obtém os IDs corretos para prioridade e estado
    const idPrioridade = this.obterIdPrioridade(subTarefa.prioridade);
    const idEstado = this.obterIdEstado(subTarefa.estado);

    console.log('Editando subtarefa:', {
      subTarefa,
      idPrioridade,
      idEstado,
      tarefaMae,
    });

    // Preenche o formulário com os dados da subtarefa
    this.tarefaForm.patchValue({
      id: subTarefa.id, // ID da subtarefa para atualização
      idusuario: subTarefa.idusuario,
      idprioridade: idPrioridade,
      titulo: subTarefa.titulo,
      descricao: subTarefa.descricao,
      idestado: idEstado,
      idmae: tarefaMae.id, // Referência à tarefa principal
      dthrinicio: subTarefa.dthrinicio
        ? new Date(subTarefa.dthrinicio).toISOString().slice(0, 16)
        : null,
      dthrfim: subTarefa.dthrfim
        ? new Date(subTarefa.dthrfim).toISOString().slice(0, 16)
        : null,
    });

    // Configura os campos para edição de subtarefa
    this.tarefaForm.get('idprioridade')?.enable();
    this.tarefaForm.get('idestado')?.enable(); // O estado não pode ser editado diretamente
    this.tarefaForm.get('idusuario')?.disable();
    this.tarefaForm.get('dthrinicio')?.enable();
    this.tarefaForm.get('dthrfim')?.enable();
    this.isModalVisible = true; // Exibe o modal de edição
  }
  /** Fecha o modal de criação/edição de tarefa */
  fecharModal(): void {
    this.isModalVisible = false;
    this.tarefaEditando = null;
    this.isSubTarefa = false;
    this.tarefaMae = null;
    // Reseta o formulário e habilita todos os campos
    this.tarefaForm.reset();
    this.tarefaForm.get('idprioridade')?.enable();
    this.tarefaForm.get('idestado')?.enable();
    this.tarefaForm.get('idusuario')?.enable();
    this.tarefaForm.get('dthrinicio')?.enable();
    this.tarefaForm.get('dthrfim')?.enable();
    // Reinicializa o formulário com valores padrão
    this.inicializarFormularios();
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
    const concluidas = tarefa.subTarefas.filter(
      (sub) => sub.estado === 'Concluído'
    ).length;

    // Retorna o progresso calculado
    return Math.round((concluidas / totalSubTarefas) * 100);
  }
  marcarSubTarefaConcluida(subTarefa: any, tarefa: any): void {
    // 1. Bloqueia a ação se a subtarefa já estiver concluída.
    if (subTarefa.estado === 'Concluído') {
      return;
    }

    // 2. Obtém o ID do estado "Concluído" do array de estados
    const estadoConcluido = this.estados.find(
      (e: any) => e.nome === 'Concluído'
    );
    if (!estadoConcluido) {
      alert(
        'Estado "Concluído" não encontrado. Verifique a configuração do sistema.'
      );
      return;
    }
    // 3. Prepara o corpo da requisição com os dados para o backend.
    const dadosParaAtualizar = {
      idestado: estadoConcluido.id, // ID do estado "Concluído"
      dthrfim: new Date().toISOString(), // Define a data/hora de conclusão
    };

    console.log('Marcando subtarefa como concluída:', {
      subtarefaId: subTarefa.id,
      dadosParaAtualizar,
      estadoConcluido,
    });

    // 4. Atualiza a subtarefa no backend
    this.taskService
      .atualizarTarefa(subTarefa.id, dadosParaAtualizar)
      .subscribe({
        next: () => {
          // 5. Em caso de sucesso, atualiza a interface do usuário.
          subTarefa.estado = 'Concluído';

          // 6. Atualiza o progresso da tarefa principal
          this.atualizarProgresso(tarefa);

          // 7. Salva o estado no localStorage
          this.salvarLocalStorage();

          alert('Subtarefa concluída com sucesso!');
        },
        error: (err) => {
          // 8. Em caso de erro, informa o usuário e loga o erro.
          console.error('Erro ao concluir a subtarefa:', err);
          alert(
            'Erro ao concluir a subtarefa: ' +
              (err.error?.message || err.message || 'Erro desconhecido')
          );
        },
      });
  }
  // Atualiza o progresso de uma tarefa no frontend e backend
  atualizarProgresso(tarefa: any): void {
    // 1. Calcula o novo progresso
    const concluidas = tarefa.subTarefas.filter(
      (sub: any) => sub.estado === 'Concluído'
    ).length;
    const progresso =
      tarefa.subTarefas.length > 0
        ? Math.round((concluidas / tarefa.subTarefas.length) * 100)
        : 0;

    // 2. Atualiza o progresso no objeto da tarefa no frontend.
    tarefa.progresso = progresso;

    // 3. Prepara o corpo da requisição com o progresso e estado
    const dadosParaAtualizar: any = {
      progresso: progresso,
    };

    // Se todas as subtarefas estiverem concluídas, marca a tarefa principal como concluída
    if (progresso === 100) {
      const estadoConcluido = this.estados.find(
        (e: any) => e.nome === 'Concluído'
      );
      if (estadoConcluido) {
        dadosParaAtualizar.idestado = estadoConcluido.id;
      }
    }
    console.log('Atualizando progresso da tarefa:', {
      tarefaId: tarefa.id,
      progresso,
      dadosParaAtualizar,
    });
    // 4. Atualiza a tarefa no backend
    this.taskService.atualizarTarefa(tarefa.id, dadosParaAtualizar).subscribe({
      next: () => {
        console.log(
          `Progresso da tarefa ${tarefa.id} atualizado para ${progresso}%`
        );

        // 5. Se a tarefa foi concluída, atualiza a interface
        if (progresso === 100) {
          tarefa.estado = 'Concluído';
          tarefa.dthrfim = new Date();
        }
      },
      error: (err) => {
        console.error('Erro ao atualizar progresso no backend:', err);
        alert(
          'Erro ao atualizar progresso: ' +
            (err.error?.message || err.message || 'Erro desconhecido')
        );
      },
    });
  }
  /**
   * Verifica se uma subtarefa está concluída.
   */
  isSubTarefaConcluida(sub: any): boolean {
    return sub.estado === 'Concluído';
  }

  isSubTarefaDesabilitada(sub: any): boolean {
    return sub.estado === 'Concluído';
  }
  getSubTarefaClasses(sub: any): { [key: string]: boolean } {
    return {
      'subtarefa-concluida': this.isSubTarefaConcluida(sub),
      'subtarefa-desabilitada': this.isSubTarefaDesabilitada(sub),
    };
  }
  /** Obtém o ID da prioridade pelo nome */
  private obterIdPrioridade(nomePrioridade: string): number | null {
    const prioridade = this.prioridades.find((p) => p.nome === nomePrioridade);
    return prioridade ? prioridade.id : null;
  }
  /** Obtém o ID do estado pelo nome */
  private obterIdEstado(nomeEstado: string): number | null {
    const estado = this.estados.find((e) => e.nome === nomeEstado);
    return estado ? estado.id : null;
  }
}
