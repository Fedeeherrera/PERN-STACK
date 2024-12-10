import { Router } from 'express'
import { body } from 'express-validator'
import createProducts from './handlers/product'
import handleInputErrors from './middleware'

const router = Router()

router.get('/', (req, res) => {
  res.json('Desde GET')
})

router.post(
  '/',
  body('name').notEmpty().withMessage('El nombre del producto esta vacio'),
  body('price')
    .isNumeric()
    .withMessage('Valor no valido')
    .notEmpty()
    .withMessage('El precio del producto no puede ir vacio')
    .custom(value => value > 0)
    .withMessage('Precio no valido'),
  handleInputErrors,
  createProducts
)

router.put('/', (req, res) => {
  res.json('Desde PUT')
})

router.patch('/', (req, res) => {
  res.json('Desde PATCH')
})

router.delete('/', (req, res) => {
  res.json('Desde DELETE')
})

export default router
