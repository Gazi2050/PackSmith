import { TimeUnit } from "@type/type";

export function isSameTime(date1: Date, date2: Date, unit?: TimeUnit): boolean {
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) return false;

    const checks = {
        day: () =>
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate(),

        hour: () =>
            checks.day() &&
            date1.getHours() === date2.getHours(),

        minute: () =>
            checks.hour() &&
            date1.getMinutes() === date2.getMinutes(),

        second: () =>
            checks.minute() &&
            date1.getSeconds() === date2.getSeconds(),
    };

    if (unit) {
        return checks[unit]();
    }

    return checks.second();
}
