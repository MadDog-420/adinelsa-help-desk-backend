import {Router } from "express"
import{getEstadoSolicitud}  from "../controllers/estadosolicitud.controller"
const router=Router()

router.get('/estadoSolicitud',getEstadoSolicitud)

export default router
