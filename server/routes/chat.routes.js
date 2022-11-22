import express from "express";

import { agregarChat,obtenerChats } from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/all", obtenerChats);
router.post("/add", agregarChat);

export default router;