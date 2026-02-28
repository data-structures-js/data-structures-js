# @data-structures-js/stack

Stack data structure for TypeScript and JavaScript.

## Install

```bash
npm install @data-structures-js/stack
```

## Usage

```typescript
import { Stack } from '@data-structures-js/stack';

const stack = new Stack<number>();
stack.push(1).push(2).push(3);
console.log(stack.pop());   // 3
console.log(stack.peek());  // 2
console.log(stack.size());  // 2
```
