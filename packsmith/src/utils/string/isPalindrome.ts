export function isPalindrome(value: string) {
    const normalized = value.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return normalized === [...normalized].reverse().join('');
}