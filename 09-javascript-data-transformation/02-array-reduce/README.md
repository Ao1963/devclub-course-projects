# Array Reduction Fundamentals & Real-Time Application

A comprehensive breakdown of the `.reduce()` accumulation lifecycle in JavaScript, culminating in an asynchronous real-time currency conversion system.

## Technical Core Concepts

### 1. The Accumulation Lifecycle

The `.reduce()` method executes a user-provided "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.

The callback engine operates with four parameters:

- **`accumulator` (`acc`)**: The accumulated value previously returned in the last invocation.
- **`currentValue` (`value`)**: The current element being processed in the array.
- **`currentIndex`**: The current index location of the element.
- **`arrayOriginal`**: The source array context.

### 2. The Initial Value Window

An optional `initialValue` argument can be passed as the second parameter to `.reduce()`. If omitted, the element at index 0 is used as the initial accumulator value, skipping the first iteration. Specifying an explicit initial value (e.g., `0` for math totals or `{}` for object aggregations) is production best-practice to avoid runtime exceptions on empty datasets.

---

## Code Implementations & Architecture

The accompanying `script.js` transitions from initial core study benchmarks to advanced application architecture:

### Phase 1: Core Mathematical Reductions

- Simple array aggregation and value tracking logs.
- Object stream property extraction (Corporate Market Value calculations).

### Phase 2: Advanced Dynamic Value Dashboard

- Blends `.map()` data formatting with `.reduce()` final total calculations.
- Implements JavaScript's native internationalization API (`Intl.NumberFormat`) for dual-currency mapping (BRL `R$` / USD `$`).
- Integrates asynchronous data fetching using `async/await` to pull live exchange rates directly from financial web endpoints.

---

## Local Execution

To run the implementation file and monitor terminal log outputs, execute the following command:

```bash
node 02-array-reduce/script.js
```
