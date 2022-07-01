import {Router } from "express"
import { getDepartamento } from "../controllers/departamentos.controller"
const router=Router()

router.get('/departamento',getDepartamento)

export default router
