import mongoose from "mongoose"

export const connectDB =async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(conn.connection.host);
        console.log(`Database name: ${conn.connection.name}`);
        
    }
    catch(error){
        console.log("error",error);
        
    }
}