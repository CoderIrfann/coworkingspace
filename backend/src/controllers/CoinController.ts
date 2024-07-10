import { Request, Response } from "express";
import { CoinPurchaseModel } from "../models/coin.model";

// Create a coin purchase
export const createCoinPurchase = async (req: Request, res: Response) => {
  const { user, amount, paymentMethod } = req.body;
  try {
    const newCoinPurchase = new CoinPurchaseModel({
      user,
      amount,
      paymentMethod,
      status: "pending",
    });

    const coinPurchase = await newCoinPurchase.save();
    res.status(201).json(coinPurchase);
  } catch (error) {
    res.status(500).json({ message: "Error creating coin purchase", error });
  }
};

// Get all coin purchases
export const getAllCoinPurchases = async (req: Request, res: Response) => {
  try {
    const coinPurchases = await CoinPurchaseModel.find().populate("user");
    res.status(200).json(coinPurchases);
  } catch (error) {
    res.status(500).json({ message: "Error fetching coin purchases", error });
  }
};

// Get coin purchase by user ID
export const getCoinPurchaseByUserId = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const coinPurchases = await CoinPurchaseModel.find({ user: userId }).populate("user");
    if (!coinPurchases) {
      return res.status(404).json({ message: "Coin purchases not found" });
    }
    res.status(200).json(coinPurchases);
  } catch (error) {
    res.status(500).json({ message: "Error fetching coin purchases by user ID", error });
  }
};

// Update coin purchase status
export const updateCoinPurchaseStatus = async (req: Request, res: Response) => {
  const purchaseId = req.params.id;
  const { status } = req.body;
  try {
    const updatedCoinPurchase = await CoinPurchaseModel.findByIdAndUpdate(
      purchaseId,
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedCoinPurchase) {
      return res.status(404).json({ message: "Coin purchase not found" });
    }

    res.status(200).json(updatedCoinPurchase);
  } catch (error) {
    res.status(500).json({ message: "Error updating coin purchase status", error });
  }
};

// Delete a coin purchase
export const deleteCoinPurchase = async (req: Request, res: Response) => {
  const purchaseId = req.params.id;
  try {
    const deletedCoinPurchase = await CoinPurchaseModel.findByIdAndDelete(purchaseId);
    if (!deletedCoinPurchase) {
      return res.status(404).json({ message: "Coin purchase not found" });
    }
    res.status(200).json({ message: "Coin purchase deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting coin purchase", error });
  }
};
