import express from "express"
import { login } from "../controllers/authCn.js";
const userRoute=express.Router();
userRoute.route('/').post(login)




export default userRoute