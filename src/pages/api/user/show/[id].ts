/* eslint-disable node/no-deprecated-api */
import { NowRequest, NowResponse } from '@vercel/node'
import { ObjectId, MongoClient, Db } from 'mongodb'

import url from 'url'

let cachedDb: Db = null

export const connectToDatabase = async (uri: string) => {
  if (cachedDb) return cachedDb
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const dbName = url.parse(uri).pathname.substr(1)
  const db = client.db(dbName)

  cachedDb = db

  return db
}

export default async (req: NowRequest, res: NowResponse) => {
  const {
    query: { id }
  } = req

  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('users')
  const user = await collection.findOne({ _id: new ObjectId(String(id)) })

  if (!user) return res.status(400).json({ error: 'user not found' })

  return res.status(201).json(user)
}
