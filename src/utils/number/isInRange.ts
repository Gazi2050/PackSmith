export function isInRange(value: number, min: number, max: number) {
    if (value >= min && value <= max) {
        return true
    } else {
        return false
    }
}