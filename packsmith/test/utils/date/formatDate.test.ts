import { formatDate, FormatType } from 'src';
import { describe, it, expect } from 'vitest';

describe('formatDate', () => {
    it('should format date to ISO string', () => {
        const date = new Date('2025-05-03T12:00:00Z');
        const result = formatDate(date, 'iso');
        expect(result).toBe('2025-05-03T12:00:00.000Z');
    });

    it('should format date to short format (DD/MM/YYYY)', () => {
        const date = new Date('2025-05-03');
        const result = formatDate(date, 'short');
        expect(result).toBe('03/05/2025');
    });

    it('should format date to time format (HH:mm)', () => {
        const date = new Date('2025-05-03T12:15:00Z');
        const result = formatDate(date, 'time');
        expect(result).toBe('12:15');
    });

    it('should format date to datetime format (DD/MM/YYYY HH:mm)', () => {
        const date = new Date('2025-05-03T12:15:00Z');
        const result = formatDate(date, 'datetime');
        expect(result).toBe('03/05/2025 12:15');
    });

    it('should format date to YYYY-MM-DD format', () => {
        const date = new Date('2025-05-03');
        const result = formatDate(date, 'yyyy-mm-dd');
        expect(result).toBe('2025-05-03');
    });

    it('should format date to DD-MM-YYYY format', () => {
        const date = new Date('2025-05-03');
        const result = formatDate(date, 'dd-mm-yyyy');
        expect(result).toBe('03-05-2025');
    });

    it('should format date to human-readable format', () => {
        const date = new Date('2025-05-03');
        const result = formatDate(date, 'human');
        expect(result).toBe('Saturday, May 3, 2025');
    });

    it('should format relative date as Today', () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const result = formatDate(today, 'relative');
        expect(result).toBe('Today');
    });

    it('should format relative date as Yesterday', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        yesterday.setHours(0, 0, 0, 0);
        const result = formatDate(yesterday, 'relative');
        expect(result).toBe('Yesterday');
    });

    it('should format relative date as Tomorrow', () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        const result = formatDate(tomorrow, 'relative');
        expect(result).toBe('Tomorrow');
    });

    it('should return empty string for invalid date', () => {
        const invalidDate = new Date('invalid-date');
        const result = formatDate(invalidDate, 'iso');
        expect(result).toBe('');
    });

    it('should return empty string for unrecognized format style', () => {
        const date = new Date('2025-05-03');
        const result = formatDate(date, 'unknown' as FormatType);
        expect(result).toBe('');
    });
});
