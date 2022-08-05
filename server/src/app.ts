import express from 'express';
import path from 'path';
import errorMiddleware from './middlewares/errorMiddleware';
import router from './routes';

const app = express();

app.disable('x-powered-by');

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.use('/api', router);
app.use(errorMiddleware);

app.get('*', (_req, res) => {
  res.status(404).end();
});

export default app;
