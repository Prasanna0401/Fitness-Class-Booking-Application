import express from "express";
import paymentController from "../controllers/paymentController.js";
const router = express.Router();

router.post("/create-payment/:classId", paymentController.createPayment);
router.post("/payment-success", paymentController.paymentAndBookingSuccess);

export default router;