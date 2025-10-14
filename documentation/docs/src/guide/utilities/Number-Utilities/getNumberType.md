# getNumberType

Determines whether a number is an integer or a float.

> **Note:** Returns `null` if the value is not a finite number (e.g. `Infinity`, `-Infinity`, or `NaN`).

## Parameters

* `value` (`number`): The number to check.

## Returns

* `string | null`: 
  * `'integer'` if the number is an integer.
  * `'float'` if the number is a floating-point number.
  * `null` if the number is not finite.

## Usage

```ts
getNumberType(42); 
// 'integer'

getNumberType(3.14); 
// 'float'

getNumberType(Infinity); 
// null
```