import express from "express"
const productRoute=express.Router();
productRoute.route('/').get().post()




export default productRoute