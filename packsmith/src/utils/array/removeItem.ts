/**
 * Removes a specific item from an array.
 * 
 * @param value - The array to remove the item from.
 * @param item - The item to remove.
 * @returns An object containing the updated array and a message indicating the result.
 */
export function removeItem(value: unknown[], item: unknown) {
    const index = value.indexOf(item);
    if (index > -1) {
        value.splice(index, 1);
        return { array: value, message: 'item removed' };
    } else {
        return { array: value, message: 'item not found' };
    }
}
