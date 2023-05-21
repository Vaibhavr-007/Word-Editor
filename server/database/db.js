import mongoose from "mongoose";
const Connection=async(username ,password)=>{
    const URL= `mongodb://${username}:${password}@ac-c30vuzd-shard-00-00.cavgrkt.mongodb.net:27017,ac-c30vuzd-shard-00-01.cavgrkt.mongodb.net:27017,ac-c30vuzd-shard-00-02.cavgrkt.mongodb.net:27017/?ssl=true&replicaSet=atlas-114kwm-shard-0&authSource=admin&retryWrites=true&w=majority`
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