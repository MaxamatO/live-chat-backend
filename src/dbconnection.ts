import mongoose from 'mongoose'
import 'dotenv/config'
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@chat-app-cluster.yxyfyzt.mongodb.net/?retryWrites=true&w=majority`
export const connectDB = async () => {
  try {
    await mongoose.connect(url)
    console.log('Connected')
  } catch (error) {
    console.log(error)
  }
}
