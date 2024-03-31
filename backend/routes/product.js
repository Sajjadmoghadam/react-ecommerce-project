import express from "express"
import { getAllProducts, getProductByCategory } from "../controllers/productCn.js";
const productRoute=express.Router();
productRoute.route('/').get(getAllProducts).post(getProductByCategory)




export default productRoute