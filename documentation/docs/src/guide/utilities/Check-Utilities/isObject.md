# isObject

Checks if a value is a plain `object` (not `null`, `undefined`, or an `array`).

## Parameters

* `value` (`unknown`): The value to check, which can be of any type.

## Returns

* `boolean`: `true` if the value is a plain object, otherwise `false`.

## Usage

```ts
isObject({}); // true
isObject([]); // false
isObject(null); // false
isObject(undefined); // false
isObject('hello'); // false
```