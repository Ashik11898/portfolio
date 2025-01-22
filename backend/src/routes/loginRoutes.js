import express from "express";
import { handleLogin, addingEmployes, verifyRefreshToken, } from "../controllers/authController.js";

const router = express.Router();

// Post Method
router.post("/login", handleLogin);
router.post("/register", addingEmployes);
router.get("/refresh", verifyRefreshToken);




export default router;
