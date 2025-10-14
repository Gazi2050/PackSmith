# isRelativeDay

Checks if a given date is **"yesterday"** or **"tomorrow"** relative to the current date.

> **Note:** This function compares only the year, month, and day. Time of day is ignored. Invalid dates will return `false`.

## Parameters

* `date` (`Date`): The date to evaluate.
* `dayType` (`'yesterday' | 'tomorrow'`): The relative day type to check against.

## Returns

* `boolean`: `true` if the date matches the specified relative day (`yesterday` or `tomorrow`), otherwise `false`.

## Usage

```ts
isRelativeDay(new Date(), 'yesterday'); 
// false (today is not yesterday)

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
isRelativeDay(yesterday, 'yesterday'); 
// true

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
isRelativeDay(tomorrow, 'tomorrow'); 
// true

isRelativeDay(new Date('invalid'), 'tomorrow'); 
// false (invalid date)
```