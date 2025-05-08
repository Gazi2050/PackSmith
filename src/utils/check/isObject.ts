/**
 * Checks if a value is a plain object (not null, undefined, or an array).
 * 
 * @param value - The value to check.
 * @returns True if the value is a plain object, otherwise false.
 */
export function isObject(value: unknown) {
    if (value === null) {
        return false;
    }
    if (value === undefined) {
        return false;
    }
    if (typeof value !== 'object') {
        return false;
    }
    if (Array.isArray(value)) {
        return false;
    }
    return true;
}