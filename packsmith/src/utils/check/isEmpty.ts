import { EmptyType } from "@type/type";

export function isEmpty(value: EmptyType): boolean {
    // Check for null or undefined
    if (value == null) return true;

    // Check for empty string or array
    if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;

    // Check for empty object
    if (typeof value === 'object' && value !== null) return Object.keys(value).length === 0;

    return false;
}
