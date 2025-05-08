/**
 * Checks if a value is null.
 * 
 * @param value - The value to check.
 * @returns True if the value is null, otherwise false.
 */
export function isNull(value: unknown) {
    if (value === null) {
        return true
    } else {
        return false
    }
}