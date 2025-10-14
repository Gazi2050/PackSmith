# addUniqueItem

Adds an item to an array if it doesn't already exist.

## Parameters

* `value` (`unknown[]`): The array to modify.
* `item` (`unknown`): The item to add to the array.

## Returns

* `object`: An object containing:
  * `array` (`unknown[]`): The updated array.
  * `message` (`string`): A message indicating the result ('item added' or 'item already exist').

## Usage

```ts
addUniqueItem([1, 2, 3], 4); // { array: [1, 2, 3, 4], message: 'item added' }
addUniqueItem([1, 2, 3], 2); // { array: [1, 2, 3], message: 'item already exist' }
```