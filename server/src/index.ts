import app from './app';
import http from 'http';
import { Server } from 'ws';

const port = process.env.PORT || 3000;
const server = http.createServer(app).listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log(ws);
});
