import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  const message = [{ body: new Date().toString() }];
  res.status(200).json(message);
};
export default handler;
