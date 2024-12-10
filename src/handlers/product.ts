import { Request, Response } from 'express'
import { check, validationResult } from 'express-validator'
import Product from '../models/Product.model'

const createProducts = async (req: Request, res: Response) => {

  await check('name')

  const product = await Product.create(req.body)
  res.json({data : product})
}

export default createProducts
