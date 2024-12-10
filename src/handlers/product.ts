import { Request, Response } from 'express'
import Product from '../models/Product.model'

const createProducts = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body)
    res.json({ data: product })
  } catch (error) {
    console.log(error)
  }
}

export default createProducts
