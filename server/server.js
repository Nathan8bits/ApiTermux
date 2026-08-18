import usuarioRoutes from "./src/routes/usuarioRoutes.js";
import cors from "cors";
//const express = require("express");
import express from "express"


const app = express();

app.use(cors());

const usuarios = []

app.use(express.json()); //recebe o json e coloca tudo em req.body

app.get("/", (req, res) => {
  res.json({
    mensagem: "minha primeira API",
    autor: "Natan",
    version: "1.0",
  });
});

app.get("/sobre", (req, res) => {
  res.json({
    projeto: "minha api",
    linguagem: "javascript",
    framework: "expres",
  });
});

//essa eh uma rota dinamica. recupera o parametro passado na url
//usado quando queremos usar um recurso especifico
//app.get("/usuarios/:id", (req, res) => {
  //const id = req.params.id;

  //res.json({
   // mensagem: "Usuário encontrado.",
   // id: id,
  //});
//});

//usado quando queremos filtrar ou ordenar
// /buscar?nome=natan
app.get("/buscar", (req, res) => {
  res.json({
    //acessar query que nao existem retorna undefined
    pesquisa: req.query.nome,
  });
});

// curl -X POST http://localhost:3000/usuarios -H "Content-Type: application/json" -d '{"nome":"Natan","idade":20}'

app.use(usuarioRoutes);
/*
app.post("/usuarios", (req, res) => {
  usuarios.push(req.body)

  res.json({
    mensagem: "usuario salvo com sucesso",
    usuario: req.body,
  });
});
*/

app.listen(3000, () => {
  console.log("TESTE stats Servidor rodando em http://localhost:3000");
});
