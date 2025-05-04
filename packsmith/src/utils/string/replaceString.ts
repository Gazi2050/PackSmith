export function replaceString(str: string, target: string, replacement: string) {
    if (target === '') {
        return replacement + [...str].join(replacement) + replacement;
    }
    return str.split(target).join(replacement);
}
