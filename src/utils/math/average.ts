/**
 * Calculates the average of a list of numbers.
 * @param values - Array of numbers to average.
 * @returns The average of the numbers.
 * @throws If the array is empty.
 */
export function average(values: number[]) {
    if (values.length === 0) {
        throw new Error('Array must not be empty');
    }

    const sum = values.reduce((acc, val) => acc + val, 0);
    const result = sum / values.length;
    return result
}
