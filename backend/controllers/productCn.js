import Product from "../models/productModdle.js"
export const getAllProducts = async (req, res, next) => {
    const products = await Product.find()
    res.status(200).json({ success: true, data: products })

}

export const getProductByCategory = async (req, res) => {
    const { category } = req.body
    const products = await Product.find({ category: category })
    res.status(200).json({ success: true, data: products })


}