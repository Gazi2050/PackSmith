# isNumber

Checks if a value is a valid `number` (not `NaN`).

## Parameters

* `value` (`unknown`): The value to check, which can be of any type.

## Returns

* `boolean`: `true` if the value is a number and not NaN, otherwise `false`.

## Usage

```ts
isNumber(42); // true
isNumber(NaN); // false
isNumber('hello'); // false
```