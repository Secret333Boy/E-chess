export default class MemCache {
  private readonly cache = new Map<string, unknown>();

  public getItem(key: string): unknown {
    return this.cache.get(key);
  }

  public setItem(key: string, value: unknown): void {
    if (!this.cache.has(key)) this.cache.set(key, value);
  }
}