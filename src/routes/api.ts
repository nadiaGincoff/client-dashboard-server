import express from 'express';
import { providersRouter } from './providers/providers.router';

const api = express.Router();

api.use('/', providersRouter);

export { api }