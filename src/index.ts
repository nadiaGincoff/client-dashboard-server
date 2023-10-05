import express from 'express';
import morgan from 'morgan';
import { api } from './routes/api';

const app = express();

app.use(morgan('dev')); // logger

app.use(express.json());

app.use('/v1', api);

const port = Number(process.env.PORT ?? 8080);
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});