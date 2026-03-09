/**
 * Stack data structure (LIFO).
 */
export class Stack<T> {
  private _elements: T[] = [];

  push(value: T): Stack<T> {
    this._elements.push(value);
    return this;
  }

  pop(): T | undefined {
    return this._elements.pop();
  }

  peek(): T | undefined {
    return this._elements[this._elements.length - 1];
  }

  isEmpty(): boolean {
    return this._elements.length === 0;
  }

  size(): number {
    return this._elements.length;
  }

  toArray(): T[] {
    return [...this._elements];
  }

  clear(): void {
    this._elements = [];
  }

  static fromArray<T>(values: T[]): Stack<T> {
    const stack = new Stack<T>();
    for (const value of values) {
      stack.push(value);
    }
    return stack;
  }
}
