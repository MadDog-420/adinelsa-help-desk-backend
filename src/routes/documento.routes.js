import {Router } from "express"
import { getDocumento } from "../controllers/documento.controller"
const router=Router()

router.get('/documento',getDocumento)

export default router
