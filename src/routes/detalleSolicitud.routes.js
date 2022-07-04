import { request, Router } from "express";
import {
  getDetalleSolicitudAdmin
} from "../controllers/detalleSolicitud.controller";


const router = Router();
router.get("/detalleSolicitud",getDetalleSolicitudAdmin);

export default router;