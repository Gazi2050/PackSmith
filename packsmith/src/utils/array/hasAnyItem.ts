/**
 * Checks if any item from the second array exists in the first array.
 * 
 * @param value1 - The array to check against.
 * @param value2 - The array containing items to check for.
 * @returns True if any item is found in both arrays, otherwise false.
 */
export function hasAnyItem(value1: unknown[], value2: unknown[]) {
    for (const item of value2) {
        if (value1.includes(item)) {
            return true;
        }
    }
    return false;
}
