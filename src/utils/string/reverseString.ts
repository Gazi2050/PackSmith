/**
 * Reverses a given string.
 * 
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
export function reverseString(str: string) {
    const reverseStr = Array.from(str).reverse().join('');
    return reverseStr;
}
