import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = Router();

router.post("/usuarios", usuarioController.criarUsuario);
router.get("/usuarios", usuarioController.listarUsuarios);


export default router;
