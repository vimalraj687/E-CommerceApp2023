import express from  "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRouts.js'
import categoryRoutes from './routes/categoryRoutes.js'
import cors from "cors";
import path from 'path';
import productRoutes from "./routes/productRoutes.js"
import { fileURLToPath } from "url";
// configure env
dotenv.config();
// database config
connectDB()

// esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// rest obect
const app = express();
// middle wares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, './client/build')))
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest api 
// app.get("/",(req, res)=>{
//     res.send("<h1>Welcome to E-Commerce Project</h1>");
// });
app.use("*", function(req, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})



// PORT
const PORT =process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log(`Server Running on ${process.env.DEV_mode} ${PORT}`)
}); 

