/**
 * Truncates a string to a specified length and appends '...' if truncated.
 * 
 * @param str - The string to truncate.
 * @param length - The maximum length of the truncated string.
 * @throws Error if the length is less than or equal to 0.
 * @returns The truncated string, or the original string if it's shorter than the specified length.
 */
export function truncateString(str: string, length: number) {
    if (length <= 0) {
        throw new Error("Length must be greater than 0");
    } else if (str.length > length) {
        return str.slice(0, length) + '...';
    } else {
        return str;
    }
}
