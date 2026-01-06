import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService, Usuario } from '../services/auth.service';
import { DatePipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { Estado, Prioridade, TaskService } from '../services/task.service';
import { NotificationService } from '../services/notification.service';
import { Observable } from 'rxjs';

export interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  usuario: string;
  prioridade: string;
  estado: string;
  dthrfim: Date | number | string | null;
  dthrinicio: Date | number | string | null;
  documentos?: Documento[];
  subTarefas: SubTarefa[];
  progresso: number;
}

export interface Documento {
  id: number;
  idtarefa: number;
  idusuario: number;
  nome: string;
  caminho: string;
  extensao: string;
  tamanho: string;
}
export interface SubTarefa {
  id: number;
  titulo: string;
  descricao?: string;
  prioridade: string;
  estado: string;
  progresso: number;
  usuario?: string;
  idusuario?: number;
  dthrinicio?: Date | number | string | null;
  dthrfim?: Date | number | string | null;
}

// Interfaces para tipagem da resposta da API
interface TarefaResponse {
  id: number;
  titulo: string;
  descricao?: string;
  idmae?: number;
  idusuario?: number;
  dthrinicio?: string;
  dthrfim?: string;
  progresso?: number;
  Prioridade?: { nome: string };
  EstadoAtual?: { nome: string };
  TarefasEstados?: { Estado?: { nome: string } }[];
  Usuario?: { nome: string };
  Documentos?: Documento[];
}

interface TarefasApiResponse {
  tarefas: TarefaResponse[];
  opcoes: {
    prioridades: Prioridade[];
    estados: Estado[];
  };
}

