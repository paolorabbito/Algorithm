/**
 * Complexity worst case: O(n^2)
 * Complexity average case: O(n^2)
 * Complexity best case: O(n)
 **/
export function insertionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const tmp = arr[i];
        let j = i;

        while (j > 1 && arr[j - 1] > tmp) {
            arr[j] = arr[j - 1];
            j = j - 1;
        }

        arr[j] = tmp;
    }

    return arr;
}
