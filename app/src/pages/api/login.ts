import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(401)
    .setHeader('WWW-Authenticate', 'Basic realm="Secure Area"')
    .send('Auth required');
}