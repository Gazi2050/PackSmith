/**
 * Checks if a string is a palindrome.
 * 
 * @param str - The string to check.
 * @returns True if the string is a palindrome, otherwise false.
 */
export function isPalindrome(str: string) {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return normalized === [...normalized].reverse().join('');
}