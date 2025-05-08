/**
 * Checks if a value is a function.
 * 
 * @param value - The value to check.
 * @returns True if the value is a function, otherwise false.
 */
export function isFunction(value: unknown) {
    if (typeof value === 'function') {
        return true
    } else {
        return false
    }
}