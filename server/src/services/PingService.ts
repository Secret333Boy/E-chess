import PingResponse from '../models/interfaces/PingRespones';

export default class PingService {
  async ping(): Promise<PingResponse> {
    return { message: 'pong' };
  }
}
