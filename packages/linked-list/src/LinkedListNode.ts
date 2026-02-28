/**
 * Node for a singly linked list.
 * Matches datastructures-js LinkedListNode API.
 */
export class LinkedListNode<T> {
  private _value: T;
  private _next: LinkedListNode<T> | null = null;

  constructor(value: T, next?: LinkedListNode<T> | null) {
    this._value = value;
    this.setNext(next ?? null);
  }

  getValue(): T {
    return this._value;
  }

  setValue(value: T): LinkedListNode<T> {
    this._value = value;
    return this;
  }

  getNext(): LinkedListNode<T> | null {
    return this._next;
  }

  setNext(next: LinkedListNode<T> | null): LinkedListNode<T> {
    this._next = next;
    return this;
  }

  hasNext(): boolean {
    return this._next !== null;
  }

  clone(): LinkedListNode<T> {
    return new LinkedListNode(this._value);
  }
}
