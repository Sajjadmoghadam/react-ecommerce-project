import app from "./app.js";
import { config } from "dotenv";
import mongoose from "mongoose";
config({path:'./.env'})
mongoose.connect(process.env.DATA_BASE).then(()=>console.log('DATA BASE IS CONNECTED'))













app.listen(process.env.PORT,()=>{
    console.log("SERVER RUN");
})