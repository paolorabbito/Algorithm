export function buildMaxHeap(arr: number[]): void {
    const start = Math.floor((arr.length - 2)/2);
    for (let i = start; i >= 0; i--) {
        maxHeapify(arr, i, arr.length);
    }
}

export function maxHeapify(arr: number[], i: number, size: number): void {
    const left = getLeftIndex(i);
    const right = getRightIndex(i);
    let largest = i;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        maxHeapify(arr, largest, size);
    }
}

export function getParentIndex(i: number): number {
    return Math.floor((Math.abs(i - 1))/2);
}

export function getLeftIndex(i: number) {
    return 2*i + 1;
}

export function getRightIndex (i: number): number {
    return (2*i + 2);
}

export function heapSort(arr: number[], size: number): void {
    buildMaxHeap(arr);

    for (let i = size -1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        size = size - 1;
        maxHeapify(arr, 0, size)
    }
}