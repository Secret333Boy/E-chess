import app from './app';
import http from 'http';
import { Server } from 'ws';
import GameService from './services/GameService';
import Game from './models/Game';

const port = process.env.PORT || 5000;
const server = http.createServer(app).listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const wss = new Server({ server });
const gameService = new GameService();
wss.on('connection', async (ws) => {
  console.log('Client connected');
  let game: Game = await gameService.createGame();
  game.playerWhite = ws;
  ws.onmessage = async (event) => {
    const payload = JSON.parse(event.data.toString());
    console.log(payload);
    if (payload.type === 'request') {
      ws.send(JSON.stringify({ type: 'gameId', id: game.id }));
    }

    if (payload.type === 'verify') {
      const foundGame = await gameService.getGame(payload.gameId);
      const isVerified =
        foundGame && !foundGame.ready && foundGame.id !== game.id;
      if (isVerified) {
        gameService.removeGame(game.id);
        game = foundGame;
        game.playerBlack = ws;
        game.playerWhite?.send(
          JSON.stringify({ type: 'verified', id: game.id })
        );
      }
      ws.send(
        JSON.stringify({
          type: isVerified ? 'verified' : 'rejected',
          id: isVerified ? game.id : null,
        })
      );
    }
  };

  ws.onclose = () => {
    console.log('Client disconnected');
    gameService.removeGame(game.id);
  };
});
