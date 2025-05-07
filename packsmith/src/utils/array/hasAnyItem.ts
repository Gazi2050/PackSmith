export function hasAnyItem(value1: unknown[], value2: unknown[]) {
    for (const item of value2) {
        if (value1.includes(item)) {
            return true;
        }
    }
    return false;
}
