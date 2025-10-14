# isInCurrent

Checks whether a given date falls within the current **year**, **month**, or **week**.

## Parameters

* `date` (`Date`): The date to check.
* `unit` (`'year' | 'month' | 'week'`): The unit of time to compare against the current date.

## Returns

* `boolean`: `true` if the date is within the current specified unit; otherwise, `false`.

## Usage

```ts
isInCurrent(new Date(), 'year'); 
// true (if the year matches the current year)

isInCurrent(new Date(), 'month'); 
// true (if the month and year match the current month/year)

isInCurrent(new Date(), 'week'); 
// true (if the date falls within the current week)

isInCurrent(new Date('2000-01-01'), 'year'); 
// false
```