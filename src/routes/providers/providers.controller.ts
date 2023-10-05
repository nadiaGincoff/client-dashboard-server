
import { getAllProviders } from '../../models/providers.model';
import { Request, Response } from 'express';

async function httpGetAllProviders(req: Request, res: Response) {
 return res.status(200).json(await getAllProviders())
}

export {
  httpGetAllProviders,
}