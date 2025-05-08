/**
 * Checks if a value is a string.
 * 
 * @param value - The value to check.
 * @returns True if the value is a string, otherwise false.
 */
export function isString(value: unknown) {
    if (typeof value === 'string') {
        return true
    } else {
        return false
    }
}