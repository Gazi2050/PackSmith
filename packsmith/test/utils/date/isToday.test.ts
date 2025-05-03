import { isToday } from 'src';
import { describe, it, expect } from 'vitest';

describe('isToday', () => {
    it('returns true for a date that is today', () => {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        expect(isToday(today)).toBe(true);
    });

    it('returns false for a date in the past', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        expect(isToday(yesterday)).toBe(false);
    });

    it('returns false for a date in the future', () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        expect(isToday(tomorrow)).toBe(false);
    });

    it('returns false for an invalid date', () => {
        const invalid = new Date('invalid');
        expect(isToday(invalid)).toBe(false);
    });
});
