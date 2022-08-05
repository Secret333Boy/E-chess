export default class MemCache<T = unknown> {
  private readonly cache = new Map<string, T>();

  public getItem(key: string): T | undefined {
    return this.cache.get(key);
  }

  public setItem(key: string, value: T): void {
    if (this.cache.has(key)) {
      throw new Error(`Key ${key} already exists`);
    }
    this.cache.set(key, value);
  }

  public clear(): void {
    this.cache.clear();
  }

  public hasItem(key: string): boolean {
    return this.cache.has(key);
  }

  public removeItem(key: string): void {
    this.cache.delete(key);
  }

  public getAllItems(): T[] {
    return Array.from(this.cache.values());
  }

  public getSize(): number {
    return this.cache.size;
  }
}
