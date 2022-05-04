import { Router } from "express";
import {
  deleteAlmacenbyID,
  deleteMaquinariabyID,
  deleteParcelabyID,
  deletePersonalbyID,
  deleteProductobyID,
  deleteDatosbyID,
  deleteActividadesbyID,
} from "../controllers/deleteControllers.js";

const router = Router();

router.delete("/almacen/:id", deleteAlmacenbyID);
router.delete("/maquinaria/:id", deleteMaquinariabyID);
router.delete("/parcelas/:id", deleteParcelabyID);
router.delete("/personal/:id", deletePersonalbyID);
router.delete("/productos/:id", deleteProductobyID);
router.delete("/datos/:id", deleteDatosbyID);
router.delete("/actividades/:id", deleteActividadesbyID);

export default router;
