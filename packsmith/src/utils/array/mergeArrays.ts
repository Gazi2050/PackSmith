/**
 * Merges multiple arrays into one and returns a status message.
 * 
 * @param arrays - One or more arrays to merge.
 * @returns An object containing the merged array and a descriptive message.
 */
export function mergeArrays<T>(...arrays: T[][]) {
    if (arrays.length === 1) {
        return {
            array: arrays[0],
            message: "Single array provided"
        };
    }

    const allEmpty = arrays.every((arr) => arr.length === 0);

    if (allEmpty) {
        return {
            array: [],
            message: "Empty arrays"
        };
    }

    const merged = arrays.reduce<T[]>((acc, arr) => acc.concat(arr), []);

    return {
        array: merged,
        message: "Merged successfully"
    };
}
