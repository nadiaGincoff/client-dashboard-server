
import { getAllUsers } from '../../models/users.model';
import { Request, Response } from 'express';

async function httpGetAllUsers(req: Request, res: Response) {
 return res.status(200).json(await getAllUsers())
}

export {
  httpGetAllUsers,
}