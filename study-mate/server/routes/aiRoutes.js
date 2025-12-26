import express from "express";
import { chatWithAI, summarizeNote } from "../controllers/aiController.js";

const router = express.Router();

router.post("/chat", chatWithAI);
router.post("/summarize", summarizeNote);

export default router;
