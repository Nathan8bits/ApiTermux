import usuarioModel from "../models/usuarioModel.js";

const criarUsuario = async (req, res) => {
  try {
    const { nome, idade } = req.body;

    if (!nome || idade === undefined) {
      return res.status(400).json({
        erro: "Nome e idade são obrigatórios.",
      });
    }

    await usuarioModel.criarUsuario(nome, idade);

    res.status(201).json({
      mensagem: "Usuário criado com sucesso.",
    });
  } catch (erro) {
    res.status(500).json({
      erro: "Erro interno do servidor.",
    });
  }
};


const deletarUsuario = async (req, res) => {
  try {
    const id = req.params.id;

    if (id === undefined) {
      return res.status(400).json({
        erro: "id é obrigatório",
      });
    }

    const usuarioId = await usuarioModel.buscarUsuarioId(id);

    if (usuarioId.length === 0) {
      return res.status(404).json({
        erro: "Esse usuário não existe",
      });
    }

    await usuarioModel.deletarUsuario(id);

    res.status(200).json({
      mensagem: "Usuário deletado com sucesso",
    });
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro interno do servidor",
    });
  }
};

const atualizarUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const { nome, idade } = req.body;

    if (!nome || idade === undefined) {
      return res.status(400).json({
        erro: "Nome e idade são obrigatórios",
      });
    }

    const usuario = await usuarioModel.buscarUsuarioId(id);

    if (usuario.length === 0) {
      return res.status(404).json({
        erro: "Esse usuário não existe",
      });
    }

    await usuarioModel.atualizarUsuario(id, nome, idade);

    res.status(200).json({
      mensagem: "Usuário atualizado com sucesso",
    });
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro interno do servidor",
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
      erro: "erro internodo servidor",
    });
  }
};

const buscarUsuarioId = async (req, res) => {
  console.log("Controller novo executou");
  console.log(req.params.id);
  try {
    const id = req.params.id;
    const usuario = await usuarioModel.buscarUsuarioId(id);

    res.json(usuario);
  } catch (erro) {
    console.log(erro);

    res.status(500).json({
      erro: erro.message,
    });
  }
};

export default {
  criarUsuario,
  deletarUsuario,
  atualizarUsuario,
  listarUsuarios,
  buscarUsuarioId,
};
