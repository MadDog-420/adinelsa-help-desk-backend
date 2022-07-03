import { Router } from "express";
import {
  getUserByLogin, addNewUser, getUserById
} from "../controllers/user.controller";


const router = Router();
router.post("/login", getUserByLogin);
router.post("/usuario", addNewUser);
router.get("/usuario/:id", getUserById);


export default router;