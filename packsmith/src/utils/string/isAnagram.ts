/**
 * Checks if two strings are anagrams of each other.
 * 
 * @param str1 - The first string to compare.
 * @param str2 - The second string to compare.
 * @returns True if the strings are anagrams, otherwise false.
 */
export function isAnagram(str1: string, str2: string) {
    const normalize = (str: string) => str.toLocaleLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}