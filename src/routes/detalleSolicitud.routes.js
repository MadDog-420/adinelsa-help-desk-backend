import { request, Router } from "express";
import {
  getDetalleSolicitudAdmin, getDetalleSolicitudByCode, addDetalleSolicitud, updateDetalleSolicitud
} from "../controllers/detalleSolicitud.controller";

const router = Router();
router.get("/detalleSolicitud", getDetalleSolicitudAdmin);
router.get("/detalleSolicitud/:id",getDetalleSolicitudByCode);
router.post("/detalleSolicitud", addDetalleSolicitud);
router.put("/detalleSolicitud/:id", updateDetalleSolicitud);

export default router;