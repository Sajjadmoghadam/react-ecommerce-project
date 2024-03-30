import express from 'express'
import morgan from 'morgan'
import productRoute from './routes/product.js'
import userRoute from './routes/user.js'

const app = express()
app.use(express.json())
app.use(morgan('dev')) 




app,use('/products',productRoute)
app,use('/auth',userRoute)
app,use('*',(req,res)=>{

    res.status(404).json({message:'API address not found'})

})










export default app