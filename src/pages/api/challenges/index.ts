import { NowRequest, NowResponse } from '@vercel/node'
import { connectToDatabase } from '../user/show/[id]'

export default async (req: NowRequest, res: NowResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.collection('challenges')
  const challenges = await collection.find().toArray()
  res.status(201).json(challenges)
}
