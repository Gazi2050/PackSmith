# mergeArrays

Merges multiple arrays into one and returns the result with a status message.

## Parameters

* `arrays` (`T[][]`): One or more arrays to merge.

## Returns

* `object`: An object containing:
  * `array` (`T[]`): The merged array.
  * `message` (`string`): A descriptive message:
    * `'Single array provided'` if only one array is given.
    * `'Empty arrays'` if all provided arrays are empty.
    * `'Merged successfully'` if merging was performed.

## Usage

```ts
mergeArrays([1, 2], [3, 4]); 
// { array: [1, 2, 3, 4], message: 'Merged successfully' }

mergeArrays([1, 2]); 
// { array: [1, 2], message: 'Single array provided' }

mergeArrays([], []); 
// { array: [], message: 'Empty arrays' }
```