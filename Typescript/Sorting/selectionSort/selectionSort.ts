export function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        const min = getMinIndex(arr, i, n);
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }

    return arr;
}

export function getMinIndex(arr: number[], start: number, end: number) {
    let min = start;

    for (let i = start + 1; i < end; i++) {
        if (arr[i] < arr[min]) {
            min = i;
        }
    }

    return min;
}