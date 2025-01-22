import express from "express";
import { addResumeData } from "../controllers/resumeControllers.js";
import {verifyToken} from "../controllers/authController.js"
const router = express.Router();

// Post Method
router.post("/resume_updates",addResumeData);




export default router;
