import { isSameTime } from 'src';
import { describe, it, expect } from 'vitest';

describe('isSameTime', () => {
    const base = new Date('2023-05-01T12:34:56');

    it('returns true when all time parts match (no unit)', () => {
        const same = new Date('2023-05-01T12:34:56');
        expect(isSameTime(base, same)).toBe(true);
    });

    it('returns false when second is different (no unit)', () => {
        const diff = new Date('2023-05-01T12:34:55');
        expect(isSameTime(base, diff)).toBe(false);
    });

    it('checks day correctly', () => {
        const sameDay = new Date('2023-05-01T00:00:00');
        const diffDay = new Date('2023-05-02T12:34:56');
        expect(isSameTime(base, sameDay, 'day')).toBe(true);
        expect(isSameTime(base, diffDay, 'day')).toBe(false);
    });

    it('checks hour correctly', () => {
        const sameHour = new Date('2023-05-01T12:00:00');
        const diffHour = new Date('2023-05-01T13:00:00');
        expect(isSameTime(base, sameHour, 'hour')).toBe(true);
        expect(isSameTime(base, diffHour, 'hour')).toBe(false);
    });

    it('checks minute correctly', () => {
        const sameMinute = new Date('2023-05-01T12:34:00');
        const diffMinute = new Date('2023-05-01T12:35:00');
        expect(isSameTime(base, sameMinute, 'minute')).toBe(true);
        expect(isSameTime(base, diffMinute, 'minute')).toBe(false);
    });

    it('checks second correctly', () => {
        const sameSecond = new Date('2023-05-01T12:34:56');
        const diffSecond = new Date('2023-05-01T12:34:57');
        expect(isSameTime(base, sameSecond, 'second')).toBe(true);
        expect(isSameTime(base, diffSecond, 'second')).toBe(false);
    });

    it('returns false for invalid dates', () => {
        const invalid = new Date('invalid');
        expect(isSameTime(invalid, base)).toBe(false);
        expect(isSameTime(base, invalid, 'minute')).toBe(false);
    });
});
