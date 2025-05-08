import { countWords } from "src";
import { describe, expect, it } from "vitest";

describe('countWords', () => {
    it('should return 1 for " "', () => {
        expect(countWords(" ")).toBe(0)
    });
    it('should return 1 for " hello "', () => {
        expect(countWords(" hello ")).toBe(1)
    });
    it('should return 2 for "hello world"', () => {
        expect(countWords("hello world")).toBe(2)
    })
})