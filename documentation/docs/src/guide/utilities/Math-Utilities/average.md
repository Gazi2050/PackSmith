# average

Returns the **average** of an array of numbers.

> **Note:** Throws an error if the array is empty. This ensures that a meaningful average can always be computed.

## Parameters

* `values` (`number[]`): An array of numeric values to be averaged.

## Throws

* `Error`: If the input array is empty.

## Returns

* `number`: The calculated average (sum of values divided by the count).

## Usage

```ts
average([1, 2, 3, 4, 5]);
// 3

average([10, 20]);
// 15

average([]);
// ❌ Error: Array must not be empty
```
