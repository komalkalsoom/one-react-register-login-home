import mongoose  from "mongoose";
const dbConnection = async () => {
try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`db connected successfully ${conn.connection.host}`.bgGreen)
} catch (error) {
    console.log(`db connection faill ${error}`.bgRed)
    
}    
}

export default dbConnection;