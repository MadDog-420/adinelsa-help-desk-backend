import { request, Router } from "express";
import {
  getDetalleSolicitudAdmin, getDetalleSolicitudByCode, addDetalleSolicitud
} from "../controllers/detalleSolicitud.controller";

const router = Router();
router.get("/detalleSolicitud", getDetalleSolicitudAdmin);
router.get("/detalleSolicitud/:id",getDetalleSolicitudByCode);
router.post("/detalleSolicitud", addDetalleSolicitud);

export default router;