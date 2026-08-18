import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = Router();

router.post("/usuarios", usuarioController.criarUsuario);
router.get("/usuarios", usuarioController.listarUsuarios);
router.get("/usuarios/:id", usuarioController.buscarUsuarioId);
router.delete("/usuarios/:id", usuarioController.deletarUsuario)
router.put("/usuarios/:id", usuarioController.atualizarUsuario);


export default router;



//TESTANTO AS ROSTAS
//curl -X POST http://localhost:3000/usuarios -H "Content-Type: application/json" -d '{"nome":"Joao","idade":25}'
//
//curl http://localhost:3000/usuarios
//
//curl http://localhost:3000/usuarios/1
//
//curl -X PUT http://localhost:3000/usuarios/1 -H "Content-Type: application/json" -d '{"nome":"Joao Atualizado","idade":26}'
//
//curl -X DELETE http://localhost:3000/usuarios/1/
