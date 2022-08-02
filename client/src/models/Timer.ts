import organizeTime from '../utils/organizeTime';

export default class Timer {
  private startTime = Date.now();

  public start() {
    this.startTime = Date.now();
  }

  get time(): number {
    return Date.now() - this.startTime;
  }

  get timeFormatted(): string {
    return organizeTime(this.time);
  }
}
