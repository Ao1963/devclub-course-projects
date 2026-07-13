# Array Methods Fundamentals

A deep dive into functional programming patterns in JavaScript, focusing on data transformation techniques that eliminate side effects and optimize memory management.

## Technical Core Concepts

### 1. Data Transformation Theory

Modern engineering principles favor **immutability**. Instead of mutating the original structural states, native transformation methods create new collections. This approach simplifies state management, prevents edge-case runtime bugs, and enhances execution predictability.

### 2. The `.map()` Lifecycle

The `.map()` method iterates through an array sequentially, executes a callback function for every element, and constructs an entirely new array of the identical length.

The callback engine provides three execution parameters out of the box:

- **`item` (or element)**: The current collection reference being processed.
- **`index`**: The exact pointer location (zero-indexed) of the item.
- **`arrayOriginal`**: The complete context array being traversed.

---

## Code Implementations & Architecture

The accompanying `script.js` contains real-world scenarios handled via two different approaches:

### Scenario A: Primitive Array Mapping & Signature Inspections

Demonstrates how to handle simple numerical sequences using both verbose multi-parameter logging syntax and modern, concise inline statements.

```javascript
// Concise implicit return syntax (Production Standard)
const cleanDoubledNumbers = numbers.map((num) => num * 6);
```

### Scenario B: Object Stream Mapping & Conditional Engine

Demonstrates data transformation on complex objects. It maps a guest database boolean property (`vip: true/false`) into a distinct UI/UX display value (`braceletColor`).

- **Approach 1 (Procedural block)**: Uses declarative variable allocation via structured `if/else` statements for readability.
- **Approach 2 (Functional Expression)**: Employs a clean inline Ternary Operator paired with an immediate object literal return expression `({ ... })`.

---

## Local Execution

To run the implementation file and monitor terminal log outputs, execute the following command in your terminal from the root folder:

```bash
node 01-array-methods/script.js
```
