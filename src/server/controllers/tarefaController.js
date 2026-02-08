// controllers/tarefaController.js
const { Tarefa, TarefasEstado, Prioridade, Estado, Usuario, Documento } = require('../models');

exports.getMeta = async (req, res) => {
  try {
    const [prioridades, estados] = await Promise.all([
      Prioridade.findAll(),
      Estado.findAll()
    ]);
    res.status(200).json({ prioridades, estados });
  } catch (error) {
    console.error("Erro ao carregar meta:", error);
    res.status(500).json({ error: "Erro ao carregar meta" });
  }
};

// Criação de tarefa com transação
exports.criarTarefa = async (req, res) => {
  const transaction = await Tarefa.sequelize.transaction();
  try {
    const idusuario = req.usuario.id; // Sempre do token - previne criar tarefa para outro usuário
    const { idprioridade, titulo, descricao, idestado, idmae, dthrinicio, dthrfim } = req.body;

    // Validação dos campos obrigatórios
    if (!idprioridade || !titulo || !idestado) {
      await transaction.rollback();
      return res.status(400).json({
        error: "Campos obrigatórios não preenchidos",
        required: { idprioridade, titulo, idestado },
        opcoes: {
          prioridades: await Prioridade.findAll(),
          estados: await Estado.findAll()
        }
      });
    }

    // Validação reforçada
    const [prioridade, estado] = await Promise.all([
      Prioridade.findByPk(idprioridade, { transaction }),
      Estado.findByPk(idestado, { transaction })
    ]);

    if (!prioridade || !estado) {
      await transaction.rollback();
      return res.status(400).json({
        error: "Prioridade ou estado inválido",
        prioridades: await Prioridade.findAll(),
        estados: await Estado.findAll()
      });
    }

    // Criação principal
    const tarefa = await Tarefa.create({
      idusuario,
      idprioridade,
      titulo,
      descricao: descricao || null,
      idmae: idmae || null,
      dthrinicio: dthrinicio ? new Date(dthrinicio) : new Date(),
      dthrfim: dthrfim ? new Date(dthrfim) : null
    }, { transaction });

    // Histórico de estados
    await TarefasEstado.create({
      idtarefa: tarefa.id,
      idusuario,
      idestado,
      dthrinicio: tarefa.dthrinicio,
      dthrfim: tarefa.dthrfim
    }, { transaction });

    await transaction.commit();

    // Busca os dados completos após criação
    const tarefaCompleta = await Tarefa.findByPk(tarefa.id, {
      include: [
        { model: Prioridade, as: 'Prioridade' },
        {
          model: TarefasEstado,
          as: 'TarefasEstados',
          include: [{ model: Estado, as: 'Estado' }],
          order: [['dthrinicio', 'DESC']],
          limit: 1
        }
      ]
    });

    res.status(201).json({
      message: "Tarefa criada com sucesso!",
      id: tarefa.id, // Retorna o ID da tarefa criada
      tarefa: {
        ...tarefaCompleta.toJSON(),
        EstadoAtual: tarefaCompleta.TarefasEstados[0]?.Estado
      },
      opcoes: {
        prioridades: await Prioridade.findAll(),
        estados: await Estado.findAll()
      }
    });

  } catch (error) {
    await transaction.rollback();
    console.error("Erro ao criar tarefa:", error);
    res.status(500).json({
      error: "Erro interno ao criar tarefa",
      opcoes: {
        prioridades: await Prioridade.findAll(),
        estados: await Estado.findAll()
      }
    });
  }
};

