export function isToday(date: Date): boolean {
    if (isNaN(date.getTime())) return false;
    const now = new Date();
    return date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate();
}