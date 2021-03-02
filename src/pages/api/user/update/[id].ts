import { NowRequest, NowResponse } from '@vercel/node'
import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../show/[id]'

interface IUsers {
  currentExperience: number
  challengesCompleted: number
  level: number
}

export default async (req: NowRequest, res: NowResponse) => {
  const {
    query: { id }
  } = req
  const { currentExperience, challengesCompleted, level } = req.body
  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('users')

  const user = (await collection.findOne({
    _id: new ObjectId(String(id))
  })) as IUsers

  if (!user) {
    return res.status(400).json({ error: `User with id: ${id} not found` })
  }

  const data = {
    currentExperience: currentExperience || user.currentExperience,
    challengesCompleted: challengesCompleted || user.challengesCompleted,
    level: level || user.level
  }
  await collection.updateOne(
    { _id: new ObjectId(String(id)) },
    {
      $set: data
    }
  )
  return res.status(201).json({
    ok: 'User updated with successfully'
  })
}
