# formatDate

Formats a `Date` object into a string based on the specified format type.

## Parameters

* `date` (`Date`): The `Date` object to format.
* `type` (`FormatType`): The formatting style to apply. Supported types include:
  * `'iso'`: ISO 8601 format (e.g., `'2025-05-15T00:00:00.000Z'`)
  * `'short'`: `DD/MM/YYYY` format
  * `'time'`: `HH:MM` (24-hour format)
  * `'datetime'`: `DD/MM/YYYY HH:MM`
  * `'yyyy-mm-dd'`: `YYYY-MM-DD` format
  * `'dd-mm-yyyy'`: `DD-MM-YYYY` format
  * `'human'`: Full localized date string (e.g., `'Thursday, May 15, 2025'`)
  * `'relative'`: Relative description like `'Today'`, `'Tomorrow'`, `'Yesterday'`, or a fallback localized date

## Returns

* `string`: The formatted date string, or an empty string if the input is invalid or the format type is unrecognized.

## Usage

```ts
formatDate(new Date('2025-05-15'), 'iso'); 
// '2025-05-15T00:00:00.000Z'

formatDate(new Date('2025-05-15'), 'short'); 
// '15/05/2025'

formatDate(new Date('2025-05-15T13:45:00Z'), 'time'); 
// '13:45'

formatDate(new Date('2025-05-15T13:45:00Z'), 'datetime'); 
// '15/05/2025 13:45'

formatDate(new Date('2025-05-15'), 'yyyy-mm-dd'); 
// '2025-05-15'

formatDate(new Date('2025-05-15'), 'dd-mm-yyyy'); 
// '15-05-2025'

formatDate(new Date('2025-05-15'), 'human'); 
// 'Thursday, May 15, 2025'

formatDate(new Date(), 'relative'); 
// 'Today'
```