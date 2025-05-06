export function areArraysEqual(...arrays: unknown[][]) {
    const totalArrays = arrays.length;

    if (totalArrays < 2) {
        return {
            array: arrays[0] ?? [],
            message: 'Single array provided'
        };
    }

    const [referenceArray, ...otherArrays] = arrays;

    const allEqual = otherArrays.every(currentArray =>
        currentArray.length === referenceArray.length &&
        currentArray.every((item, index) => item === referenceArray[index])
    );

    return allEqual;
}