// Busca otimizada com subconsultas
exports.buscarTarefas = async (req, res) => {
  try {
    const idusuario = req.usuario.id;

    const tarefas = await Tarefa.findAll({
      where: { idusuario },
      include: [
        {
          model: Usuario,
          as: 'Usuario', // Use o mesmo alias definido no modelo
          attributes: ['id', 'nome'] // Nome do usuário responsável
        },
        {
          model: Prioridade,
          as: 'Prioridade',
          attributes: ['id', 'nome']
        },
        {
          model: TarefasEstado,
          as: 'TarefasEstados',
          include: [{
            model: Estado,
            as: 'Estado',
            attributes: ['id', 'nome']
          }],
          order: [['dthrinicio', 'DESC']],
          separate: true
        },
        {
          model: Documento,
          as: 'Documentos',
          attributes: ['id', 'idtarefa', 'idusuario', 'nome', 'caminho', 'extensao', 'tamanho']
        },
        {
          model: Tarefa,
          as: 'SubTarefas',
          include: [
            {
              model: Prioridade,
              as: 'Prioridade',
              attributes: ['id', 'nome']
            },
            {
              model: TarefasEstado,
              as: 'TarefasEstados',
              include: [{
                model: Estado,
                as: 'Estado',
                attributes: ['id', 'nome']
              }],
              order: [['dthrinicio', 'DESC']],
              separate: true,
              limit: 1
            }
          ]
        }
      ],
      order: [
        ['dthrinicio', 'ASC'],
        [{ model: Tarefa, as: 'SubTarefas' }, 'dthrinicio', 'ASC']
      ]
    });

    if (Array.isArray(tarefas)) {
      const resposta = tarefas.map(tarefa => {
        // Calcula o progresso baseado nas subtarefas
        let progresso = 0;
        if (tarefa.SubTarefas && tarefa.SubTarefas.length > 0) {
          const subtarefasConcluidas = tarefa.SubTarefas.filter(sub =>
            sub.EstadoAtual?.nome === 'Concluído'
          ).length;
          progresso = Math.round((subtarefasConcluidas / tarefa.SubTarefas.length) * 100);
        } else if (tarefa.EstadoAtual?.nome === 'Concluído') {
          progresso = 100;
        }

        return {
          ...tarefa.toJSON(),
          UsuarioResponsavel: tarefa.Usuario?.nome || 'Desconhecido',
          EstadoAtual: tarefa.TarefasEstados?.[0]?.Estado,
          progresso: progresso,
          SubTarefas: tarefa.SubTarefas.map(sub => ({
            ...sub.toJSON(),
            EstadoAtual: sub.TarefasEstados?.[0]?.Estado
          }))
        };
      });

      res.status(200).json({
        tarefas: resposta,
        opcoes: {
          prioridades: await Prioridade.findAll(),
          estados: await Estado.findAll()
        }
      });
    } else {
      console.error("tarefas não é um array");
      res.status(500).json({ error: "Erro ao carregar tarefas, resultado inesperado" });
    }
  } catch (error) {
    console.error("Erro ao carregar tarefas:", error);
    res.status(500).json({
      error: "Erro ao carregar tarefas",
      opcoes: {
        prioridades: await Prioridade.findAll(),
        estados: await Estado.findAll()
      }
    });
  }
};

// Criação de subtarefa
exports.criarSubTarefa = async (req, res) => {
  const transaction = await Tarefa.sequelize.transaction();
  try {
    const { idmae } = req.params;
    const idusuario = req.usuario.id; // Sempre do token
    const { idprioridade, titulo, descricao, dthrinicio, dthrfim } = req.body;

    // Verifica se a tarefa pai existe e pertence ao usuário
    const tarefaMae = await Tarefa.findByPk(idmae, { transaction });
    if (!tarefaMae) {
      await transaction.rollback();
      return res.status(404).json({ error: "Tarefa pai não encontrada" });
    }
    if (tarefaMae.idusuario !== idusuario) {
      await transaction.rollback();
      return res.status(403).json({ error: "Sem permissão para criar subtarefa nesta tarefa." });
    }

    // Cria a subtarefa
    const subtarefa = await Tarefa.create({
      idusuario,
      idprioridade,
      titulo,
      descricao: descricao || null,
      idmae: parseInt(idmae),
      dthrinicio: dthrinicio ? new Date(dthrinicio) : new Date(),
      dthrfim: dthrfim ? new Date(dthrfim) : null
    }, { transaction });

    // Cria o estado inicial da subtarefa (usando o estado da tarefa pai)
    const estadoTarefaMae = await TarefasEstado.findOne({
      where: { idtarefa: idmae },
      order: [['dthrinicio', 'DESC']],
      transaction
    });

    if (estadoTarefaMae) {
      await TarefasEstado.create({
        idtarefa: subtarefa.id,
        idusuario,
        idestado: estadoTarefaMae.idestado,
        dthrinicio: subtarefa.dthrinicio,
        dthrfim: subtarefa.dthrfim
      }, { transaction });
    }

    await transaction.commit();

    res.status(201).json({
      message: "Subtarefa criada com sucesso!",
      subtarefa: {
        ...subtarefa.toJSON(),
        idmae: parseInt(idmae)
      }
    });

  } catch (error) {
    await transaction.rollback();
    console.error("Erro ao criar subtarefa:", error);
    res.status(500).json({
      error: "Erro interno ao criar subtarefa"
    });
  }
};

