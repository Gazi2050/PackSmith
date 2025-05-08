import { DateUnit } from "@type/type";

/**
 * Checks if a given date is in the current specified unit (year, month, or week).
 * 
 * @param date - The Date object to check.
 * @param unit - The unit to check ('year', 'month', or 'week').
 * @returns True if the date is within the current year, month, or week based on the unit.
 */
export function isInCurrent(date: Date, unit: DateUnit): boolean {
    if (isNaN(date.getTime())) return false;

    const now = new Date();

    if (unit === 'year') {
        return date.getFullYear() === now.getFullYear();
    }

    if (unit === 'month') {
        return (
            date.getFullYear() === now.getFullYear() &&
            date.getMonth() === now.getMonth()
        );
    }

    if (unit === 'week') {
        const getWeekStart = (d: Date) => {
            const date = new Date(d);
            date.setHours(0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay());
            return date;
        };

        const getWeekEnd = (start: Date) => {
            const end = new Date(start);
            end.setDate(start.getDate() + 6);
            end.setHours(23, 59, 59, 999);
            return end;
        };

        const weekStart = getWeekStart(now);
        const weekEnd = getWeekEnd(weekStart);

        return date >= weekStart && date <= weekEnd;
    }

    return false;
}
