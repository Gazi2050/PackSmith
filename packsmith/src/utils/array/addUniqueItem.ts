export function addUniqueItem(value: unknown[], item: unknown) {
    const isItemPresent = value.includes(item);

    if (!isItemPresent) {
        value.push(item);
        return { array: value, message: 'item added' };
    } else {
        return { array: value, message: 'item already exist' };
    }
}
