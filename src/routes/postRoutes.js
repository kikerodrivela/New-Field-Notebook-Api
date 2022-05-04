import { Router } from "express";
import {
  createAlmacen,
  createMaquinaria,
  createPersonal,
  createProductos,
  createParcelas,
  createDatos,
  createActividades,
} from "../controllers/postControllers.js";

const router = Router();

router.post("/almacen", createAlmacen);
router.post("/maquinaria", createMaquinaria);
router.post("/personal", createPersonal);
router.post("/productos", createProductos);
router.post("/parcelas", createParcelas);
router.post("/datos", createDatos);
router.post("/actividades", createActividades);

export default router;
