import mongoose from "mongoose";

 export const connectDB = async () =>{
   
     await mongoose.connect('mongodb+srv://rahul:bN7Kn6Q4W1WTC9hx@cluster0.a4glm.mongodb.net/food').then(()=>console.log("DB Connected"));
    }
    