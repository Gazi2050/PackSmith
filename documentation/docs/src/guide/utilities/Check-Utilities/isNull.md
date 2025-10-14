# isNull

Checks whether the provided value is `null`.

## Parameters

* `value` (`unknown`): The value to check, which can be of any type.

## Returns

* `boolean`: `true` if the value is exactly `null`, otherwise `false`.

## Usage

```ts
isNull(null);        // true
isNull(undefined);   // false
isNull(0);           // false
isNull('');          // false
isNull({});          // false
```
