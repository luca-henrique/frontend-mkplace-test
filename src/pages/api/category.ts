import type {NextApiRequest, NextApiResponse} from 'next';

import {cors, runMiddleware} from './cors';

import {categories} from '../../mock/category';

type Data = {
  id: number;
  title: string;
}[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | undefined>,
) {
  await runMiddleware(req, res, cors);
  if (req.method === 'GET') {
    res.status(200).json(categories);
  } else {
    res.status(400).json(undefined);
  }
}
