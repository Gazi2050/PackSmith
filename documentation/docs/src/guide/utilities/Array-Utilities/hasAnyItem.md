# hasAnyItem

Checks if any item from the second array exists in the first array.

## Parameters

* `value1` (`unknown[]`): The array to check against.
* `value2` (`unknown[]`): The array containing items to check for.

## Returns

* `boolean`: `true` if any item is found in both arrays, otherwise `false`.

## Usage

```ts
hasAnyItem([1, 2, 3], [3, 4, 5]); // true
hasAnyItem([1, 2, 3], [4, 5, 6]); // false
```