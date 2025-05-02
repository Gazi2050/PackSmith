export function isObject(value: unknown) {
    if (value === null) {
        return false;
    }
    if (value === undefined) {
        return false;
    }
    if (typeof value !== 'object') {
        return false;
    }
    if (Array.isArray(value)) {
        return false;
    }
    return true;
}