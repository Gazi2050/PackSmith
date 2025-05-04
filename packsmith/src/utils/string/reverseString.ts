export function reverseString(str: string) {
    const reverseStr = Array.from(str).reverse().join('');
    return reverseStr;
}
