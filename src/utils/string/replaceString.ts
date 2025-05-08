/**
 * Replaces occurrences of a target string with a replacement string.
 * 
 * @param str - The original string.
 * @param target - The string to be replaced.
 * @param replacement - The string to replace the target with.
 * @returns The modified string with replacements.
 */
export function replaceString(str: string, target: string, replacement: string) {
    if (target === '') {
        return replacement + [...str].join(replacement) + replacement;
    }
    return str.split(target).join(replacement);
}
