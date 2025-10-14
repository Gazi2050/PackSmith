# isSameTime

Compares two `Date` objects to determine if they represent the **same point in time**, based on a specified time precision (`'day'`, `'hour'`, `'minute'`, or `'second'`). If no unit is provided, it defaults to `'second'`.

> **Note:** The function performs a hierarchical comparison.
> This means:
>
> * `'day'` compares **year**, **month**, and **day**.
> * `'hour'` compares everything in `'day'` plus **hour**.
> * `'minute'` compares everything in `'hour'` plus **minute**.
> * `'second'` (or no unit) compares all parts including **second**.
>
> If either date is invalid (`NaN`), it returns `false`.

## Parameters

* `date1` (`Date`): The first date to compare.
* `date2` (`Date`): The second date to compare.
* `unit?` (`'day' | 'hour' | 'minute' | 'second'`): Optional. The time unit to compare by. Defaults to `'second'`.

## Returns

* `boolean`:

  * `true` if the two dates are equal up to the specified unit.
  * `false` if they differ on any level within the unit, or if either date is invalid.

## Comparison Levels

| Unit                 | Fields Compared                        | Time Parts Ignored   |
| -------------------- | -------------------------------------- | -------------------- |
| no unit / `'second'` | Year, Month, Day, Hour, Minute, Second | None                 |
| `'day'`              | Year, Month, Day                       | Hour, Minute, Second |
| `'hour'`             | Year, Month, Day, Hour                 | Minute, Second       |
| `'minute'`           | Year, Month, Day, Hour, Minute         | Second               |
| `'second'`           | Year, Month, Day, Hour, Minute, Second | None                 |

## Usage

### No unit provided (defaults to `'second'`)

```ts
isSameTime(new Date('2023-05-01T12:34:56'), new Date('2023-05-01T12:34:56'));
// true — exact match on all fields

isSameTime(new Date('2023-05-01T12:34:56'), new Date('2023-05-01T12:34:55'));
// false — seconds differ
```

### Unit = `'day'`

Compares **year**, **month**, and **day** only. Ignores hour, minute, and second.

```ts
isSameTime(new Date('2023-05-01T12:34:56'), new Date('2023-05-01T00:00:00'), 'day');
// true — same day

isSameTime(new Date('2023-05-01T12:34:56'), new Date('2023-05-02T12:00:00'), 'day');
// false — different day
```

### Unit = `'hour'`

Compares **year**, **month**, **day**, and **hour**. Ignores minute and second.

```ts
isSameTime(new Date('2023-05-01T12:34:00'), new Date('2023-05-01T12:00:00'), 'hour');
// true — same hour

isSameTime(new Date('2023-05-01T12:34:00'), new Date('2023-05-01T13:00:00'), 'hour');
// false — different hour
```

### Unit = `'minute'`

Compares **year**, **month**, **day**, **hour**, and **minute**. Ignores second.

```ts
isSameTime(new Date('2023-05-01T12:34:56'), new Date('2023-05-01T12:34:00'), 'minute');
// true — same minute

isSameTime(new Date('2023-05-01T12:34:56'), new Date('2023-05-01T12:35:00'), 'minute');
// false — different minute
```

### Unit = `'second'`

Compares **year**, **month**, **day**, **hour**, **minute**, and **second**.

```ts
isSameTime(new Date('2023-05-01T12:34:56'), new Date('2023-05-01T12:34:56'), 'second');
// true — exact match

isSameTime(new Date('2023-05-01T12:34:56'), new Date('2023-05-01T12:34:57'), 'second');
// false — different second
```

### Invalid Dates

If either date is invalid, the function returns `false`.

```ts
isSameTime(new Date('invalid'), new Date('2023-05-01T12:34:56'));
// false — first date is invalid

isSameTime(new Date('2023-05-01T12:34:56'), new Date('invalid'), 'minute');
// false — second date is invalid
```