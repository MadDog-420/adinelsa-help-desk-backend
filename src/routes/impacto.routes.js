import {Router } from "express"
import { getImpacto } from "../controllers/impacto.controller"
const router=Router()

router.get('/impacto',getImpacto)

export default router