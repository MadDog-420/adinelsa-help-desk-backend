import { Router } from "express";
import {
  getUserByLogin,
} from "../controllers/user.controller";

const router = Router();

router.post("/user", getUserByLogin);

export default router;