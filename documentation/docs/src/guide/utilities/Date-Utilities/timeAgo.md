# timeAgo

Returns a **human-readable** string that describes how much time has passed since a given date, relative to the current time.

## Parameters

* `date` (`Date`): The past date to compare against the current time.

## Returns

* `string`: A human-readable description of how much time has passed since the given date.

## Usage

```ts
const aFewSecondsAgo = new Date(Date.now() - 10 * 1000);
timeAgo(aFewSecondsAgo);
// "10 seconds ago"

const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);
timeAgo(twoMinutesAgo);
// "2 minutes ago"

const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000);
timeAgo(threeHoursAgo);
// "3 hours ago"

const fiveDaysAgo = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
timeAgo(fiveDaysAgo);
// "5 days ago"

const fourMonthsAgo = new Date(Date.now() - 120 * 24 * 60 * 60 * 1000);
timeAgo(fourMonthsAgo);
// "4 months ago"

const twoYearsAgo = new Date(Date.now() - 720 * 24 * 60 * 60 * 1000);
timeAgo(twoYearsAgo);
// "2 years ago"
```
