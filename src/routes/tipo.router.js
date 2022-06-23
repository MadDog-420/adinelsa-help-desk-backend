import { Router } from "express";
import {
  getTipoIncidencia,
} from "../controllers/tipo.controller";

const router = Router();

router.get("/tipoIncidencia", getTipoIncidencia);

export default router;