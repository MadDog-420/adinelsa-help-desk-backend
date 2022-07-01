import {Router } from "express"
import { getEstadoUsuario } from "../controllers/estado_usuario.controller"
const router=Router()

router.get('/estadoUsuario',getEstadoUsuario)

export default router
