import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();

  const activeToDos = await db
    .collection("ToDos")
    .find({ closed: true })
    .sort({ time: 1 })
    .toArray();

  res.status(200).json({ activeToDos });
}
