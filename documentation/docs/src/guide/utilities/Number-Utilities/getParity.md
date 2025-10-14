# getParity

Determines whether a number is even or odd.

## Parameters

* `value` (`number`): The number to check.

## Returns

* `string`: 
  * `'even'` if the number is divisible by 2.
  * `'odd'` if the number is not divisible by 2.

## Usage

```ts
getParity(4); 
// 'even'

getParity(7); 
// 'odd'

getParity(0); 
// 'even'
```