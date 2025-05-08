export function shortenNumber(value: number) {
    if (value === Infinity || value === -Infinity) return 'infinity';
    if (Number.isNaN(value)) return 'not a valid number';
    if (!Number.isFinite(value) || value === 0) return '0';

    const abs = Math.abs(value);

    if (abs >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}b`;
    if (abs >= 1_000_000) return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, '')}m`;
    if (abs >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, '')}k`;

    return value.toString();
}
