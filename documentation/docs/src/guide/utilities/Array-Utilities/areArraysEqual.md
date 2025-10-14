# areArraysEqual

Checks if all provided arrays are equal in length and content (shallow comparison).

## Parameters

* `arrays` (`unknown[][]`): Two or more arrays to compare.

## Returns

* `boolean | object`: 
  * `boolean`: `true` if all arrays are equal in length and content, otherwise `false`.
  * `object`: An object with the array and message if only one array is provided:
    * `array` (`unknown[]`): The provided array.
    * `message` (`string`): A message indicating that only one array was provided.

## Usage

```ts
areArraysEqual([1, 2, 3], [1, 2, 3]); // true
areArraysEqual([1, 2, 3], [1, 2, 4]); // false
areArraysEqual([1, 2], [1, 2], [1, 2]); // true
areArraysEqual([1, 2, 3]); // { array: [1, 2, 3], message: 'Single array provided' }
```