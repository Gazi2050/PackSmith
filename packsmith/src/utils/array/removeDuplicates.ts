/**
 * Removes duplicate items from an array.
 * 
 * @param value - The array from which duplicates will be removed.
 * @returns An object containing the array with duplicates removed and a message indicating the result.
 */
export function removeDuplicates(value: unknown[]) {
    const originalLength = value.length;
    const unique = Array.from(new Set(value));
    const message = unique.length === originalLength
        ? 'no duplicate found'
        : 'duplicate removed';
    return { value: unique, message };
}
