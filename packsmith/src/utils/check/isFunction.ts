export function isFunction(value: unknown) {
    if (typeof value === 'function') {
        return true
    } else {
        return false
    }
}