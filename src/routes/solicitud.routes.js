import { request, Router } from "express";
import {
 getSolicitud, addNewSolicitud,getSolicitudById,updateSolicitudById
} from "../controllers/solicitud.controller";


const router = Router();
router.get("/solicitud",getSolicitud);
router.post("/solicitud", addNewSolicitud);
router.get("/solicitud/:id",getSolicitudById);
router.put("/solicitud/:id",updateSolicitudById);

export default router;