/**
 * Counts the number of words in a string.
 * 
 * @param str - The input string.
 * @returns The number of words.
 */
export function countWords(str: string) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}
