# removeDuplicates

Removes duplicate items from an array.

## Parameters

* `value` (`unknown[]`): The array from which duplicates will be removed.

## Returns

* `object`: An object containing:
  * `value` (`unknown[]`): The array with duplicates removed.
  * `message` (`string`): A message indicating the result:
    * `'no duplicate found'` if no duplicates were present.
    * `'duplicate removed'` if duplicates were removed.

## Usage

```ts
removeDuplicates([1, 2, 2, 3]); 
// { value: [1, 2, 3], message: 'duplicate removed' }

removeDuplicates([1, 2, 3]); 
// { value: [1, 2, 3], message: 'no duplicate found' }
