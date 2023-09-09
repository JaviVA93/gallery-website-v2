export function getRandomElementsFromArray<T>(arr: T[], n: number): T[] {
    if (n >= arr.length) {
        // Return a copy of the entire array if n is greater or equal to the array length
        return arr.slice();
    }

    // Create a copy of the original array
    const shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements randomly
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, n);
}

export function combineArrays<T, U>(arr1: T[], arr2: U[]): [T, U][] {
    const combined: [T, U][] = [];

    for (const item1 of arr1) {
        for (const item2 of arr2) {
            combined.push([item1, item2]);
        }
    }

    return combined;
}
