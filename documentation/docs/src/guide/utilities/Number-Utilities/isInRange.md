# isInRange

Checks if a number is within a specified inclusive range.

## Parameters

* `value` (`number`): The number to check.
* `min` (`number`): The minimum value in the range.
* `max` (`number`): The maximum value in the range.

## Returns

* `boolean`: `true` if `value` is between `min` and `max` (inclusive), otherwise `false`.

## Usage

```ts
isInRange(5, 1, 10); // true
isInRange(0, 1, 10); // false
isInRange(10, 10, 20); // true
```