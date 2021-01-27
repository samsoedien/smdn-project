import { RequestHandler } from 'express'
import { validationResult } from 'express-validator'

import ProductModel from '../models/Product.model'

export const getProducts: RequestHandler = async (req, res, next) => {
  try {
    const products = await ProductModel.find()
    return res.status(200).json({ message: 'success', data: products, count: products.length })
  } catch (err) {
    return next(err)
  }
}

export const getProductById: RequestHandler = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id)

    if (!product) return res.status(400).json({ message: 'Resource not found.' })

    return res.status(200).json({ message: 'success', data: product })
  } catch (err) {
    return next(err)
  }
}
export const postProduct: RequestHandler = async (req, res, next) => {
  try {
    console.log(req.body)

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    const product = await ProductModel.create(req.body)

    return res.status(201).json({ message: 'success', data: product })
  } catch (err) {
    return next(err)
  }
}
export const updateProduct: RequestHandler = async (req, res, next) => {
  try {
    const product = ProductModel.findById(req.params.id)

    if (!product) return res.status(400).json({ message: 'Resource not found.' })

    const result = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    return res.status(200).json({ message: 'success', data: result })
  } catch (err) {
    return next(err)
  }
}
export const deleteProduct: RequestHandler = async (req, res, next) => {
  try {
    let product = ProductModel.findById(req.params.id)

    if (!product) return res.status(400).json({ message: 'Resource not found.' })

    product = await ProductModel.remove()

    return res.status(204).json({ message: 'success' })
  } catch (err) {
    return next(err)
  }
}
