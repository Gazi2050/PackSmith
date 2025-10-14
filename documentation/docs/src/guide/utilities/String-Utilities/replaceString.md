# replaceString

Replaces occurrences of a target string with a replacement string.

> **Note:** If the `target` is an empty string, the `replacement` will be inserted between every character and at both ends of the original string.

## Parameters

* `str` (`string`): The original string.
* `target` (`string`): The string to be replaced.
* `replacement` (`string`): The string to replace the target with.

## Returns

* `string`: The modified string with replacements applied.

## Usage

```ts
replaceString('hello world', ' ', '-'); 
// 'hello-world'

replaceString('foofoo', 'foo', 'bar'); 
// 'barbar'

replaceString('abc', '', '*'); 
// '*a*b*c*'
```