import { Router } from "express";
import {
  getEstaIncidencias,
} from "../controllers/estadoIn.controller";

const router = Router();

router.get("/EstaIncidencias", getEstaIncidencias);

export default router;