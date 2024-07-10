import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";
import {
  createCoinPurchase,
  getAllCoinPurchases,
  getCoinPurchaseByUserId,
  updateCoinPurchaseStatus,
  deleteCoinPurchase
} from "../controllers/CoinController";

const router = Router();

router.post("/", protect, createCoinPurchase);
router.get("/", protect, getAllCoinPurchases);
router.get("/:id", protect, getCoinPurchaseByUserId);
router.put("/:id", protect, updateCoinPurchaseStatus);
router.delete("/:id", protect, deleteCoinPurchase);

export default router;
