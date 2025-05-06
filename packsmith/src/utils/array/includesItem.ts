export function includesItem(value: unknown[], item: unknown) {
    const isItemInclude = value.includes(item)
    if (isItemInclude) {
        return true
    } else {
        return false
    }
}