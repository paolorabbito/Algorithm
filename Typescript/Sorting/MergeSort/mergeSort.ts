/**
 * Complexity worst case: O(n log n)
 * Complexity average case: O(n log n)
 * Complexity best case: O(n log n)
 **/
export function mergeSort(arr: number[], start: number, end: number): void{
    if (start >= end) {
        return;
    }

    const mid = Math.floor((start + end)/2)
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
}

export function merge(arr: number[], start: number, mid: number, end: number): void {
    let i = start;
    let j = mid + 1;
    let k = 0;
    const tmp: number[] = [];


    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            tmp[k++] = arr[i++];
        } else {
            tmp[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        tmp[k++] = arr[i++];
    }

    while (j <= end) {
        tmp[k++] = arr[j++];
    }

    for (i = 0; i < k; i++) {
        arr[start + i] = tmp[i];
    }
}
