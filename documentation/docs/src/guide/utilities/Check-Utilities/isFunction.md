# isFunction

Checks whether the provided value is a `function`.

## Parameters

* `value` (`unknown`): The value to check, which can be of any type.

## Returns

* `boolean`: `true` if the value is a function, otherwise `false`.

## Usage

```ts
isFunction(() => {});              // true
isFunction(function test() {});    // true
isFunction(class MyClass {});      // true
isFunction(async () => {});        // true

isFunction(123);                   // false
isFunction('function');            // false
isFunction({});                    // false
isFunction(null);                  // false
isFunction(undefined);             // false
```
