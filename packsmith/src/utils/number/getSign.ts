export function getSign(value: number) {
    if (value > 0) {
        return 'positive'
    } else if (value < 0) {
        return 'negative'
    } else if (value === 0) {
        return 'zero'
    } else {
        return null
    }
}