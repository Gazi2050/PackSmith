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
