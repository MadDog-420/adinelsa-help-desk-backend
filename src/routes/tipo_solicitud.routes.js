import {Router } from "express"
import { getTipoSolicitud } from "../controllers/tipo_solicitud.controller"
const router=Router()

router.get('/tipoSolicitud',getTipoSolicitud)

export default router
