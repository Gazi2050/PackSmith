import { DayType } from "@type/type";

/**
 * Checks if a given date is 'yesterday' or 'tomorrow' based on the provided day type.
 * 
 * @param date - The Date object to check.
 * @param dayType - The type of day to check ('yesterday' or 'tomorrow').
 * @returns True if the date matches the specified day type, otherwise false.
 */
export function isRelativeDay(date: Date, dayType: DayType): boolean {
    if (isNaN(date.getTime())) return false;

    const now = new Date();
    const targetDate = new Date(now);

    if (dayType === 'yesterday') {
        targetDate.setDate(now.getDate() - 1);
    } else if (dayType === 'tomorrow') {
        targetDate.setDate(now.getDate() + 1);
    }

    return date.getFullYear() === targetDate.getFullYear() &&
        date.getMonth() === targetDate.getMonth() &&
        date.getDate() === targetDate.getDate();
}
