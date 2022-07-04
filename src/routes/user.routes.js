import { Router } from "express";
import {
  getUserByLogin, addNewUser, getUserById,getUsuarios
} from "../controllers/user.controller";


const router = Router();
router.post("/login", getUserByLogin);
router.post("/usuario", addNewUser);
router.get("/usuario/:id", getUserById);
router.get("/usuario",getUsuarios)
export default router;