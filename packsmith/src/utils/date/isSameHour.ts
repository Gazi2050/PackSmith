export function isSameHour(date1: Date, date2: Date): boolean {
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) return false;

    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate() &&
        date1.getHours() === date2.getHours();
}
