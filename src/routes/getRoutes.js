import { Router } from "express";
import {
  itsWorks,
  getPersonal,
  getMaquinaria,
  getProductos,
  getAlmacen,
  getParcelas,
  getPersonalCarnet,
  getParcelasbyID,
  getAlmacenbyID,
  getDatos,
  getActividades,
} from "../controllers/getControllers.js";

const router = Router();

router.get("/", itsWorks);
router.get("/personal", getPersonal);
router.get("/maquinaria", getMaquinaria);
router.get("/productos", getProductos);
router.get("/almacen", getAlmacen);
router.get("/parcelas", getParcelas);
router.get("/personal/:carnet", getPersonalCarnet);
router.get("/parcelas/:id", getParcelasbyID);
router.get("/almacen/:id", getAlmacenbyID);
router.get("/datos", getDatos);
router.get("/actividades", getActividades);

export default router;
