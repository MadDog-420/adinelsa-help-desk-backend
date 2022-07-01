import {Router } from "express"
import { getProvincia } from "../controllers/provincia.controller"
const router=Router()

router.get('/provincia',getProvincia)

export default router
