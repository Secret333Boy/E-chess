import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.get('*', (_req, res) => {
  res.status(404).end();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
