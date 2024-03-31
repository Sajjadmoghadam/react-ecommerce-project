import mongoose from "mongoose";
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please provide a product name"]
    },
    Image:{
        type:String,
        require:[true, 'Image is required']
    },
    price:{
        type:Number,
        require:[true, 'Price is required'],
    },
    category:{
        type:String,
        require:[true, 'Category is required']
    }
})
const Product=mongoose.model("Product",ProductSchema);
export default Product