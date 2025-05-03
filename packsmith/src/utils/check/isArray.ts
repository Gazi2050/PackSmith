/**
 * Checks if a value is an array.
 * 
 * @param value - The value to check.
 * @returns True if the value is an array.
 */
export function isArray(value: unknown): value is Array<unknown> {
    return Array.isArray(value);
}
