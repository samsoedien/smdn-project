import { RequestHandler } from 'express'
import { validationResult } from 'express-validator'
import ProductModel from '../models/Product.model'

import UserModel from '../models/User.model'

export const getUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await UserModel.find()
    return res.status(200).json({ message: 'success', data: users, count: users.length })
  } catch (err) {
    return next(err)
  }
}
export const getUserById: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id)

    if (!user) return res.status(400).json({ message: 'Resource not found' })

    return res.status(200).json({ message: 'success', data: user })
  } catch (err) {
    return next(err)
  }
}

export const postUser: RequestHandler = async (req, res, next) => {
  try {
    console.log(req.body)

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    const user = await UserModel.create(req.body)

    return res.status(201).json({ message: 'success', data: user })
  } catch (err) {
    return next(err)
  }
}
export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const user = UserModel.findById(req.params.id)

    if (!user) return res.status(400).json({ message: 'Resource not found' })

    const result = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    return res.status(200).json({ message: 'Success', data: result })
  } catch (err) {
    return next(err)
  }
}
export const deleteUser: RequestHandler = async (req, res, next) => {
  let user = UserModel.findById(req.params.id)

  if (!user) return res.status(400).json({ message: 'Resource not found' })

  user = await ProductModel.remove()

  return res.status(204).json({ message: 'success' })
}
