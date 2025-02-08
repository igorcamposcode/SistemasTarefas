const { Tarefa, TarefasEstado, Prioridade, Estado, Usuario, Documento } = require('../models');
const { Op } = require('sequelize');

// Métodos auxiliares otimizados
exports.listarPrioridades = async (req, res) => {
  try {
    const prioridades = await Prioridade.findAll({
      attributes: ['id', 'nome', 'cor', 'nivel'],
      order: [['nivel', 'ASC']]
    });
    res.status(200).json(prioridades);
  } catch (error) {
    console.error("Erro ao listar prioridades:", error);
    res.status(500).json({ error: "Erro ao buscar prioridades" });
  }
};

exports.listarEstados = async (req, res) => {
  try {
    const estados = await Estado.findAll({
      attributes: ['id', 'nome', 'icone', 'ordem'],
      order: [['ordem', 'ASC']]
    });
    res.status(200).json(estados);
  } catch (error) {
    console.error("Erro ao listar estados:", error);
    res.status(500).json({ error: "Erro ao buscar estados" });
  }
};

// Criação de tarefa com transação
exports.criarTarefa = async (req, res) => {
  const transaction = await Tarefa.sequelize.transaction();
  try {
    const { idusuario, idprioridade, titulo, descricao, idestado, idmae, dthrinicio, dthrfim } = req.body;

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
          as: 'HistoricoEstados',
          include: [{ model: Estado, as: 'Estado' }],
          order: [['dthrinicio', 'DESC']],
          limit: 1
        }
      ]
    });

    res.status(201).json({
      message: "Tarefa criada com sucesso!",
      tarefa: {
        ...tarefaCompleta.toJSON(),
        EstadoAtual: tarefaCompleta.HistoricoEstados[0]?.Estado
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
      details: error.message,
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
          model: Prioridade,
          as: 'Prioridade',
          attributes: ['id', 'nome', 'cor']
        },
        {
          model: TarefasEstado,
          as: 'HistoricoEstados',
          include: [{
            model: Estado,
            as: 'Estado',
            attributes: ['id', 'nome', 'icone']
          }],
          order: [['dthrinicio', 'DESC']],
          separate: true
        },
        {
          model: Tarefa,
          as: 'SubTarefas',
          include: [
            {
              model: Prioridade,
              as: 'Prioridade',
              attributes: ['id', 'nome', 'cor']
            },
            {
              model: TarefasEstado,
              as: 'HistoricoEstados',
              include: [{
                model: Estado,
                as: 'Estado',
                attributes: ['id', 'nome', 'icone']
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

    // Formatação otimizada
    const resposta = tarefas.map(tarefa => ({
      ...tarefa.toJSON(),
      EstadoAtual: tarefa.HistoricoEstados[0]?.Estado,
      SubTarefas: tarefa.SubTarefas.map(sub => ({
        ...sub.toJSON(),
        EstadoAtual: sub.HistoricoEstados[0]?.Estado
      }))
    }));

    res.status(200).json({
      tarefas: resposta,
      opcoes: {
        prioridades: await Prioridade.findAll(),
        estados: await Estado.findAll()
      }
    });

  } catch (error) {
    console.error("Erro ao carregar tarefas:", error);
    res.status(500).json({
      error: "Erro ao carregar tarefas",
      details: error.message,
      opcoes: {
        prioridades: await Prioridade.findAll(),
        estados: await Estado.findAll()
      }
    });
  }
};

// Atualização com controle de transação
exports.atualizarTarefa = async (req, res) => {
  const transaction = await Tarefa.sequelize.transaction();
  try {
    const { id } = req.params;
    const { idprioridade, titulo, descricao, idestado, dthrfim } = req.body;

    const tarefa = await Tarefa.findByPk(id, {
      include: [
        {
          model: TarefasEstado,
          as: 'HistoricoEstados',
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

    // Atualização principal
    await tarefa.update({
      idprioridade: idprioridade || tarefa.idprioridade,
      titulo: titulo || tarefa.titulo,
      descricao: descricao || tarefa.descricao,
      dthrfim: dthrfim ? new Date(dthrfim) : tarefa.dthrfim
    }, { transaction });

    // Controle de estado
    if (idestado && idestado !== tarefa.HistoricoEstados[0]?.idestado) {
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
          as: 'HistoricoEstados',
          include: [{ model: Estado, as: 'Estado' }],
          order: [['dthrinicio', 'DESC']],
          limit: 1
        }
      ]
    });

    res.status(200).json({
      message: "Tarefa atualizada com sucesso!",
      tarefa: {
        ...tarefaAtualizada.toJSON(),
        EstadoAtual: tarefaAtualizada.HistoricoEstados[0]?.Estado
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
      details: error.message,
      opcoes: {
        prioridades: await Prioridade.findAll(),
        estados: await Estado.findAll()
      }
    });
  }
};

// Exclui uma tarefa
exports.deletarTarefa = async (req, res) => {
  try {
    const { id } = req.params;

    // Exclui os estados relacionados à tarefa
    await TarefasEstado.destroy({ where: { idtarefa: id } });

    // Exclui as subtarefas relacionadas
    await Tarefa.destroy({ where: { idmae: id } });

    // Exclui a tarefa principal
    const result = await Tarefa.destroy({ where: { id } });

    if (result === 0) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    res.status(200).json({ message: "Tarefa excluída com sucesso." });
  } catch (error) {
    console.error("Erro ao excluir tarefa:", error);
    res.status(500).json({ error: "Erro ao excluir tarefa." });
  }
};
