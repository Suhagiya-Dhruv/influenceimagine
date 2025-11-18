import express from "express";
import { sendInquiry } from "../controllers/contactController.js";

const router = express.Router();

router.post("/send", sendInquiry);

export default router;
