import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import { api } from './routes/api';
const app = express();

app.use(morgan('dev')); // logger
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use('/v1', api);

const port = Number(process.env.PORT ?? 8080);

app.get('/secret', (req, res) => {
  return res.send(`the secret is that I love eat avocatos :)`)
})
app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});