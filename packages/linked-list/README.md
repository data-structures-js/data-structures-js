# @data-structures-js/linked-list

Singly linked list data structure for TypeScript and JavaScript.

## Installation

```bash
npm install @data-structures-js/linked-list
```

## Usage

### TypeScript

```typescript
import { LinkedList, LinkedListNode } from '@data-structures-js/linked-list';

const list = new LinkedList<number>();
list.insertFirst(1);
list.insertLast(2);
list.insertLast(3);

console.log(list.count());                    // 3
console.log(list.head()?.getValue());         // 1
console.log(list.toArray().map(n => n.getValue())); // [1, 2, 3]

const removed = list.removeFirst();
console.log(removed?.getValue());             // 1

// From array
const list2 = LinkedList.fromArray([1, 2, 3]);
```

### JavaScript

```javascript
const { LinkedList, LinkedListNode } = require('@data-structures-js/linked-list');

const list = new LinkedList();
list.insertFirst(1);
list.insertLast(2);
list.insertLast(3);
console.log(list.toArray().map(n => n.getValue())); // [1, 2, 3]
```

## API (matches datastructures-js)

| Method | Description |
|--------|-------------|
| `insertFirst(value)` | Add value/node at the beginning |
| `insertLast(value, startingNode?)` | Add value/node at the end |
| `insertAt(position, value)` | Add value/node at position |
| `removeFirst()` | Remove and return head node |
| `removeLast()` | Remove and return last node |
| `removeAt(position)` | Remove and return node at position |
| `head()` | Get head node |
| `count()` | Number of nodes |
| `isEmpty()` | Whether list is empty |
| `toArray()` | Convert to array of nodes |
| `LinkedList.fromArray(values)` | Create from array |

## Development

```bash
npm install
npm run build
```
