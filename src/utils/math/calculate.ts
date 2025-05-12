import { OperationType } from "@type/type";

/**
 * Performs a mathematical operation on an array of numbers.
 * @param operation - Type of operation to perform ('add', 'subtract', 'multiply', 'divide', 'mod').
 * @param values - Array of numbers (minimum two) to apply the operation on.
 * @returns The result of the operation and its type.
 * @throws If fewer than two numbers are provided or if division/modulo by zero occurs.
 */
export function calculate(
    operation: OperationType,
    values: number[]
) {
    if (values.length < 2) {
        throw new Error('At least two numbers are required');
    }

    const result = values.reduce((acc, val) => {
        switch (operation) {
            case 'add':
                return acc + val;
            case 'subtract':
                return acc - val;
            case 'multiply':
                return acc * val;
            case 'divide':
                if (val === 0) throw new Error('Division by zero');
                return acc / val;
            case 'mod':
                if (val === 0) throw new Error('Modulo by zero');
                return acc % val;
        }
    });

    return { result, type: operation };
}
