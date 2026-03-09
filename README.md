# data-structures-js

Data structures in JavaScript and TypeScript.

## Structure

```
data-structures-js/
├── packages/
│   ├── linked-list/     # @data-structures-js/linked-list
│   ├── stack/           # @data-structures-js/stack
│   └── core/            # @data-structures-js/core
├── package.json         # npm workspaces
└── README.md
```

## Install

**All structures (meta package):**
```bash
npm install @data-structures-js/core
```

**Individual packages:**
```bash
npm install @data-structures-js/linked-list
npm install @data-structures-js/stack
```

## Usage

### Consolidated

```javascript
const { LinkedList, LinkedListNode, Stack } = require('@data-structures-js/core');
```

### Individual packages

```javascript
const { LinkedList, LinkedListNode } = require('@data-structures-js/linked-list');
const { Stack } = require('@data-structures-js/stack');
```

## Development

```bash
# Install all dependencies (hoisted to root)
npm install

# Build all packages
npm run build

# Build specific package
npm run build:linked-list
npm run build:stack

# Publish (run from monorepo root)
npm run publish:linked-list   # Publish linked-list first
npm run publish:stack         # Publish stack
npm run publish:core          # Publish meta package last
```

## Publish order

1. `@data-structures-js/linked-list`
2. `@data-structures-js/stack`
3. `@data-structures-js/core`
