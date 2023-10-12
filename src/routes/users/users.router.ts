import express from 'express';
import { httpGetAllUsers } from './users.controller';

const usersRouter = express.Router();

usersRouter.get('/', httpGetAllUsers);

export { usersRouter }