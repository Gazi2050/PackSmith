/**
 * Checks if a value is a boolean.
 * 
 * @param value - The value to check.
 * @returns True if the value is a boolean, otherwise false.
 */
export function isBoolean(value: unknown) {
    if (typeof value === 'boolean') {
        return true
    } else {
        return false
    }
}