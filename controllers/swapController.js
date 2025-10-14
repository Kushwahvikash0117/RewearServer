import Swap from "../models/Swap.js";
import Item from "../models/Item.js";

export const createSwapRequest = async (req, res) => {
  try {
    const { offeredItemId, requestedItemId } = req.body;

    const swap = await Swap.create({
      offeredItem: offeredItemId,
      requestedItem: requestedItemId,
      status: "pending",
    });

    res.status(201).json(swap);
  } catch (error) {
    console.error("Swap request error:", error);
    res.status(500).json({ message: "Failed to create swap request" });
  }
};

export const respondToSwap = async (req, res) => {
  try {
    const { swapId, action } = req.body;

    const swap = await Swap.findById(swapId);
    if (!swap) return res.status(404).json({ message: "Swap not found" });

    swap.status = action === "accept" ? "accepted" : "rejected";
    await swap.save();

    res.json({ message: `Swap ${swap.status}` });
  } catch (error) {
    console.error("Swap response error:", error);
    res.status(500).json({ message: "Failed to respond to swap" });
  }
};

export const getAllSwaps = async (req, res) => {
  try {
    const swaps = await Swap.find().populate("offeredItem requestedItem");
    res.status(200).json(swaps);
  } catch (error) {
    console.error("Error fetching swaps:", error);
    res.status(500).json({ message: "Failed to fetch swaps" });
  }
};
