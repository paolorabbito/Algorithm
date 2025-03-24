export class MaxHeap {
    heap: number[];
    private size: number;

    constructor(heap: number[] = []) {
        this.heap = heap;
        this.size = heap.length;
        this.buildMaxHeap();
    }

    public buildMaxHeap() {
        const start = Math.floor((this.size - 2)/2)
        for (let i = start; i >= 0; i--) {
            this.maxHeapify(i);
        }
    }

    public maxHeapify(i: number) {
        const left = this.getLeftIndex(i);
        const right = this.getRightIndex(i);
        let largest = i;

        if ((left <= this.size - 1) && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if ((right <= this.size - 1) && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest != i) {
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            this.maxHeapify(largest);
        }
    }

    getParentIndex(i: number): number {
        return Math.floor((Math.abs(i - 1))/2);
    }

    getLeftIndex(i: number) {
        return 2*i + 1;
    }

    getRightIndex(i: number): number {
        return (2*i + 2);
    }
}