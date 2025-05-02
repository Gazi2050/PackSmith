export function isEmpty(value: unknown) {
    if (value == null) return true;

    if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;

    if (typeof value === 'object' && value !== null) return Object.keys(value).length === 0;

    return false;
}
