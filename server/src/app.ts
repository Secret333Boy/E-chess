import express from 'express';
import path from 'path';

const app = express();

app.disable('x-powered-by');

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../../client/build')));

app.get('*', (_req, res) => {
  res.status(404).end();
});

export default app;
