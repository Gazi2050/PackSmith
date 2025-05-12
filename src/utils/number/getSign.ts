/**
 * Returns the sign of a number.
 * 
 * @param value - The number to evaluate.
 * @returns 'positive', 'negative', 'zero', or NaN if the input is not a number.
 */
export function getSign(value: number) {
    if (value > 0) {
        return 'positive'
    } else if (value < 0) {
        return 'negative'
    } else if (value === 0) {
        return 'zero'
    } else {
        return NaN
    }
}