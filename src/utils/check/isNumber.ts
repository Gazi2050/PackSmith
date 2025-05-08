/**
 * Checks if a value is a valid number (not NaN).
 * 
 * @param value - The value to check.
 * @returns True if the value is a number and not NaN, otherwise false.
 */
export function isNumber(value: unknown) {
    if (typeof value === 'number' && !Number.isNaN(value)) {
        return true
    } else {
        return false
    }
}