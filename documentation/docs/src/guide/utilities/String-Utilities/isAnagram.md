# isAnagram

Checks if two strings are anagrams of each other.

> **Note:** An *`anagram`* is a word or phrase formed by rearranging the letters of another, using all the original letters exactly once. This check ignores spaces, punctuation, and case.

## Parameters

* `str1` (`string`): The first string to compare.
* `str2` (`string`): The second string to compare.

## Returns

* `boolean`: `true` if the strings are anagrams, otherwise `false`.

## Usage

```ts
isAnagram('listen', 'silent'); // true
isAnagram('hello', 'world'); // false
isAnagram('Dormitory', 'Dirty room'); // true
```