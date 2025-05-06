export function removeDuplicates(value: unknown[]) {
    const originalLength = value.length;
    const unique = Array.from(new Set(value));
    const message = unique.length === originalLength
        ? 'no duplicate found'
        : 'duplicate removed';
    return { value: unique, message };
}
