import mongoose, { Schema, Document } from 'mongoose'

// import { IProduct } from '@smdn-project/common'

interface IProduct extends Document {
  _id: string
  name: string
  description?: string
  createdAt: Date
  updatedAt: Date
}

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

const ProductModel = mongoose.model<IProduct>('Product', ProductSchema)

export default ProductModel
