import { NowRequest, NowResponse } from '@vercel/node'
import { connectToDatabase } from '../user/show/[id]'

export default async (req: NowRequest, res: NowResponse) => {
  const { type, amount, description } = req.body
  if (type !== 'body' && type !== 'eye') {
    return res.status(400).json({
      error: 'Typeof challenge is diferent of type "body" or "eye" '
    })
  }

  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('challenges')

  const data = {
    type,
    description,
    amount,
    insertedAt: new Date()
  }

  await collection.insertOne(data)

  return res.status(201).json({
    ok: `Challenge with type ${data.type} inserted with successfully`,
    data
  })
}
