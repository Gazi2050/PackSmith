# truncateString

Truncates a string to a specified length and appends `'...'` if truncated.

> **Note:** If the string is shorter than or equal to the specified length, it is returned unchanged.

## Parameters

* `str` (`string`): The string to truncate.
* `length` (`number`): The maximum allowed length of the truncated string.

## Throws

* `Error`: If the `length` is less than or equal to `0`.

## Returns

* `string`: The truncated string with `'...'` appended if it was longer than the specified length.

## Usage

```ts
truncateString('Hello world', 5); 
// 'Hello...'

truncateString('OpenAI', 10); 
// 'OpenAI'

truncateString('Test', 0); 
// Error: Length must be greater than 0
```