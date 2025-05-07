/**
 * Checks if all provided arrays are equal in length and content (shallow comparison).
 * 
 * @param arrays - Two or more arrays to compare.
 * @returns True if all arrays are equal, an object with array and message if only one array is provided.
 */
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