# getSign

Returns the sign of a number.

## Parameters

* `value` (`number`): The number to evaluate.

## Returns

* `string | number`: 
  * `'positive'` if the number is greater than 0.
  * `'negative'` if the number is less than 0.
  * `'zero'` if the number is exactly 0.
  * `NaN` if the input is not a valid number.

## Usage

```ts
getSign(10); 
// 'positive'

getSign(-5); 
// 'negative'

getSign(0); 
// 'zero'
```