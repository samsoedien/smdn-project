import mongoose, { Schema, Document } from 'mongoose'

// import { IUser } from '@smdn-project/common'

interface IUser extends Document {
  _id: string
  firstName?: string
  lastName?: string
  userName: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password of minimum 6 characters'],
      min: 6,
    },
    role: {
      type: String,
      enum: ['provider', 'consumer'],
      default: 'consumer',
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  },
)

const UserModel = mongoose.model<IUser>('User', UserSchema)

export default UserModel
