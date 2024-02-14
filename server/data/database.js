import mongoose from "mongoose";


export const connectDb = async()=>{


    try{
      await  mongoose.connect("mongodb+srv://krish:krish1009@cluster0.ccrejqz.mongodb.net/?retryWrites=true&w=majority")
      console.log("succesfully connected DB");
    }
    catch (error) {
        console.log("problem while connecting with DB: " , error);
    }
}