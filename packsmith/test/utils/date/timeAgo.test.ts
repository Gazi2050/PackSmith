import { timeAgo } from 'src';
import { describe, it, expect } from 'vitest';

describe('timeAgo', () => {
    it('should return "X seconds ago" for dates within the last minute', () => {
        const now = new Date();
        const result = timeAgo(new Date(now.getTime() - 30 * 1000)); // 30 seconds ago
        expect(result).toBe('30 seconds ago');
    });

    it('should return "X minutes ago" for dates within the last hour', () => {
        const now = new Date();
        const result = timeAgo(new Date(now.getTime() - 45 * 60 * 1000)); // 45 minutes ago
        expect(result).toBe('45 minutes ago');
    });

    it('should return "X hours ago" for dates within the last 24 hours', () => {
        const now = new Date();
        const result = timeAgo(new Date(now.getTime() - 5 * 60 * 60 * 1000)); // 5 hours ago
        expect(result).toBe('5 hours ago');
    });

    it('should return "X days ago" for dates within the last month', () => {
        const now = new Date();
        const result = timeAgo(new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000)); // 5 days ago
        expect(result).toBe('5 days ago');
    });

    it('should return "X months ago" for dates within the last year', () => {
        const now = new Date();
        const result = timeAgo(new Date(now.getTime() - 2 * 30 * 24 * 60 * 60 * 1000)); // 2 months ago
        expect(result).toBe('2 months ago');
    });

    it('should return "X years ago" for dates older than a year', () => {
        const now = new Date();
        const result = timeAgo(new Date(now.getTime() - 3 * 365 * 24 * 60 * 60 * 1000)); // 3 years ago
        expect(result).toBe('3 years ago');
    });

    it('should handle current time as "0 seconds ago"', () => {
        const now = new Date();
        const result = timeAgo(now);
        expect(result).toBe('0 seconds ago');
    });

    it('should handle a large number of seconds correctly', () => {
        const now = new Date();
        const result = timeAgo(new Date(now.getTime() - 100 * 60 * 60 * 1000)); // 100 hours ago
        expect(result).toBe('4 days ago');
    });
});
