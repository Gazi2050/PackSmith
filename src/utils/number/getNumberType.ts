/**
 * Determines whether a number is an integer or a float.
 * 
 * @param value - The number to check.
 * @returns 'integer', 'float', or null if the value is not finite.
 */
export function getNumberType(value: number) {
    if (!Number.isFinite(value)) {
        return null;
    } else if (Number.isInteger(value)) {
        return 'integer';
    } else {
        return 'float';
    }
}
