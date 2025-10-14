# isString

Checks if a value is a `string`.

## Parameters

* `value` (`unknown`): The value to check, which can be of any type.

## Returns

* `boolean`: `true` if the value is a string, otherwise `false`.

## Usage

```ts
isString('hello'); // true
isString(42); // false
isString([]); // false
```