const { Documento, Tarefa } = require('../models');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const EXTENSOES_PERMITIDAS = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.gif'];
const TIPOS_MIME_PERMITIDOS = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png', 'image/gif'];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname || '').toLowerCase() || '.bin';
    const safeExt = EXTENSOES_PERMITIDAS.includes(ext) ? ext : '.bin';
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'doc-' + uniqueSuffix + safeExt);
  }
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname || '').toLowerCase();
  if (!EXTENSOES_PERMITIDAS.includes(ext) || !TIPOS_MIME_PERMITIDOS.includes(file.mimetype)) {
    return cb(new Error('Tipo de arquivo não permitido. Use: PDF, DOC, DOCX, JPG, PNG ou GIF.'));
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter
});

class DocumentoController {
  // Upload de arquivo para uma tarefa
  static async uploadDocumento(req, res) {
    try {
      upload.single('documento')(req, res, async (err) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err.message || 'Erro no upload do arquivo'
          });
        }

        if (!req.file) {
          return res.status(400).json({
            success: false,
            message: 'Nenhum arquivo foi enviado'
          });
        }

        const { idtarefa } = req.body;
        const idusuario = req.usuario.id; // Sempre do token

        if (!idtarefa) {
          return res.status(400).json({
            success: false,
            message: 'ID da tarefa é obrigatório'
          });
        }

        // Verifica se a tarefa existe e pertence ao usuário
        const tarefa = await Tarefa.findOne({
          where: { id: idtarefa, idusuario }
        });

        if (!tarefa) {
          return res.status(404).json({
            success: false,
            message: 'Tarefa não encontrada'
          });
        }

        // Cria o registro do documento
        const documento = await Documento.create({
          idtarefa: parseInt(idtarefa),
          idusuario: parseInt(idusuario),
          nome: req.file.originalname,
          caminho: req.file.path,
          extensao: path.extname(req.file.originalname),
          tamanho: (req.file.size / 8192).toFixed(2) + ' KB' // Tamanho em KB
        });

        res.status(201).json({
          success: true,
          message: 'Documento anexado com sucesso',
          documento: {
            id: documento.id,
            nome: documento.nome,
            caminho: documento.caminho,
            extensao: documento.extensao,
            tamanho: documento.tamanho
          }
        });
      });
    } catch (error) {
      console.error('Erro ao fazer upload do documento:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
      });
    }
  }

  // Obter documentos de uma tarefa
  static async getDocumentosTarefa(req, res) {
    try {
      const { idtarefa } = req.params;
      const idusuario = req.usuario.id;

      // Verifica se a tarefa pertence ao usuário
      const tarefa = await Tarefa.findOne({ where: { id: idtarefa, idusuario } });
      if (!tarefa) {
        return res.status(403).json({
          success: false,
          message: 'Tarefa não encontrada ou sem permissão'
        });
      }

      const documentos = await Documento.findAll({
        where: {
          idtarefa: parseInt(idtarefa),
          idusuario
        },
        order: [['id', 'DESC']]
      });

      res.json({
        success: true,
        documentos: documentos
      });
    } catch (error) {
      console.error('Erro ao buscar documentos da tarefa:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
      });
    }
  }

  // Download de um documento
  static async downloadDocumento(req, res) {
    try {
      const { id } = req.params;

      const documento = await Documento.findByPk(id);
      if (!documento) {
        return res.status(404).json({
          success: false,
          message: 'Documento não encontrado'
        });
      }
      if (documento.idusuario !== req.usuario.id) {
        return res.status(403).json({
          success: false,
          message: 'Sem permissão para acessar este documento'
        });
      }

      // Verifica se o arquivo existe
      if (!fs.existsSync(documento.caminho)) {
        return res.status(404).json({
          success: false,
          message: 'Arquivo não encontrado no servidor'
        });
      }

      res.download(documento.caminho, documento.nome);
    } catch (error) {
      console.error('Erro ao fazer download do documento:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
      });
    }
  }

  // Excluir um documento
  static async excluirDocumento(req, res) {
    try {
      const { id } = req.params;

      const documento = await Documento.findByPk(id);
      if (!documento) {
        return res.status(404).json({
          success: false,
          message: 'Documento não encontrado'
        });
      }
      if (documento.idusuario !== req.usuario.id) {
        return res.status(403).json({
          success: false,
          message: 'Sem permissão para excluir este documento'
        });
      }

      // Remove o arquivo físico
      if (fs.existsSync(documento.caminho)) {
        fs.unlinkSync(documento.caminho);
      }

      // Remove o registro do banco
      await documento.destroy();

      res.json({
        success: true,
        message: 'Documento excluído com sucesso'
      });
    } catch (error) {
      console.error('Erro ao excluir documento:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
      });
    }
  }
}

module.exports = DocumentoController;
