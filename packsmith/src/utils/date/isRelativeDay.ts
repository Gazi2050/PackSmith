import { DayType } from "@type/type";

export function isRelativeDay(date: Date, dayType: DayType): boolean {
    if (isNaN(date.getTime())) return false;

    const now = new Date();
    const targetDate = new Date(now);

    // Set the target date to the appropriate day based on the `dayType`
    if (dayType === 'yesterday') {
        targetDate.setDate(now.getDate() - 1);
    } else if (dayType === 'tomorrow') {
        targetDate.setDate(now.getDate() + 1);
    }

    // Compare the date parts (year, month, date)
    return date.getFullYear() === targetDate.getFullYear() &&
        date.getMonth() === targetDate.getMonth() &&
        date.getDate() === targetDate.getDate();
}
