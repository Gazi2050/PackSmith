export function isAnagram(str1: string, str2: string) {
    const normalize = (str: string) => str.toLocaleLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}