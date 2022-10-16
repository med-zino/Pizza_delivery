import dbConnect from '../../lib/mongo'

export default async function handler(req, res) {
  dbConnect()
  const { method } = req

  if (method === 'GET') {
  }

  if (method === 'POST') {
    try {
    } catch (err) {
      res.status(500).json(err)
    }
  }
}
