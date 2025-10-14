# includesItem

Checks if an array includes a specific item.

## Parameters

* `value` (`unknown[]`): The array to search.
* `item` (`unknown`): The item to look for.

## Returns

* `boolean`: `true` if the item is found, otherwise `false`.

## Usage

```ts
includesItem([1, 2, 3], 2); // true
includesItem([1, 2, 3], 4); // false
```