# calculate

Performs a **mathematical operation** (`add`, `subtract`, `multiply`, `divide`, `mod`) on an array of numbers.

> **Note:** Requires **at least two values**. Division or modulo by zero will throw an error.

## Parameters

* `operation` (`'add' | 'subtract' | 'multiply' | 'divide' | 'mod'`): The type of operation to perform.
* `values` (`number[]`): An array of numbers to operate on (minimum of 2).

## Throws

* `Error`: If fewer than two numbers are provided.
* `Error`: If attempting to divide or modulo by zero.

## Returns

* `{ result: number, type: OperationType }`: The result of the operation and the operation type.

## Usage

```ts
calculate('add', [1, 2, 3]);
// { result: 6, type: 'add' }

calculate('subtract', [10, 4]);
// { result: 6, type: 'subtract' }

calculate('multiply', [2, 3, 4]);
// { result: 24, type: 'multiply' }

calculate('divide', [20, 2]);
// { result: 10, type: 'divide' }

calculate('mod', [10, 3]);
// { result: 1, type: 'mod' }

calculate('divide', [5, 0]);
// ❌ Error: Division by zero
```