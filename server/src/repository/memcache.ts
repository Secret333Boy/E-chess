export default class MemCache {
  private readonly cache = new Map<string, unknown>();

  public getItem(key: string): unknown {
    return this.cache.get(key);
  }

  public setItem(key: string, value: unknown): void {
    if (this.cache.has(key)) {
      throw new Error(`Key ${key} already exists`);
    }
    this.cache.set(key, value);
  }

  public removeItem(key: string): void {
    this.cache.delete(key);
  }

  public getSize(): number {
    return this.cache.size;
  }
}
