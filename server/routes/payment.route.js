import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { createOrder } from "../controllers/payment.controller.js"
import { verifyPayment } from "../controllers/payment.controller.js";



const paymentRouter = express.Router()

paymentRouter.post("/order",isAuth,createOrder);
paymentRouter.post("/verify",isAuth,verifyPayment);
export default paymentRouter