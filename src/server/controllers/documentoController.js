const { Documento, Tarefa } = require('../models');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 8192 * 8192 // Limite de 10MB
  }
});

class DocumentoController {
  // Upload de arquivo para uma tarefa
  static async uploadDocumento(req, res) {
    try {
      upload.single('documento')(req, res, async (err) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: 'Erro no upload do arquivo',
            error: err.message
          });
        }

        if (!req.file) {
          return res.status(400).json({
            success: false,
            message: 'Nenhum arquivo foi enviado'
          });
        }

        const { idtarefa, idusuario } = req.body;

        if (!idtarefa || !idusuario) {
          return res.status(400).json({
            success: false,
            message: 'ID da tarefa e ID do usuário são obrigatórios'
          });
        }

        // Verifica se a tarefa existe
        const tarefa = await Tarefa.findOne({
          where: { id: idtarefa, idusuario: idusuario }
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
        message: 'Erro interno do servidor',
        error: error.message
      });
    }
  }

  // Obter documentos de uma tarefa
  static async getDocumentosTarefa(req, res) {
    try {
      const { idtarefa, idusuario } = req.params;

      const documentos = await Documento.findAll({
        where: {
          idtarefa: parseInt(idtarefa),
          idusuario: parseInt(idusuario)
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
        message: 'Erro interno do servidor',
        error: error.message
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
        message: 'Erro interno do servidor',
        error: error.message
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
        message: 'Erro interno do servidor',
        error: error.message
      });
    }
  }
}

module.exports = DocumentoController;
