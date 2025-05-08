export function getParity(value: number) {
    if (value % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}