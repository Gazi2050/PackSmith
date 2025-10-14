# getDateStatus

Determines whether a given date is in the **past**, **present**, or **future**.

## Parameters

* `date` (`Date`): The `Date` object to evaluate.

## Returns

* `string`: One of the following values:
  * `'present'`: If the date matches today's date (ignores time).
  * `'past'`: If the date is before today.
  * `'future'`: If the date is after today.
  * `'invalid'`: If the input is not a valid date.

## Usage

```ts
getDateStatus(new Date()); 
// 'present'

getDateStatus(new Date('2000-01-01')); 
// 'past'

getDateStatus(new Date('2100-01-01')); 
// 'future'

getDateStatus(new Date('invalid-date')); 
// 'invalid'
```