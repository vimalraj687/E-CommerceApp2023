import mongoose from 'mongoose';
const  connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongo db Database ${conn.connection.host}`);
    }catch(error){  
        console.log(`Error in mongo db ${error}`);
    }
};
export default connectDB;  