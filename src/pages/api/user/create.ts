/* eslint-disable node/no-deprecated-api */
import { NowRequest, NowResponse } from '@vercel/node'
import { connectToDatabase } from './show/[id]'
export default async (req: NowRequest, res: NowResponse) => {
  const { name, photo } = req.body
  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('users')

  const data = {
    name,
    photo,
    level: 1,
    currentExperience: 0,
    challengesCompleted: 0,
    insertedAt: new Date()
  }

  await collection.insertOne(data)
  return res.status(201).json({
    ok: 'User created with successfully',
    user: data
  })
}
