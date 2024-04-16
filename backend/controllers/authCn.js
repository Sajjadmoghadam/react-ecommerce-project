import User from "../models/userModdle.js";
import  jwt  from "jsonwebtoken";
import bcryptjs from 'bcryptjs'

export const login = async(req,res)=>{
    const  {phoneNumber,password}= req.body;
    try{
        if(!phoneNumber || !password ){
            return res.status(400).json({message:"please provide username and password"});
        }
        const user = await User.findOne({phonenumber: phoneNumber})
        if(!user){
            const hashedPassword = bcryptjs.hashSync(password,10);
            const newUser=await User.create({phonenumber:phoneNumber,password:hashedPassword});
            const token = jwt.sign({id:newUser._id},"moghadam")
            const {password:hashPass,...userOthers}=newUser._doc

            return res.status(201).json({
                data:{
                    token,
                    user:userOthers
                },message:'sign in successfully'
            })

        }else{
            const validatedPassword=bcryptjs.compareSync(password,user.password);
            if (!validatedPassword) {
                return res.status(401).json({
                    message:'username or password incorrect'
                })}
                const {password:hashPass,...userOthers}=user._doc
                const  token=jwt.sign({id:user._id},"moghadam")
                return res.status(200).json({
                 data:{
                     token,
                     user:userOthers
                 },message:'sign in successfully'
                })
        }
    }catch(err){
        console.log(err)
        return res.status(401).send({message: err.message})
    }
}