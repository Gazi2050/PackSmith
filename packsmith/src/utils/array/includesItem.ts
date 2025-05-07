/**
 * Checks if an array includes a specific item.
 * 
 * @param value - The array to search.
 * @param item - The item to look for.
 * @returns True if the item is found, otherwise false.
 */
export function includesItem(value: unknown[], item: unknown) {
    const isItemInclude = value.includes(item)
    if (isItemInclude) {
        return true
    } else {
        return false
    }
}