// Atualização com controle de transação
exports.atualizarTarefa = async (req, res) => {
  const transaction = await Tarefa.sequelize.transaction();
  try {
    const { id } = req.params;
    const { idprioridade, titulo, descricao, idestado, dthrfim, progresso } = req.body;

    const tarefa = await Tarefa.findByPk(id, {
      include: [
        {
          model: TarefasEstado,
          as: 'TarefasEstados',
          order: [['dthrinicio', 'DESC']],
          limit: 1
        }
      ],
      transaction
    });

    if (!tarefa) {
      await transaction.rollback();
      return res.status(404).json({
        error: "Tarefa não encontrada",
        opcoes: {
          prioridades: await Prioridade.findAll(),
          estados: await Estado.findAll()
        }
      });
    }
    if (tarefa.idusuario !== req.usuario.id) {
      await transaction.rollback();
      return res.status(403).json({ error: "Sem permissão para atualizar esta tarefa." });
    }

    // Validação dos dados antes da atualização
    const dadosAtualizacao = {};

    if (idprioridade !== undefined && idprioridade !== null && idprioridade !== '') {
      dadosAtualizacao.idprioridade = idprioridade;
    }

    if (titulo !== undefined && titulo !== null && titulo !== '') {
      dadosAtualizacao.titulo = titulo;
    }

    if (descricao !== undefined) {
      dadosAtualizacao.descricao = descricao;
    }

    if (dthrfim !== undefined && dthrfim !== null && dthrfim !== '') {
      dadosAtualizacao.dthrfim = new Date(dthrfim);
    }

    if (progresso !== undefined && progresso !== null) {
      dadosAtualizacao.progresso = progresso;
    }

    // Só atualiza se houver dados para atualizar
    if (Object.keys(dadosAtualizacao).length > 0) {
      await tarefa.update(dadosAtualizacao, { transaction });
    }

    // Controle de estado
    if (idestado && idestado !== tarefa.TarefasEstados[0]?.idestado) {
      await TarefasEstado.create({
        idtarefa: id,
        idusuario: tarefa.idusuario,
        idestado,
        dthrinicio: new Date(),
        dthrfim: dthrfim ? new Date(dthrfim) : null
      }, { transaction });
    }

    await transaction.commit();

    // Busca dados atualizados
    const tarefaAtualizada = await Tarefa.findByPk(id, {
      include: [
        { model: Prioridade, as: 'Prioridade' },
        {
          model: TarefasEstado,
          as: 'TarefasEstados',
          include: [{ model: Estado, as: 'Estado' }],
          order: [['dthrinicio', 'DESC']],
          limit: 1
        }
      ]
    });

    res.status(200).json({
      message: "Tarefa atualizada com sucesso!",
      id: id, // Retorna o ID da tarefa atualizada
      tarefa: {
        ...tarefaAtualizada.toJSON(),
        EstadoAtual: tarefaAtualizada.TarefasEstados[0]?.Estado
      },
              opcoes: {
          prioridades: await Prioridade.findAll(),
          estados: await Estado.findAll()
        }
    });

  } catch (error) {
    await transaction.rollback();
    console.error("Erro ao atualizar tarefa:", error);
    res.status(500).json({
      error: "Erro ao atualizar tarefa",
      opcoes: {
        prioridades: await Prioridade.findAll(),
        estados: await Estado.findAll()
      }
    });
  }
};

// Controlador para deletar tarefa
exports.deletarTarefa = async (req, res) => {
  const transaction = await Tarefa.sequelize.transaction();
  try {
    const { id } = req.params;

    // Verifique se a tarefa existe
    const tarefa = await Tarefa.findByPk(id, {
      include: [
        {
          model: TarefasEstado,
          as: 'TarefasEstados'
        },
        {
          model: Tarefa,
          as: 'SubTarefas',
          include: [
            {
              model: TarefasEstado,
              as: 'TarefasEstados'
            }
          ]
        }
      ],
      transaction
    });

    if (!tarefa) {
      await transaction.rollback();
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }
    if (tarefa.idusuario !== req.usuario.id) {
      await transaction.rollback();
      return res.status(403).json({ error: "Sem permissão para excluir esta tarefa." });
    }

    // Exclui os estados relacionados às subtarefas
    for (const subTarefa of tarefa.SubTarefas) {
      await TarefasEstado.destroy({ where: { idtarefa: subTarefa.id }, transaction });
    }

    // Exclui as subtarefas
    await Tarefa.destroy({ where: { idmae: id }, transaction });

    // Exclui os estados relacionados à tarefa principal
    await TarefasEstado.destroy({ where: { idtarefa: id }, transaction });

    // Exclui a tarefa principal
    await Tarefa.destroy({ where: { id }, transaction });

    await transaction.commit();

    res.status(200).json({ message: "Tarefa excluída com sucesso." });
  } catch (error) {
    await transaction.rollback();
    console.error("Erro ao excluir tarefa:", error);
    res.status(500).json({ error: "Erro ao excluir tarefa." });
  }
};

// Exclusão de subtarefa
exports.deletarSubTarefa = async (req, res) => {
  const transaction = await Tarefa.sequelize.transaction();
  try {
    const { id } = req.params;

    // Verifica se a subtarefa existe
    const subtarefa = await Tarefa.findByPk(id, {
      include: [
        {
          model: TarefasEstado,
          as: 'TarefasEstados'
        }
      ],
      transaction
    });

    if (!subtarefa) {
      await transaction.rollback();
      return res.status(404).json({ error: "Subtarefa não encontrada" });
    }
    if (subtarefa.idusuario !== req.usuario.id) {
      await transaction.rollback();
      return res.status(403).json({ error: "Sem permissão para excluir esta subtarefa." });
    }

    // Verifica se é realmente uma subtarefa (tem idmae)
    if (!subtarefa.idmae) {
      await transaction.rollback();
      return res.status(400).json({ error: "Esta não é uma subtarefa válida" });
    }

    // Exclui os estados relacionados à subtarefa
    await TarefasEstado.destroy({ where: { idtarefa: id }, transaction });

    // Exclui a subtarefa
    await Tarefa.destroy({ where: { id }, transaction });

    await transaction.commit();

    res.status(200).json({ message: "Subtarefa excluída com sucesso" });

  } catch (error) {
    await transaction.rollback();
    console.error("Erro ao excluir subtarefa:", error);
    res.status(500).json({
      error: "Erro interno ao excluir subtarefa"
    });
  }
};
