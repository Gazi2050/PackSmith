export function isPalindrome(str: string) {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return normalized === [...normalized].reverse().join('');
}