export function removeItem(value: unknown[], item: unknown) {
    const index = value.indexOf(item);
    if (index > -1) {
        value.splice(index, 1);
        return { array: value, message: 'item removed' };
    } else {
        return { array: value, message: 'item not found' };
    }
}
