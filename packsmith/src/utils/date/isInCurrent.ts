import { DateUnit } from "@type/type";

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
            date.setDate(date.getDate() - date.getDay()); // Sunday as the start of the week
            return date;
        };

        const getWeekEnd = (start: Date) => {
            const end = new Date(start);
            end.setDate(start.getDate() + 6); // Saturday as the end of the week
            end.setHours(23, 59, 59, 999);
            return end;
        };

        const weekStart = getWeekStart(now);
        const weekEnd = getWeekEnd(weekStart);

        return date >= weekStart && date <= weekEnd;
    }

    return false;
}
