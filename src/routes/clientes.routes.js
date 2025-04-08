import {Router} from "express";
import { methodHTTP as clientesController} from "../controllers/clientes.controllers.js";

const router = Router();

router.get("/", clientesController.getClientes);

export default router;