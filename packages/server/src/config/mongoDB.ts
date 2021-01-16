import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGO_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  socketTimeoutMS: 30000,
  keepAlive: true,
  poolSize: 50,
  autoIndex: false,
  // retryWrites: false,
}

const {MONGO_USERNAME} = process.env
const {MONGO_PASSWORD} = process.env
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'test'
const MONGO_HOST = process.env.MONGO_URL || 'localhost:27017'

const mongoConfig = {
  host: MONGO_HOST,
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  dbName: MONGO_DB_NAME,
  options: MONGO_OPTIONS,
  uri: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.ppwsc.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`,
}

console.log(mongoConfig.uri)

const connectDB = async () => {
  try {
    await mongoose.connect(mongoConfig.uri, mongoConfig.options)

    console.info(`Connected to MongoDB`)
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

export default connectDB
