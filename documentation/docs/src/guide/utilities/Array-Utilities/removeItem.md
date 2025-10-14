# removeItem

Removes a specific item from an array.

## Parameters

* `value` (`unknown[]`): The array to remove the item from.
* `item` (`unknown`): The item to remove.

## Returns

* `object`: An object containing:
  * `array` (`unknown[]`): The updated array after removal.
  * `message` (`string`): A message indicating the result:
    * `'item removed'` if the item was found and removed.
    * `'item not found'` if the item was not in the array.

## Usage

```ts
removeItem([1, 2, 3], 2); 
// { array: [1, 3], message: 'item removed' }

removeItem([1, 2, 3], 4); 
// { array: [1, 2, 3], message: 'item not found' }
