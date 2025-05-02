export function isNumber(value: unknown) {
    if (typeof value === 'number' && !Number.isNaN(value)) {
        return true
    } else {
        return false
    }
}