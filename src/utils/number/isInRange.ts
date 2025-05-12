/**
 * Checks if a number is within a specified inclusive range.
 * 
 * @param value - The number to check.
 * @param min - The minimum value in the range.
 * @param max - The maximum value in the range.
 * @returns True if value is between min and max (inclusive), otherwise false.
 */
export function isInRange(value: number, min: number, max: number) {
    if (value >= min && value <= max) {
        return true
    } else {
        return false
    }
}