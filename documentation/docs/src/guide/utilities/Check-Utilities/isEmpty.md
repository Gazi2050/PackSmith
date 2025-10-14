# isEmpty

Checks if the provided value is `empty`. A value is considered empty if it is `null`, `undefined`, an empty `string`, an empty `array`, or an empty `object`.

## Parameters

* `value` (`unknown`): The value to check, which can be a string, array, object, null or undefined.

## Returns

* `boolean`: `true` if the value is empty (null, undefined, empty string, empty array, or empty object), otherwise `false`.

## Usage

```ts
isEmpty(''); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty(null); // true
isEmpty(0); // false
```
