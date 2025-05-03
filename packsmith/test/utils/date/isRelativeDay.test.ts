import { isRelativeDay } from 'src';
import { describe, it, expect } from 'vitest';


describe('isRelativeDay', () => {
    it('returns true for today', () => {
        const today = new Date();
        expect(isRelativeDay(today, 'today')).toBe(true);
    });

    it('returns false for a different day when checking today', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        expect(isRelativeDay(yesterday, 'today')).toBe(false);
    });

    it('returns true for tomorrow', () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        expect(isRelativeDay(tomorrow, 'tomorrow')).toBe(true);
    });

    it('returns false for today when checking tomorrow', () => {
        const today = new Date();
        expect(isRelativeDay(today, 'tomorrow')).toBe(false);
    });

    it('returns true for yesterday', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        expect(isRelativeDay(yesterday, 'yesterday')).toBe(true);
    });

    it('returns false for today when checking yesterday', () => {
        const today = new Date();
        expect(isRelativeDay(today, 'yesterday')).toBe(false);
    });

    it('returns false for an invalid date', () => {
        const invalid = new Date('invalid');
        expect(isRelativeDay(invalid, 'today')).toBe(false);
        expect(isRelativeDay(invalid, 'tomorrow')).toBe(false);
        expect(isRelativeDay(invalid, 'yesterday')).toBe(false);
    });
});
