import mongoose from "mongoose";

const swapSchema = new mongoose.Schema(
  {
    requester: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // jisne request bheji
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },     // jiska item hai
    requestedItem: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true }, // jis item pe swap request ki
    offeredItem: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },   // jo item wo badle me de raha hai
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Swap", swapSchema);
