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
  progresso: number; // Adiciona a propriedade 'progresso'
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
  progresso: number; // ✅ Adicionando a propriedade progresso
  usuario?: string;
  idusuario?: number;
  dthrinicio?: Date | number | string | null;
  dthrfim?: Date | number | string | null;
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
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
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
  public carregarUsuarioLogado(): void {
    this.authService.obterUsuarioLogado().subscribe({
      next: (usuario) => {
        this.usuario = [usuario]; // Corrigido para ser um array, conforme esperado pelo restante do código

        // Atualiza o formulário com o ID do usuário logado
        this.tarefaForm.patchValue({ idusuario: usuario.id }); // Corrigido para 'idusuario' conforme o form
      },
      error: () => alert('Erro ao carregar usuário logado.'),
    });
  }
  /** Carrega os dados do usuário logado */
  private carregarUsuario(): void {
    try {
      const idUsuario = this.authService.obterIdUsuarioLogado();
      if (idUsuario === null) {
        alert('Usuário não autenticado. Faça login novamente.');
        this.router.navigate(['/login']);
        return;
      }

      this.authService.obterUsuarioPorId(idUsuario).subscribe({
        next: (usuario) => {
          this.usuario = [usuario]; // Corrigido para ser um array, conforme esperado pelo restante do código
          this.usuarioForm.patchValue(usuario); // Preenche o formulário com o objeto do usuário
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
 public salvarDadosUsuario(): void {
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
      error: () => alert('Erro ao carregar prioridades e estados.'),
    });
  }
  /** Carrega as prioridades diretamente da tabela prioridade */
  public carregarPrioridades(): void {
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
  private carregarTarefas(): void {
    this.loading = true; // Inicia o carregamento

    this.taskService.obterTarefas().subscribe({
      next: (res: any) => {
        this.loading = false; // Finaliza o carregamento

        console.log(res); // Inspeciona a resposta

        if (res && Array.isArray(res.tarefas)) {
          const tarefasPrincipais = res.tarefas.filter((t: any) => !t.idmae);

          this.tarefas = tarefasPrincipais.map((tarefa: any) => {
            const subTarefasAssociadas = res.tarefas
              .filter((sub: { idmae?: number }) => sub.idmae === tarefa.id)
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

  public atualizarTarefa(): void {
    this.carregarTarefas();
    window.location.reload();
  }
  /** Salvar uma nova tarefa ou editar uma existente */
  public salvarTarefa(): void {
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
          // Se há um arquivo selecionado, faz o upload
          if (this.arquivoSelecionado && !eSubtarefa) {
            this.fazerUploadDocumento(idParaAtualizar, tarefaData.idusuario);
          } else {
            alert(mensagemSucesso);
            this.carregarTarefas();
            this.fecharModal();
          }
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
          next: (res) => {
            // Se há um arquivo selecionado, faz o upload
            if (this.arquivoSelecionado && res?.id) {
              this.fazerUploadDocumento(res.id, tarefaData.idusuario);
            } else {
              alert('Nova tarefa criada com sucesso!');
              this.carregarTarefas();
              this.fecharModal();
            }
          },
          error: (err) => {
            console.error('Erro ao criar nova tarefa:', err);
            alert('Erro ao criar nova tarefa.');
          },
        });
      }
    }
  }
  public salvarNovaTarefa(tarefa: Tarefa): void {
    if (!tarefa.usuario || isNaN(Number(tarefa.usuario))) {
      alert('ID do usuário é obrigatório e deve ser um número válido.');
      return;
    }

    this.taskService.obterTarefas().subscribe({
      next: () => {
        alert('Tarefa criada com sucesso!');
        this.carregarTarefas();
      },
      error: (err: { error?: { message?: string }; message?: string }) => {
        console.error('Erro ao criar tarefa:', err);
        alert('Erro ao criar tarefa. Verifique os dados.');
      },
    });
  }
  /** Excluir uma tarefa */
  public excluirTarefa(id: number): void {
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
 public  excluirSubTarefa(subTarefa: SubTarefa, tarefa: any): void {
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
            (sub: Tarefa) => sub.id !== subTarefa.id
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
      } catch (error) {
        console.error('Erro ao carregar o progresso do localStorage:', error);
        localStorage.removeItem('progressoTarefas');
      }
    }
  }
 private  aplicarProgressoSalvo(progressoSalvo: any[]): void {
    progressoSalvo.forEach((progressoTarefa) => {
      const tarefa = this.tarefas.find((t) => t.id === progressoTarefa.id);

      if (tarefa) {
        // Aplica o progresso salvo
        tarefa.progresso = progressoTarefa.progresso || 0;
        tarefa.estado = progressoTarefa.estado || tarefa.estado;

        // Aplica o estado das subtarefas
        progressoTarefa.subTarefas.forEach((progressoSub: SubTarefa) => {
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
  public editarTarefa(tarefa: Tarefa): void {
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
  public editarSubTarefa(subTarefa: SubTarefa, tarefaMae: Tarefa): void {
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
  // Handle file selection
  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.arquivoSelecionado = file;
      console.log('Arquivo selecionado:', file.name, 'Tamanho:', file.size);
    }
  }

  // Upload de documento para uma tarefa
  private fazerUploadDocumento(idtarefa: number, idusuario: number): void {
    if (!this.arquivoSelecionado) {
      alert('Nenhum arquivo selecionado para upload.');
      return;
    }

    this.taskService.uploadDocumento(idtarefa, idusuario, this.arquivoSelecionado).subscribe({
      next: () => {
        const mensagem = this.tarefaEditando
          ? 'Tarefa atualizada e documento anexado com sucesso!'
          : 'Tarefa criada e documento anexado com sucesso!';
        alert(mensagem);
        this.arquivoSelecionado = null;
        this.carregarTarefas();
        this.fecharModal();
      },
      error: (err) => {
        console.error('Erro ao fazer upload do documento:', err);
        const mensagem = this.tarefaEditando
          ? 'Tarefa atualizada, mas erro ao anexar documento: '
          : 'Tarefa criada, mas erro ao anexar documento: ';
        alert(mensagem + (err.error?.message || err.message || 'Erro desconhecido'));
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
      error: (err) => {
        console.error('Erro ao fazer download do documento:', err);
        alert('Erro ao fazer download do documento: ' + (err.error?.message || err.message || 'Erro desconhecido'));
      },
    });
  }

  // Excluir um documento
  public excluirDocumento(id: number): void {
    if (confirm('Tem certeza que deseja excluir este documento?')) {
      this.taskService.excluirDocumento(id).subscribe({
        next: () => {
          alert('Documento excluído com sucesso!');
          this.carregarTarefas(); // Recarrega as tarefas para atualizar a lista de documentos
        },
        error: (err) => {
          console.error('Erro ao excluir documento:', err);
          alert('Erro ao excluir documento: ' + (err.error?.message || err.message || 'Erro desconhecido'));
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
    alert('Você saiu do sistema!');
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
    const dadosParaAtualizar: any = {
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
