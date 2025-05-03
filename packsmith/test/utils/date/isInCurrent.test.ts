import { isInCurrent } from 'src';
import { describe, it, expect } from 'vitest';

describe('isInCurrent', () => {
    const today = new Date();

    it('should return true for the current year', () => {
        const sameYearDate = new Date(today);
        expect(isInCurrent(sameYearDate, 'year')).toBe(true);
    });

    it('should return false for a different year', () => {
        const diffYearDate = new Date(today);
        diffYearDate.setFullYear(today.getFullYear() + 1);
        expect(isInCurrent(diffYearDate, 'year')).toBe(false);
    });

    it('should return true for the current month', () => {
        const sameMonthDate = new Date(today);
        expect(isInCurrent(sameMonthDate, 'month')).toBe(true);
    });

    it('should return false for a different month', () => {
        const diffMonthDate = new Date(today);
        diffMonthDate.setMonth(today.getMonth() + 1);
        expect(isInCurrent(diffMonthDate, 'month')).toBe(false);
    });

    it('should return true for the current week', () => {
        const sameWeekDate = new Date(today);
        expect(isInCurrent(sameWeekDate, 'week')).toBe(true);
    });

    it('should return false for a different week', () => {
        const diffWeekDate = new Date(today);
        diffWeekDate.setDate(today.getDate() + 7); // 1 week ahead
        expect(isInCurrent(diffWeekDate, 'week')).toBe(false);
    });

    it('should return false for an invalid date', () => {
        const invalidDate = new Date('invalid-date');
        expect(isInCurrent(invalidDate, 'week')).toBe(false);
    });

    it('should return false if the unit is not week, month, or year', () => {
        // Test with some invalid unit (TypeScript will prevent invalid 'unit' type at compile-time)
        // Adding this as a safeguard for future cases
        // @ts-expect-error - Force testing an invalid unit type
        expect(isInCurrent(today, 'day')).toBe(false);
    });
});
