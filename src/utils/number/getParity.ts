/**
 * Determines whether a number is even or odd.
 * 
 * @param value - The number to check.
 * @returns 'even' if the number is divisible by 2, otherwise 'odd'.
 */
export function getParity(value: number) {
    if (value % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}