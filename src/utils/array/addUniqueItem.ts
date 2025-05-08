/**
 * Adds an item to an array if it doesn't already exist.
 * 
 * @param value - The array to modify.
 * @param item - The item to add.
 * @returns The updated array and a message indicating the result.
 */
export function addUniqueItem(value: unknown[], item: unknown) {
    const isItemPresent = value.includes(item);

    if (!isItemPresent) {
        value.push(item);
        return { array: value, message: 'item added' };
    } else {
        return { array: value, message: 'item already exist' };
    }
}
