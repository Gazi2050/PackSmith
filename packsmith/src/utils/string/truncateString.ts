export function truncateString(str: string, length: number) {
    if (length <= 0) {
        throw new Error("Length must be greater than 0");
    } else if (str.length > length) {
        return str.slice(0, length) + '...';
    } else {
        return str;
    }
}
