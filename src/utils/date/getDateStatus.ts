/**
 * Determines the status of a given date (present, past, or future).
 * 
 * @param date - The Date object to evaluate.
 * @returns A string indicating whether the date is 'present', 'past', or 'future'.
 */
export function getDateStatus(date: Date) {
    if (isNaN(date.getTime())) return 'invalid';

    const now = new Date();

    now.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    if (date.getTime() === now.getTime()) {
        return 'present';
    } else if (date.getTime() < now.getTime()) {
        return 'past';
    } else {
        return 'future';
    }
}
