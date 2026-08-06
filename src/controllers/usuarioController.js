import usuarioModel from "../models/usuarioModel.js";

const criarUsuario = async (req, res) => {
  try {
    const { nome, idade } = req.body;

    if (!nome || idade === undefined) {
      return res.status(400).json({
        erro: "Nome e idade são obrigatórios."
      });
    }

    await usuarioModel.criarUsuario(nome, idade);

    res.status(201).json({
      mensagem: "Usuário criado com sucesso."
    });

  } catch (erro) {
    res.status(500).json({
      erro: "Erro interno do servidor."
    });
  }
};

const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioModel.listarUsuarios();

    res.json(usuarios);
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: erro.message,
    });
  }
};

export default {
  criarUsuario,
  listarUsuarios
};
