import {Router } from "express"
import { getClasificacion } from "../controllers/clasificacion.controller"
const router=Router()

router.get('/clasificacion',getClasificacion)

export default router