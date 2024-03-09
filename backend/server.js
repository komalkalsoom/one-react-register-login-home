import express from 'express';
const app = express();
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();
import dbConnection from './config/db.js'
import morgan from 'morgan';
import authRouter from './routes/authRoute.js'
import cors from 'cors'

// database connection
dbConnection();
// middleware
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
app.use("/api/v1/auth",authRouter)
// server running port 
const PORT = process.env.PORT || 4000;



app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`.bgCyan)
})