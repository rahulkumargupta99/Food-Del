import foodModel from "../models/foodModel.js";
import fs from 'fs'


const addFood = async (req, res) => {
     console.log('Request Body:', req.body); 
 
     let image_filename = req.file ? req.file.filename : 'default.jpg';
 
     if (!req.body.name || !req.body.description || !req.body.price || !req.body.category) {
         return res.status(400).json({ success: false, message: "All fields are required" });
     }
 
     const food = new foodModel({
         name: req.body.name,
         description: req.body.description,
         price: req.body.price,
         category: req.body.category,
         image: image_filename
     });
 
     try {
         await food.save();
         res.json({ success: true, message: "Food Added" });
     } catch (error) {
         console.error(error);
         res.status(500).json({ success: false, message: "Error adding food" });
     }
 };

 // all food list 
 const listFood = async (req,res) =>{
      try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
      } catch (error) {
        console.log(error);
        res.json({success:false,massage:"Error"})
      }
 }
 
// remove food item 
const removeFood = async (req, res)=>{
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, ()=>{})

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,massage:"Food Removed"})
  } catch (error) {
    console.log(error);
    res.json({success:false,massage:"Error"})
  }
}

 export { addFood, listFood, removeFood };