import { getParity } from "src";
import { describe, expect, it } from "vitest";

describe('getParity', () => {
    it('returns "odd" if number is odd', () => {
        expect(getParity(5)).toBe('odd');
    });

    it('returns "even" if number is even', () => {
        expect(getParity(4)).toBe('even');
    });
});
