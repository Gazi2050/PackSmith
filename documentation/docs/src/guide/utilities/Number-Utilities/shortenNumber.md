# shortenNumber

Converts a number into a shortened readable format (e.g., `1.2k`, `3m`).

> **Note:** Handles special cases such as `Infinity`, `-Infinity`, and `NaN`.

## Parameters

* `value` (`number`): The number to shorten.

## Returns

* `string`: A formatted string representing the shortened number, or special strings for invalid values.

## Usage

```ts
shortenNumber(1200); // '1.2k'
shortenNumber(2500000); // '2.5m'
shortenNumber(5000000000); // '5b'
shortenNumber(999); // '999'
shortenNumber(Infinity); // 'infinity'
shortenNumber(NaN); // 'not a valid number'
shortenNumber(0); // '0'
```