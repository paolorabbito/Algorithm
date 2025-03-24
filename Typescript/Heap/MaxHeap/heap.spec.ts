import { describe, it } from "node:test";
import assert from 'node:assert';
import { MaxHeap } from "./heap";

describe("MaxHeap Test", () => {
    it('should build a max heap', () => {
        const heap = new MaxHeap([5, 10, 7, 15, 24, 99, 88]);
        const expectedHeap = [99, 24, 88, 15, 10,  7, 5];
        assert.deepEqual(heap.heap, expectedHeap);
    });

    it('should get the correct parent index', () => {
        const heap = new MaxHeap([10, 5, 7, 15, 24, 99, 88]);
        const parentIndex = heap.getParentIndex(1);
        assert.deepEqual(parentIndex, 0);
    });

    it('should get the correct left index', () => {
        const heap = new MaxHeap([10, 5, 7, 15, 24, 99, 88]);
        const leftIndex = heap.getLeftIndex(0);
        assert.deepEqual(leftIndex, 1);
    });

    it('should get the correct right index', () => {
        const heap = new MaxHeap([10, 5, 7, 15, 24, 99, 88]);
        const rightIndex = heap.getRightIndex(0);
        assert.deepEqual(rightIndex, 2);
    });
});