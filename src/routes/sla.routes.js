import {Router } from "express"
import { getSLA } from "../controllers/sla.controller"
const router=Router()

router.get('/SLA',getSLA)

export default router