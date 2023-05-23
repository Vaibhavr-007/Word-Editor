import mongoose from "mongoose";
const Connection=async(URL)=>{
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log("Database connected successfully");
    }
    catch(error){
        console.log(error);
        console.log("Error while connectiong with the database");
    }
}
export default Connection;