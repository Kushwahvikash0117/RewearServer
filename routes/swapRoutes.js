import express from "express";
import { createSwapRequest, respondToSwap, getAllSwaps } from "../controllers/swapController.js";

const router = express.Router();

// Create a swap request
router.post("/request", createSwapRequest);

// Respond to a swap (accept / reject)
router.post("/respond", respondToSwap);

// View all swaps
router.get("/", getAllSwaps);

export default router;
