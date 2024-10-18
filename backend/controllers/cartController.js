import userModel from "../models/userModel.js";

// Add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData; 

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added to cart." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding to cart." });
    }
};

// Remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData; // Ensure cartData is initialized

        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;

            // if (cartData[req.body.itemId] === 0) {
            //     delete cartData[req.body.itemId]; // Remove item if quantity is 0
            // }
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Removed From cart." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing from cart." });
    }
};

// Fetch user cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData; // Ensure cartData is initialized
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching cart data." });
    }
};

export { addToCart, removeFromCart, getCart };
