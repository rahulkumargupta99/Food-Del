import userModel from "../models/userModel.js";

// Add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData || {}; // Ensure cartData is initialized

        // Add or increase the quantity of the item in the cart
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        // Update the user cart in the database
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added to cart." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding to cart.", error: error.message });
    }
};

// Remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData || {}; // Ensure cartData is initialized

        // Decrease the quantity of the item in the cart
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;

            // Optionally, remove item if quantity reaches 0
            if (cartData[req.body.itemId] === 0) {
                delete cartData[req.body.itemId]; // Remove item if quantity is 0
            }
        }

        // Update the user cart in the database
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Removed from cart." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing from cart.", error: error.message });
    }
};

// Fetch user cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.params.userId);
        let cartData = userData.cartData || {}; // Ensure cartData is initialized
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching cart data.", error: error.message });
    }
};

export { addToCart, removeFromCart, getCart };
