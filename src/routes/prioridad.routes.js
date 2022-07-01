import {Router } from "express"
import { getPrioridad } from "../controllers/prioridad.controller"
const router=Router()

router.get('/prioridad',getPrioridad)

export default router