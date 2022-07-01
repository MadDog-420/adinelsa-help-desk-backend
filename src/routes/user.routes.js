import { Router } from "express";
import {
  getUserByLogin,addNewUser
} from "../controllers/user.controller";


const router = Router();
router.get("/usuario", getUserByLogin);
router.post("/usuario", addNewUser);


export default router;