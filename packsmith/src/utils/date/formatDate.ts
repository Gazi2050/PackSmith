import { FormatType } from "@type/type";

export function formatDate(date: Date, type: FormatType) {
    if (isNaN(date.getTime())) return '';

    const pad = (n: number) => String(n).padStart(2, '0');

    const day = pad(date.getUTCDate());
    const month = pad(date.getUTCMonth() + 1);
    const year = date.getUTCFullYear();
    const hour = pad(date.getUTCHours());
    const minute = pad(date.getUTCMinutes());

    switch (type) {
        case 'iso':
            return date.toISOString();

        case 'short':
            return `${day}/${month}/${year}`;

        case 'time':
            return `${hour}:${minute}`;

        case 'datetime':
            return `${day}/${month}/${year} ${hour}:${minute}`;

        case 'yyyy-mm-dd':
            return `${year}-${month}-${day}`;

        case 'dd-mm-yyyy':
            return `${day}-${month}-${year}`;

        case 'human':
            return date.toLocaleDateString(undefined, { dateStyle: 'full' });

        case 'relative': {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const target = new Date(date);
            target.setHours(0, 0, 0, 0);

            const diff = (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

            if (diff === 0) return 'Today';
            if (diff === 1) return 'Tomorrow';
            if (diff === -1) return 'Yesterday';
            return target.toLocaleDateString();
        }

        default:
            return '';
    }
}
