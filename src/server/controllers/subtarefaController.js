const { Tarefa } = require('../models');

exports.criarSubtarefa = async (req, res) => {
  try {
    const { idmae } = req.params;
    const { titulo, descricao, idprioridade, dthrinicio, dthrfim } = req.body;
    const tarefaMae = await Tarefa.findByPk(idmae);
    if (!tarefaMae) {
      return res.status(404).json({ error: "Tarefa mãe não encontrada." });
    }
    if (tarefaMae.idusuario !== req.usuario.id) {
      return res.status(403).json({ error: "Sem permissão para criar subtarefa nesta tarefa." });
    }
    const subtarefa = await Tarefa.create({
      titulo,
      descricao,
      idprioridade,
      dthrinicio: dthrinicio ? new Date(dthrinicio) : null,
      dthrfim: dthrfim ? new Date(dthrfim) : null,
      idusuario: tarefaMae.idusuario,
      idmae: tarefaMae.id,
    });
    res.status(201).json({ message: "Subtarefa criada com sucesso.", subtarefa });
  } catch (error) {
    console.error("Erro ao criar subtarefa:", error);
    res.status(500).json({ error: "Erro ao criar subtarefa." });
  }
};

exports.atualizarSubtarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descricao, idprioridade, idestado, dthrfim } = req.body;
    const subtarefa = await Tarefa.findByPk(id);
    if (!subtarefa) {
      return res.status(404).json({ error: 'Subtarefa não encontrada.' });
    }
    if (subtarefa.idusuario !== req.usuario.id) {
      return res.status(403).json({ error: 'Sem permissão para atualizar esta subtarefa.' });
    }
    await subtarefa.update({
      titulo,
      descricao,
      idprioridade,
      idestado,
      dthrfim: dthrfim ? new Date(dthrfim) : subtarefa.dthrfim,
    });
    res.status(200).json({ message: 'Subtarefa atualizada com sucesso!', subtarefa });
  } catch (error) {
    console.error('Erro ao atualizar subtarefa:', error);
    res.status(500).json({ error: 'Erro ao atualizar subtarefa.' });
  }
};
