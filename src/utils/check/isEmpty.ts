/**
 * Checks if a value is empty.
 * 
 * @param value - The value to check.
 * @returns True if the value is null, undefined, an empty string, array, or object.
 */
export function isEmpty(value: unknown) {
    if (value == null) return true;

    if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;

    if (typeof value === 'object' && value !== null) return Object.keys(value).length === 0;

    return false;
}
