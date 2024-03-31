import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    lastname:{
        type:String,
    },
    phonenumber:{
        type:Number,
        require:[true,'phone number is required'],
        unique:[true]
    },
    password:{
        type:String,
        require:[true,'phone number is required'],


    }
})
const User=mongoose.model("User",userSchema)
export default User