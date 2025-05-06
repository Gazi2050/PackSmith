export function areArraysEqual(value1: unknown[], value2: unknown[]) {
    const isLengthSame = value1.length === value2.length
    const isItemsSame = value1.every((val, i) => val === value2[i])
    if (isLengthSame && isItemsSame) {
        return true;
    } else {
        return false;
    }
}