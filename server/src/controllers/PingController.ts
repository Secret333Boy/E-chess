import { Request, Response } from 'express';
import PingService from '../services/PingService';

const pingService = new PingService();
export default class PingController {
  async ping(_req: Request, res: Response) {
    res.status(200).json(await pingService.ping());
  }
}
