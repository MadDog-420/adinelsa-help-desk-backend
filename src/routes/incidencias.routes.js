import { Router } from "express";
import {
  getAllIncidencias,
} from "../controllers/incidencias.controller";

const router = Router();

router.get("/incidencias", getAllIncidencias);

export default router;