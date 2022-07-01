import {Router } from "express"
import { getDistrito } from "../controllers/distrito.controller"
const router=Router()

router.get('/distrito',getDistrito)

export default router
