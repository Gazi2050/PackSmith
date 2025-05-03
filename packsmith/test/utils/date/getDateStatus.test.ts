import { getDateStatus } from '@date/getDateStatus';
import { describe, it, expect } from 'vitest';

describe('getDateStatus', () => {
    const today = new Date();

    it('should return "present" for today', () => {
        expect(getDateStatus(today)).toBe('present');
    });

    it('should return "future" for a future date', () => {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 1);
        expect(getDateStatus(futureDate)).toBe('future');
    });

    it('should return "past" for a past date', () => {
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - 1);
        expect(getDateStatus(pastDate)).toBe('past');
    });

    it('should return "invalid" for an invalid date', () => {
        const invalidDate = new Date('invalid-date');
        expect(getDateStatus(invalidDate)).toBe('invalid');
    });
});
