import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on('connected',()=>{
            console.log('MongoDB connected successfully');
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)  
    } catch(err){
        console.log("can non connected Database")
        console.log(err)
    }
   
}
export default connectDB;