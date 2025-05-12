export function average(values: number[]) {
    if (values.length === 0) {
        throw new Error('Array must not be empty');
    }

    const sum = values.reduce((acc, val) => acc + val, 0);
    const result = sum / values.length;
    return result
}
