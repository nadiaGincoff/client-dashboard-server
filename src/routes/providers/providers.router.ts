import express from 'express';
import { httpGetAllProviders } from './providers.controller';

const providersRouter = express.Router();

providersRouter.get('/', httpGetAllProviders);

export { providersRouter }