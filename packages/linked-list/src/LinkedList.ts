import { LinkedListNode } from './LinkedListNode';

/**
 * Singly linked list data structure.
 * API matches datastructures-js LinkedList.
 */
export class LinkedList<T> {
  private _head: LinkedListNode<T> | null = null;
  private _count = 0;

  insertFirst(value: T | LinkedListNode<T>): LinkedListNode<T> {
    const newNode =
      value instanceof LinkedListNode ? value : new LinkedListNode(value);
    newNode.setNext(this._head);
    this._head = newNode;
    this._count++;
    return this._head;
  }

  insertLast(value: T | LinkedListNode<T>, startingNode?: LinkedListNode<T>): LinkedListNode<T> {
    if (this.isEmpty()) {
      return this.insertFirst(value);
    }

    let current: LinkedListNode<T> = startingNode ?? this._head!;
    while (current.hasNext()) {
      current = current.getNext()!;
    }

    const newNode =
      value instanceof LinkedListNode ? value : new LinkedListNode(value);
    current.setNext(newNode);
    this._count++;
    return newNode;
  }

  insertAt(position: number, value: T | LinkedListNode<T>): LinkedListNode<T> {
    if (
      Number.isNaN(+position) ||
      position < 0 ||
      position > this._count
    ) {
      throw new Error('.insertAt expects a position num <= linked list size');
    }

    if (position === 0) {
      return this.insertFirst(value);
    }

    let currentPosition = 1;
    let prev: LinkedListNode<T> = this._head!;
    while (currentPosition < position) {
      currentPosition++;
      prev = prev.getNext()!;
    }

    const newNode =
      value instanceof LinkedListNode ? value : new LinkedListNode(value);
    newNode.setNext(prev.getNext());
    prev.setNext(newNode);
    this._count++;
    return newNode;
  }

  removeFirst(): LinkedListNode<T> | null {
    if (this.isEmpty()) return null;

    const removed = this._head;
    this._head = this._head!.getNext();
    this._count--;
    return removed!.setNext(null);
  }

  removeLast(): LinkedListNode<T> | null {
    if (this.isEmpty()) return null;

    let prev: LinkedListNode<T> | null = null;
    let current: LinkedListNode<T> | null = this._head;
    while (current!.hasNext()) {
      prev = current;
      current = current!.getNext();
    }

    if (prev === null) {
      return this.removeFirst();
    }

    prev.setNext(null);
    this._count--;
    return current!.setNext(null);
  }

  removeAt(position: number): LinkedListNode<T> | null {
    if (Number.isNaN(+position) || position < 0 || position >= this._count) {
      return null;
    }

    if (position === 0) {
      return this.removeFirst();
    }

    let counter = 1;
    let prev: LinkedListNode<T> = this._head!;
    while (counter < position) {
      counter++;
      prev = prev.getNext()!;
    }
    const removed = prev.getNext()!;
    prev.setNext(removed.getNext());
    this._count--;
    return removed.setNext(null);
  }

  removeEach(cb: (node: LinkedListNode<T>, position: number) => boolean): number {
    let removedCount = 0;
    let position = 0;
    let prev: LinkedListNode<T> | null = null;
    let current: LinkedListNode<T> | null = this._head;

    while (current !== null) {
      if (cb(current, position)) {
        const removedNode = current;
        if (prev === null) {
          this._head = current.getNext();
          current = this._head;
        } else {
          prev.setNext(current.getNext());
          current = prev.getNext();
        }
        removedNode.setNext(null);
        this._count--;
        removedCount++;
      } else {
        prev = current;
        current = current.getNext();
      }
      position++;
    }

    return removedCount;
  }

  find(cb: (node: LinkedListNode<T>) => boolean, startingNode: LinkedListNode<T> | null = this._head): LinkedListNode<T> | null {
    let current: LinkedListNode<T> | null = startingNode;
    while (current !== null) {
      if (cb(current)) {
        return current;
      }
      current = current.getNext();
    }
    return null;
  }

  filter(cb: (node: LinkedListNode<T>, position: number) => boolean): LinkedList<T> {
    const result = new LinkedList<T>();
    let last: LinkedListNode<T> | null = null;
    let position = 0;
    let current = this._head;

    while (current !== null) {
      if (cb(current, position)) {
        const cloned = current.clone();
        if (last === null) {
          result._head = cloned;
          last = cloned;
        } else {
          last.setNext(cloned);
          last = cloned;
        }
        result._count++;
      }
      current = current.getNext();
      position++;
    }

    return result;
  }

  forEach(cb: (node: LinkedListNode<T>, position: number) => void): void {
    let current = this._head;
    let position = 0;
    while (current !== null) {
      cb(current, position);
      current = current.getNext();
      position++;
    }
  }

  head(): LinkedListNode<T> | null {
    return this._head;
  }

  count(): number {
    return this._count;
  }

  isEmpty(): boolean {
    return this._head === null;
  }

  toArray(): LinkedListNode<T>[] {
    const result: LinkedListNode<T>[] = [];
    this.forEach((node) => result.push(node));
    return result;
  }

  clear(): void {
    this._head = null;
    this._count = 0;
  }

  static fromArray<T>(values: T[]): LinkedList<T> {
    const linkedList = new LinkedList<T>();
    let lastInserted: LinkedListNode<T> | null = null;
    for (const value of values) {
      lastInserted = linkedList.insertLast(value, lastInserted ?? undefined);
    }
    return linkedList;
  }
}