interface ProgressoTarefaSalvo {
  id: number;
  progresso: number;
  estado: string;
  subTarefas: { id: number; estado: string }[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgForOf,
    DatePipe,
    NgIf,
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  usuario: Usuario[] = []; // Dados do usuário logado
  tarefas: Tarefa[] = []; // Lista de tarefas do usuário
  prioridades: Prioridade[] = []; // Prioridades disponíveis (ex.: Muito alta, Alta)
  estados: Estado[] = []; // Estados disponíveis (ex.: Aberto, Concluído)
  loading = false;
  usuarioForm!: FormGroup; // Formulário para edição de dados do usuário
  tarefaForm!: FormGroup; // Formulário para criação/edição de tarefas
  isUsuarioModalVisible = false; // Controle de visibilidade do modal de usuário
  isEditarUsuarioModalVisible = false; // Controle de visibilidade do modal de edição de usuário
  isModalVisible = false; // Controle de visibilidade do modal de tarefa
  isSubTarefa = false; // Indica se estamos adicionando uma subtarefa
  tarefaMae: Tarefa | null = null;
  tarefaEditando: Tarefa | SubTarefa | null = null;
  arquivoSelecionado: File | null = null; // Arquivo selecionado para upload


  private router = inject(Router);
  private taskService = inject(TaskService);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private notificationService = inject(NotificationService);

  /**
   * Converte uma data para o formato datetime-local usando o horário local do navegador
   * @param data - Data em qualquer formato (string ISO, Date, etc)
   * @returns String formatada no padrão YYYY-MM-DDTHH:mm para input datetime-local
   */
  private formatarDataParaDateTimeLocal(data: Date | string | number | null | undefined): string | null {
    if (!data) return null;
    
    const dataObj = new Date(data);
    // Verifica se a data é válida
    if (isNaN(dataObj.getTime())) return null;
    
    // Obtém os componentes da data/hora local
    const ano = dataObj.getFullYear();
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const horas = String(dataObj.getHours()).padStart(2, '0');
    const minutos = String(dataObj.getMinutes()).padStart(2, '0');
    
    // Formato: YYYY-MM-DDTHH:mm (formato esperado pelo input datetime-local)
    return `${ano}-${mes}-${dia}T${horas}:${minutos}`;
  }

  ngOnInit(): void {
    this.carregarUsuario(); // Obter dados do usuário logado
    this.carregarTarefas(); // Obter lista de tarefas do usuário
    this.carregarPrioridadesEstados(); // Obter prioridades e estados disponíveis
    this.inicializarFormularios(); // Configurar formulários reativos
  }

  /** Inicializa os formulários reativos */
 private inicializarFormularios(): void {
    // Verifica se `usuario` está carregado antes de inicializar
    if (!this.usuario) {
      console.warn(
        'Usuário não carregado. Aguardando carregamento para inicializar formulários.'
      );
      return;
    }

    // Formulário para dados do usuário
    this.usuarioForm = this.fb.group({
      nome: [
        this.usuario.length > 0 && this.usuario[0].nome ? this.usuario[0].nome : '',
        Validators.required
      ],
      telefone: [
        this.usuario.length > 0 && this.usuario[0].telefone ? this.usuario[0].telefone : '',
        [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)],
      ],
      email: [
        this.usuario.length > 0 && this.usuario[0].email ? this.usuario[0].email : '',
        [Validators.required, Validators.email],
      ],
    });

    // Formulário para criação/edição de tarefas
    /**
     * Retorna a data/hora local formatada para o input datetime-local
     * Usa o horário local do navegador/cliente, não força nenhum fuso horário específico
     */
    function getHorarioLocal(): string {
      const agora = new Date();
      // Obtém os componentes da data/hora local
      const ano = agora.getFullYear();
      const mes = String(agora.getMonth() + 1).padStart(2, '0');
      const dia = String(agora.getDate()).padStart(2, '0');
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      // Formato: YYYY-MM-DDTHH:mm (formato esperado pelo input datetime-local)
      return `${ano}-${mes}-${dia}T${horas}:${minutos}`;
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
        getHorarioLocal(), // Data de início no horário local do cliente
      ],
      dthrfim: [null], // Data de fim (opcional)
    });
  }
  /** Carregar o usuário logado */
  public carregarUsuarioLogado(): void {
    this.authService.obterUsuarioLogado().subscribe({
      next: (usuario) => {
        this.usuario = [usuario]; // Corrigido para ser um array, conforme esperado pelo restante do código

        // Atualiza o formulário com o ID do usuário logado
        this.tarefaForm.patchValue({ idusuario: usuario.id }); // Corrigido para 'idusuario' conforme o form
      },
      error: () => this.notificationService.showError('Erro ao carregar usuário logado.'),
    });
  }
  /** Carrega os dados do usuário logado */
  private carregarUsuario(): void {
    try {
      const idUsuario = this.authService.obterIdUsuarioLogado();
      if (idUsuario === null) {
        this.notificationService.showWarning('Usuário não autenticado. Faça login novamente.');
        this.router.navigate(['/login']);
        return;
      }

      this.authService.obterUsuarioPorId(idUsuario).subscribe({
        next: (usuario) => {
          this.usuario = [usuario]; // Corrigido para ser um array, conforme esperado pelo restante do código
          this.usuarioForm.patchValue(usuario); // Preenche o formulário com o objeto do usuário
        },
        error: () => {
          // Não loga detalhes do erro para prevenir vazamento de informações
          this.notificationService.showError('Erro ao carregar os dados do usuário.');
        },
      });
    } catch {
      // Não loga detalhes do erro para prevenir vazamento de informações
      this.notificationService.showError('Erro ao carregar o usuário. Faça login novamente.');
    }
  }
  /** Salva os dados atualizados do usuário */
 public salvarDadosUsuario(): void {
    if (this.usuarioForm.invalid) {
      this.notificationService.showWarning('Preencha todos os campos obrigatórios corretamente.');
      return;
    }

    const dadosAtualizados = this.usuarioForm.value;

    // Não loga dados do usuário por segurança
    this.authService.atualizarUsuario(dadosAtualizados).subscribe({
      next: (res) => {
        this.notificationService.showSuccess(res?.message || 'Dados atualizados com sucesso!');
        this.carregarUsuario();
      },
      error: () => {
        // Não expõe detalhes do erro (status code, etc) para prevenir vazamento de informações
        this.notificationService.showError('Erro ao atualizar dados. Tente novamente mais tarde.');
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
  /** Carregar prioridades e estados */
  private carregarPrioridadesEstados(): void {
    this.taskService.obterMetadados().subscribe({
      next: (res) => {
        this.prioridades = res.prioridades;
        this.estados = res.estados;
      },
      error: () => this.notificationService.showError('Erro ao carregar prioridades e estados.'),
    });
  }
  /** Carrega as prioridades diretamente da tabela prioridade */
  public carregarPrioridades(): void {
    this.taskService.obterPrioridades().subscribe({
      next: (res) => {
        this.prioridades = res;
        // Não loga dados por segurança
      },
      error: () => {
        // Não loga detalhes do erro
        this.notificationService.showError(
          'Erro ao carregar prioridades. Verifique a conexão com o servidor.'
        );
      },
    });
  }
  /** Carregar todas as tarefas do usuário */
  private carregarTarefas(): void {
    this.loading = true; // Inicia o carregamento

    // Faz cast para o tipo correto da resposta da API
    (this.taskService.obterTarefas() as unknown as Observable<TarefasApiResponse>).subscribe({
      next: (res: TarefasApiResponse) => {
        this.loading = false; // Finaliza o carregamento

        // Não loga dados sensíveis das tarefas

        if (res && Array.isArray(res.tarefas)) {
          const tarefasPrincipais = res.tarefas.filter((t: TarefaResponse) => !t.idmae);

          this.tarefas = tarefasPrincipais.map((tarefa: TarefaResponse) => {
            const subTarefasAssociadas = res.tarefas
              .filter((sub: TarefaResponse) => sub.idmae === tarefa.id)
              .map((sub: TarefaResponse) => ({
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
                progresso: 0,
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
              documentos: tarefa.Documentos || [],
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
          // Não loga detalhes da resposta por segurança
          this.notificationService.showError('Formato de dados inválido recebido do servidor.');
        }
      },
      error: () => {
        this.loading = false; // Finaliza o carregamento em caso de erro
        // Não loga detalhes do erro
        this.notificationService.showError('Erro ao carregar tarefas.');
      },
    });
  }

  public atualizarTarefa(): void {
    this.carregarTarefas();
    window.location.reload();
  }
  /** Salvar uma nova tarefa ou editar uma existente */
  public salvarTarefa(): void {
    if (this.tarefaForm.invalid) {
      this.notificationService.showWarning('Preencha todos os campos obrigatórios.');
      return;
    }

    // Converte as datas do formato datetime-local (horário local) para ISO (UTC) para envio ao servidor
    const dthrinicioISO = this.tarefaForm.value.dthrinicio
      ? new Date(this.tarefaForm.value.dthrinicio).toISOString()
      : null;
    const dthrfimISO = this.tarefaForm.value.dthrfim
      ? new Date(this.tarefaForm.value.dthrfim).toISOString()
      : null;

    const tarefaData = {
      ...this.tarefaForm.value,
      idusuario: this.authService.obterIdUsuarioLogado(),
      dthrinicio: dthrinicioISO,
      dthrfim: dthrfimISO,
    };

    Object.keys(tarefaData).forEach((key) => {
      if (tarefaData[key] === undefined || tarefaData[key] === null) {
        delete tarefaData[key];
      }
      if (key === 'titulo' && tarefaData[key] === '') {
        delete tarefaData[key];
      }
    });

    // Não loga dados da tarefa por segurança

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

      this.taskService.atualizarTarefa(idParaAtualizar, tarefaData).subscribe({
        next: () => {
          // Se há um arquivo selecionado, faz o upload
          if (this.arquivoSelecionado && !eSubtarefa) {
            this.fazerUploadDocumento(idParaAtualizar, tarefaData.idusuario);
          } else {
            this.notificationService.showSuccess(mensagemSucesso);
            this.carregarTarefas();
            this.fecharModal();
          }
        },
        error: () => {
          // Não expõe detalhes do erro
          this.notificationService.showError(mensagemErro + '. Tente novamente.');
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
              this.notificationService.showSuccess('Subtarefa criada com sucesso!');
              this.carregarTarefas();
              this.fecharModal();
            },
            error: () => {
              // Não expõe detalhes do erro
              this.notificationService.showError('Erro ao criar subtarefa. Tente novamente.');
            },
          });
      } else {
        // Criação de uma nova tarefa principal
        this.taskService.criarTarefa(tarefaData).subscribe({
          next: (res) => {
            // Se há um arquivo selecionado, faz o upload
            if (this.arquivoSelecionado && res?.id) {
              this.fazerUploadDocumento(res.id, tarefaData.idusuario);
            } else {
              this.notificationService.showSuccess('Nova tarefa criada com sucesso!');
              this.carregarTarefas();
              this.fecharModal();
            }
          },
          error: () => {
            // Não expõe detalhes do erro
            this.notificationService.showError('Erro ao criar nova tarefa. Tente novamente.');
          },
        });
      }
    }
  }
  public salvarNovaTarefa(tarefa: Tarefa): void {
    if (!tarefa.usuario || isNaN(Number(tarefa.usuario))) {
      this.notificationService.showWarning('ID do usuário é obrigatório e deve ser um número válido.');
      return;
    }

    this.taskService.obterTarefas().subscribe({
      next: () => {
        this.notificationService.showSuccess('Tarefa criada com sucesso!');
        this.carregarTarefas();
      },
      error: () => {
        // Não expõe detalhes do erro
        this.notificationService.showError('Erro ao criar tarefa. Verifique os dados.');
      },
    });
  }
  /** Excluir uma tarefa */
  public excluirTarefa(id: number): void {
    // Validação de segurança: verifica se o usuário tem permissão
    if (!this.validarPermissaoTarefa(id)) {
      this.notificationService.showError('Você não tem permissão para excluir esta tarefa.');
      return;
    }

    if (!this.notificationService.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      return;
    }

    this.taskService.excluirTarefa(id).subscribe({
      next: () => {
        this.notificationService.showSuccess('Tarefa excluída com sucesso.');
        this.carregarTarefas(); // Recarrega os cards após exclusão
      },
      error: () => {
        // Não expõe detalhes do erro
        this.notificationService.showError('Erro ao excluir tarefa. Tente novamente.');
      },
    });
  }

  /**
   * Valida se o usuário tem permissão para acessar/modificar uma tarefa
   * Previne Insecure Direct Object References (IDOR)
   * IMPORTANTE: Esta é uma validação no frontend, mas o backend DEVE fazer a mesma validação
   */
  private validarPermissaoTarefa(tarefaId: number): boolean {
    const tarefa = this.tarefas.find(t => t.id === tarefaId);
    if (!tarefa) {
      return false;
    }
    
    const idUsuarioLogado = this.authService.obterIdUsuarioLogado();
    if (!idUsuarioLogado) {
      return false;
    }
    
    // Verifica se a tarefa pertence ao usuário logado
    // Nota: Isso é uma validação no frontend, mas o backend DEVE fazer a mesma validação
    const tarefaComId = tarefa as Tarefa & { idusuario?: number };
    return tarefa.usuario === this.usuario[0]?.nome || 
           tarefaComId.idusuario === idUsuarioLogado;
  }

  /**
   * Sanitiza texto para prevenir XSS
   * Remove tags HTML e caracteres perigosos
   */
  private sanitizarTexto(texto: string): string {
    if (!texto) return '';
    
    // Remove tags HTML
    let sanitizado = texto.replace(/<[^>]*>/g, '');
    
    // Remove caracteres de controle
    // eslint-disable-next-line no-control-regex
    sanitizado = sanitizado.replace(/[\x00-\x1F\x7F]/g, '');
    
    // Limita tamanho
    if (sanitizado.length > 100) {
      sanitizado = sanitizado.substring(0, 100) + '...';
    }
    
    return sanitizado;
  }

  /** Excluir uma subtarefa */
 public  excluirSubTarefa(subTarefa: SubTarefa, tarefa: Tarefa): void {
    // Sanitiza o título para prevenir XSS
    const tituloSanitizado = this.sanitizarTexto(subTarefa.titulo);
    
    if (
      this.notificationService.confirm(
        `Tem certeza que deseja excluir a subtarefa "${tituloSanitizado}"?`
      )
    ) {
      this.taskService.excluirSubTarefa(subTarefa.id).subscribe({
        next: () => {
          this.notificationService.showSuccess('Subtarefa excluída com sucesso.');
          // Remove a subtarefa da lista local
          tarefa.subTarefas = tarefa.subTarefas.filter(
            (sub: SubTarefa) => sub.id !== subTarefa.id
          );
          // Atualiza o progresso da tarefa
          this.atualizarProgresso(tarefa);
          // Recarrega as tarefas para sincronizar com o backend
          this.carregarTarefas();
        },
        error: () => {
          // Não expõe detalhes do erro
          this.notificationService.showError('Erro ao excluir subtarefa. Tente novamente.');
        },
      });
    }
  }
  private salvarLocalStorage(): void {
    const progressoTarefas = {
      tarefas: this.tarefas.map((tarefa) => ({
        id: tarefa.id,
        progresso: tarefa.progresso,
        estado: tarefa.estado,
        subTarefas: tarefa.subTarefas.map((sub: { id: Tarefa['id']; estado: Estado['nome'] }) => ({
          id: sub.id,
          estado: sub.estado,
        })),
      })),
      timestamp: new Date().getTime(),
    };

    localStorage.setItem('progressoTarefas', JSON.stringify(progressoTarefas));
  }
 private carregarLocalStorage(): void {
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
      } catch {
        // Não loga erros do localStorage por segurança
        localStorage.removeItem('progressoTarefas');
      }
    }
  }
 private  aplicarProgressoSalvo(progressoSalvo: ProgressoTarefaSalvo[]): void {
    progressoSalvo.forEach((progressoTarefa) => {
      const tarefa = this.tarefas.find((t) => t.id === progressoTarefa.id);

      if (tarefa) {
        // Aplica o progresso salvo
        tarefa.progresso = progressoTarefa.progresso || 0;
        tarefa.estado = progressoTarefa.estado || tarefa.estado;

        // Aplica o estado das subtarefas
        progressoTarefa.subTarefas.forEach((progressoSub: { id: number; estado: string }) => {
          const subTarefa = tarefa.subTarefas.find(
            (s: { id: Tarefa['id'] }) => s.id === progressoSub.id
          );
          if (subTarefa) {
            subTarefa.estado = progressoSub.estado || subTarefa.estado;
          }
        });
      }
    });
  }
  /** Abrir o modal para criar uma subtarefa */
  public incluirSubTarefa(tarefa: Tarefa): void {
    this.isSubTarefa = true; // Define que estamos criando uma subtarefa
    this.tarefaMae = tarefa; // Armazena a tarefa pai
    
    // Obtém a data/hora local atual formatada
    const agora = new Date();
    const ano = agora.getFullYear();
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const dia = String(agora.getDate()).padStart(2, '0');
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const dataInicioLocal = `${ano}-${mes}-${dia}T${horas}:${minutos}`;
    
    // Atualiza o formulário com os valores da tarefa pai e bloqueia os campos necessários
    this.tarefaForm.patchValue({
      idmae: tarefa.id, // ID da tarefa pai
      titulo: '', // Campo editável para o título da subtarefa
      descricao: '', // Campo editável para a descrição da subtarefa
      dthrinicio: dataInicioLocal, // Data de início no horário local do cliente
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
  public editarTarefa(tarefa: Tarefa): void {
    this.tarefaEditando = tarefa;

    // Mapeia corretamente os campos da tarefa para o formulário
    const idPrioridade = this.obterIdPrioridade(tarefa.prioridade);
    const idEstado = this.obterIdEstado(tarefa.estado);

    // Não loga dados da tarefa por segurança

    this.tarefaForm.patchValue({
      id: tarefa.id,
      idusuario: tarefa.usuario || this.authService.obterIdUsuarioLogado(),
      idprioridade: idPrioridade,
      titulo: tarefa.titulo,
      descricao: tarefa.descricao,
      idestado: idEstado,
      dthrinicio: this.formatarDataParaDateTimeLocal(tarefa.dthrinicio),
      dthrfim: this.formatarDataParaDateTimeLocal(tarefa.dthrfim),
    });
    this.isModalVisible = true;
  }
  /** Editar uma subtarefa */
  public editarSubTarefa(subTarefa: SubTarefa, tarefaMae: Tarefa): void {
    if (this.isSubTarefaConcluida(subTarefa)) {
      this.notificationService.showWarning('Não é possível editar uma subtarefa que já foi concluída.');
      return;
    }

    this.tarefaEditando = subTarefa;
    this.isSubTarefa = true; // Indica que estamos editando uma subtarefa
    this.tarefaMae = tarefaMae; // Armazena a tarefa pai

    // Obtém os IDs corretos para prioridade e estado
    const idPrioridade = this.obterIdPrioridade(subTarefa.prioridade);
    const idEstado = this.obterIdEstado(subTarefa.estado);

    // Não loga dados da subtarefa por segurança

    // Preenche o formulário com os dados da subtarefa
    this.tarefaForm.patchValue({
      id: subTarefa.id, // ID da subtarefa para atualização
      idusuario: subTarefa.idusuario,
      idprioridade: idPrioridade,
      titulo: subTarefa.titulo,
      descricao: subTarefa.descricao,
      idestado: idEstado,
      idmae: tarefaMae.id, // Referência à tarefa principal
      dthrinicio: this.formatarDataParaDateTimeLocal(subTarefa.dthrinicio),
      dthrfim: this.formatarDataParaDateTimeLocal(subTarefa.dthrfim),
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
 public fecharModal(): void {
    this.isModalVisible = false;
    this.tarefaEditando = null;
    this.isSubTarefa = false;
    this.tarefaMae = null;
    this.arquivoSelecionado = null; // Limpa o arquivo selecionado
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
  /**
   * Valida e processa arquivo selecionado com verificações de segurança
   * Segue OWASP: valida tipo, tamanho e nome do arquivo
   */
  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    // Validação de segurança do arquivo
    const validationResult = this.validarArquivo(file);
    if (!validationResult.isValid) {
      this.notificationService.showError(validationResult.errorMessage || 'Arquivo inválido');
      // Limpa o input
      input.value = '';
      this.arquivoSelecionado = null;
      return;
    }

    this.arquivoSelecionado = file;
    // Não loga informações sensíveis do arquivo
  }

  /**
   * Valida arquivo seguindo práticas OWASP
   * - Verifica tipo MIME e extensão
   * - Verifica tamanho máximo
   * - Sanitiza nome do arquivo
   */
  private validarArquivo(file: File): { isValid: boolean; errorMessage?: string } {
    // Tipos de arquivo permitidos (whitelist)
    const tiposPermitidos = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif'
    ];

    const extensoesPermitidas = [
      '.pdf', '.doc', '.docx', '.txt', '.xls', '.xlsx', '.jpg', '.jpeg', '.png', '.gif'
    ];

    // Tamanho máximo: 10MB (10 * 1024 * 1024 bytes)
    const tamanhoMaximo = 10 * 1024 * 1024;

    // Valida tipo MIME
    if (!tiposPermitidos.includes(file.type)) {
      return {
        isValid: false,
        errorMessage: 'Tipo de arquivo não permitido. Use: PDF, DOC, DOCX, TXT, XLS, XLSX, JPG, PNG ou GIF.'
      };
    }

    // Valida extensão
    const extensao = this.obterExtensao(file.name);
    if (!extensoesPermitidas.includes(extensao.toLowerCase())) {
      return {
        isValid: false,
        errorMessage: 'Extensão de arquivo não permitida.'
      };
    }

    // Valida tamanho
    if (file.size > tamanhoMaximo) {
      return {
        isValid: false,
        errorMessage: `Arquivo muito grande. Tamanho máximo: 10MB. Tamanho atual: ${(file.size / 1024 / 1024).toFixed(2)}MB`
      };
    }

    // Valida nome do arquivo (prevenir path traversal e caracteres perigosos)
    if (!this.validarNomeArquivo(file.name)) {
      return {
        isValid: false,
        errorMessage: 'Nome do arquivo contém caracteres inválidos.'
      };
    }

    return { isValid: true };
  }

  /**
   * Obtém a extensão do arquivo de forma segura
   */
  private obterExtensao(nomeArquivo: string): string {
    const ultimoPonto = nomeArquivo.lastIndexOf('.');
    if (ultimoPonto === -1 || ultimoPonto === 0) {
      return '';
    }
    return nomeArquivo.substring(ultimoPonto);
  }

  /**
   * Valida nome do arquivo para prevenir path traversal e caracteres perigosos
   */
  private validarNomeArquivo(nomeArquivo: string): boolean {
    // Remove caracteres perigosos
    // eslint-disable-next-line no-control-regex
    const caracteresPerigosos = /[<>:"|?*\x00-\x1F]/;
    if (caracteresPerigosos.test(nomeArquivo)) {
      return false;
    }

    // Previne path traversal
    if (nomeArquivo.includes('..') || nomeArquivo.includes('/') || nomeArquivo.includes('\\')) {
      return false;
    }

    // Limita tamanho do nome
    if (nomeArquivo.length > 255) {
      return false;
    }

    return true;
  }

  // Upload de documento para uma tarefa
  private fazerUploadDocumento(idtarefa: number, idusuario: number): void {
    if (!this.arquivoSelecionado) {
      this.notificationService.showWarning('Nenhum arquivo selecionado para upload.');
      return;
    }

    this.taskService.uploadDocumento(idtarefa, idusuario, this.arquivoSelecionado).subscribe({
      next: () => {
        const mensagem = this.tarefaEditando
          ? 'Tarefa atualizada e documento anexado com sucesso!'
          : 'Tarefa criada e documento anexado com sucesso!';
        this.notificationService.showSuccess(mensagem);
        this.arquivoSelecionado = null;
        this.carregarTarefas();
        this.fecharModal();
      },
      error: () => {
        // Não expõe detalhes do erro
        const mensagem = this.tarefaEditando
          ? 'Tarefa atualizada, mas erro ao anexar documento.'
          : 'Tarefa criada, mas erro ao anexar documento.';
        this.notificationService.showError(mensagem);
        this.carregarTarefas();
        this.fecharModal();
      },
    });
  }

  // Download de um documento
  public downloadDocumento(id: number): void {
    this.taskService.downloadDocumento(id).subscribe({
      next: (blob: Blob) => {
        // Cria um link temporário para download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'documento'; // O nome será definido pelo servidor
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      error: () => {
        // Não expõe detalhes do erro
        this.notificationService.showError('Erro ao fazer download do documento. Tente novamente.');
      },
    });
  }

  // Excluir um documento
  public excluirDocumento(id: number): void {
    if (this.notificationService.confirm('Tem certeza que deseja excluir este documento?')) {
      this.taskService.excluirDocumento(id).subscribe({
        next: () => {
          this.notificationService.showSuccess('Documento excluído com sucesso!');
          this.carregarTarefas(); // Recarrega as tarefas para atualizar a lista de documentos
        },
        error: () => {
          // Não expõe detalhes do erro
          this.notificationService.showError('Erro ao excluir documento. Tente novamente.');
        },
      });
    }
  }

  // Obter ícone baseado na extensão do documento
 public getDocumentoIcon(extensao: string): string {
    const ext = extensao.toLowerCase();
    if (ext === '.pdf') return 'bi bi-file-earmark-pdf';
    if (ext === '.doc' || ext === '.docx') return 'bi bi-file-earmark-word';
    if (ext === '.xls' || ext === '.xlsx') return 'bi bi-file-earmark-excel';
    if (ext === '.txt') return 'bi bi-file-earmark-text';
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif') return 'bi bi-file-earmark-image';
    if (ext === '.zip' || ext === '.rar') return 'bi bi-file-earmark-zip';
    return 'bi bi-file-earmark';
  }

  // Obter tipo de documento baseado na extensão
  public getDocumentoTipo(extensao: string): string {
    const ext = extensao.toLowerCase();
    if (ext === '.pdf') return 'PDF';
    if (ext === '.doc' || ext === '.docx') return 'Word';
    if (ext === '.xls' || ext === '.xlsx') return 'Excel';
    if (ext === '.txt') return 'Texto';
    if (ext === '.jpg' || ext === '.jpeg') return 'Imagem JPEG';
    if (ext === '.png') return 'Imagem PNG';
    if (ext === '.gif') return 'Imagem GIF';
    if (ext === '.zip') return 'Arquivo ZIP';
    if (ext === '.rar') return 'Arquivo RAR';
    return 'Documento';
  }
  // Navigate to "My Tasks"
 public CliqueMinhaTarefa(pageName: string): void {
    this.router.navigate([pageName]);
  }
  // Logout and navigate to login
 public CliqueHome(pageName: string): void {
    this.authService.removerToken();
    this.notificationService.showInfo('Você saiu do sistema!');
    this.router.navigate([pageName]);
  }
  // Calculate task progress
  public calcularProgresso(tarefa: Tarefa): number {
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
  public marcarSubTarefaConcluida(subTarefa: SubTarefa, tarefa: Tarefa): void {
    // 1. Bloqueia a ação se a subtarefa já estiver concluída.
    if (subTarefa.estado === 'Concluído') {
      return;
    }

    // 2. Obtém o ID do estado "Concluído" do array de estados
    const estadoConcluido = this.estados.find(
      (e: Estado) => e.nome === 'Concluído'
    );
    if (!estadoConcluido) {
      this.notificationService.showError(
        'Estado "Concluído" não encontrado. Verifique a configuração do sistema.'
      );
      return;
    }
    // 3. Prepara o corpo da requisição com os dados para o backend.
    const dadosParaAtualizar = {
      idestado: estadoConcluido.id, // ID do estado "Concluído"
      dthrfim: new Date().toISOString(), // Define a data/hora de conclusão
    };

    // Não loga dados por segurança

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
  public atualizarProgresso(tarefa: Tarefa): void {
    // 1. Calcula o novo progresso
    const concluidas = tarefa.subTarefas.filter(
      (sub: SubTarefa) => sub.estado === 'Concluído'
    ).length;
    const progresso =
      tarefa.subTarefas.length > 0
        ? Math.round((concluidas / tarefa.subTarefas.length) * 100)
        : 0;

    // 2. Atualiza o progresso no objeto da tarefa no frontend.
    tarefa.progresso = progresso;

    // 3. Prepara o corpo da requisição com o progresso e estado
    const dadosParaAtualizar: { progresso: number; idestado?: number } = {
      progresso: progresso,
    };

    // Se todas as subtarefas estiverem concluídas, marca a tarefa principal como concluída
    if (progresso === 100) {
      const estadoConcluido = this.estados.find(
        (e: Estado) => e.nome === 'Concluído'
      );
      if (estadoConcluido) {
        dadosParaAtualizar.idestado = estadoConcluido.id;
      }
    }
    // Não loga dados por segurança
    // 4. Atualiza a tarefa no backend
    this.taskService.atualizarTarefa(tarefa.id, dadosParaAtualizar).subscribe({
      next: () => {
        // Não loga dados por segurança

        // 5. Se a tarefa foi concluída, atualiza a interface
        if (progresso === 100) {
          tarefa.estado = 'Concluído';
          tarefa.dthrfim = new Date();
        }
      },
      error: () => {
        // Não loga detalhes do erro por segurança
        this.notificationService.showError('Erro ao atualizar progresso. Tente novamente.');
      },
    });
  }
  /**
   * Verifica se uma subtarefa está concluída.
   */
 public  isSubTarefaConcluida(sub: SubTarefa): boolean {
    return sub.estado === 'Concluído';
  }

  public isSubTarefaDesabilitada(sub: SubTarefa): boolean {
    return sub.estado === 'Concluído';
  }
 public  getSubTarefaClasses(sub: SubTarefa): Record<string, boolean> {
    return {
      'subtarefa-concluida': this.isSubTarefaConcluida(sub),
      'subtarefa-desabilitada': this.isSubTarefaDesabilitada(sub),
      [this.obterClassePrioridade(sub.prioridade)]: true,
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

  /**
   * Obtém a classe CSS baseada na prioridade da tarefa
   * @param prioridade - Nome da prioridade
   * @returns Classe CSS correspondente à prioridade
   */
  public obterClassePrioridade(prioridade: string): string {
    if (!prioridade) return 'priority-default';
    
    const prioridadeLower = prioridade.toLowerCase().trim();
    
    if (prioridadeLower.includes('muito alta') || prioridadeLower.includes('muito-alta')) {
      return 'priority-muito-alta';
    } else if (prioridadeLower.includes('alta')) {
      return 'priority-alta';
    } else if (prioridadeLower.includes('média') || prioridadeLower.includes('media')) {
      return 'priority-media';
    } else if (prioridadeLower.includes('baixa')) {
      return 'priority-baixa';
    }
    
    return 'priority-default';
  }

  /**
   * Obtém a cor de fundo baseada na prioridade
   * @param prioridade - Nome da prioridade
   * @returns Cor em formato hexadecimal
   */
  public obterCorPrioridade(prioridade: string): string {
    if (!prioridade) return '#6c757d';
    
    const prioridadeLower = prioridade.toLowerCase().trim();
    
    if (prioridadeLower.includes('muito alta') || prioridadeLower.includes('muito-alta')) {
      return '#dc3545'; // Vermelho
    } else if (prioridadeLower.includes('alta')) {
      return '#fd7e14'; // Laranja
    } else if (prioridadeLower.includes('média') || prioridadeLower.includes('media')) {
      return '#ffc107'; // Amarelo
    } else if (prioridadeLower.includes('baixa')) {
      return '#17a2b8'; // Ciano
    }
    
    return '#6c757d'; // Cinza padrão
  }

  /**
   * Obtém a cor de texto baseada na prioridade (para contraste)
   * @param prioridade - Nome da prioridade
   * @returns Cor em formato hexadecimal
   */
  public obterCorTextoPrioridade(prioridade: string): string {
    if (!prioridade) return '#ffffff';
    
    const prioridadeLower = prioridade.toLowerCase().trim();
    
    if (prioridadeLower.includes('média') || prioridadeLower.includes('media')) {
      return '#000000'; // Preto para amarelo (melhor contraste)
    }
    
    return '#ffffff'; // Branco para outras cores
  }
}
