import { Stack } from '../src/Stack';

describe('Stack', () => {
  it('push and pop follow LIFO', () => {
    const stack = new Stack<number>();
    stack.push(1).push(2).push(3);
    expect(stack.size()).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  it('peek returns top without removing', () => {
    const stack = new Stack<string>();
    expect(stack.peek()).toBeUndefined();
    stack.push('a').push('b');
    expect(stack.peek()).toBe('b');
    expect(stack.size()).toBe(2);
  });

  it('isEmpty and clear work correctly', () => {
    const stack = new Stack<boolean>();
    expect(stack.isEmpty()).toBe(true);
    stack.push(true);
    expect(stack.isEmpty()).toBe(false);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  it('toArray returns elements in insertion order', () => {
    const stack = new Stack<number>();
    stack.push(1).push(2).push(3);
    expect(stack.toArray()).toEqual([1, 2, 3]);
  });

  it('fromArray builds a stack with same order', () => {
    const stack = Stack.fromArray([1, 2, 3]);
    expect(stack.toArray()).toEqual([1, 2, 3]);
    expect(stack.pop()).toBe(3);
  });
});
