import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";
const cartRouter = express.Router();

// Route to add item to cart
cartRouter.post("/add",authMiddleware, addToCart);

// Route to remove item from cart
cartRouter.post("/remove",authMiddleware, removeFromCart);

// Route to get the cart details
cartRouter.post("/get",authMiddleware, getCart);

export default cartRouter;
