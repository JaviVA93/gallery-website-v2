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

