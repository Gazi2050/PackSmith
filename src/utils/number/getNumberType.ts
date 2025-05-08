export function getNumberType(value: number) {
    if (!Number.isFinite(value)) {
        return null;
    } else if (Number.isInteger(value)) {
        return 'integer';
    } else {
        return 'float';
    }
}
