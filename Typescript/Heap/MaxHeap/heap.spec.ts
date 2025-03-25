import { describe, it } from "node:test";
import assert from 'node:assert';
import {buildMaxHeap, getLeftIndex, getParentIndex, getRightIndex, heapSort, maxHeapify} from "./heap";


describe("MaxHeap Test", () => {
    it('should build a max heap', () => {
        const heap = [5, 10, 7, 15, 24, 99, 88]
        buildMaxHeap(heap);
        const expectedHeap = [99, 24, 88, 15, 10,  7, 5];
        assert.deepEqual(heap, expectedHeap);
    });

    it('should get the correct parent index', () => {
        const heap = [10, 5, 7, 15, 24, 99, 88];
        buildMaxHeap(heap);
        const parentIndex = getParentIndex(1);
        assert.deepEqual(parentIndex, 0);
    });

    it('should get the correct left index', () => {
        const heap = [10, 5, 7, 15, 24, 99, 88];
        buildMaxHeap(heap);
        const leftIndex = getLeftIndex(0);
        assert.deepEqual(leftIndex, 1);
    });

    it('should get the correct right index', () => {
        const heap = [10, 5, 7, 15, 24, 99, 88];
        buildMaxHeap(heap);
        const rightIndex = getRightIndex(0);
        assert.deepEqual(rightIndex, 2);
    });

    it('should maxHeapify a single element array', () => {
        const arr = [5];
        maxHeapify(arr, 0, arr.length);
        assert.deepEqual(arr, [5]);
    });
    it('should maxHeapify a two-element array', () => {
        const arr = [5, 10];
        maxHeapify(arr, 0, arr.length);
        assert.deepEqual(arr, [10, 5]);
    });
    it('should maxHeapify a three-element array (balanced)', () => {
        const arr = [5, 10, 15];
        maxHeapify(arr, 0, arr.length);
        assert.deepEqual(arr, [15, 10, 5]);
    });
    it('should maxHeapify a three-element array (unbalanced)', () => {
        const arr = [15, 5, 10];
        maxHeapify(arr, 0, arr.length);
        assert.deepEqual(arr, [15, 5, 10]);
    });
    it('should maxHeapify a large array', () => {
        const arr = [5, 10, 7, 15, 24, 99, 88];
        maxHeapify(arr, 0, arr.length);
        assert.deepEqual(arr, [10, 24, 7, 15, 5, 99, 88]);
    });
    it('should maxHeapify an array containing duplicate elements', () => {
        const arr = [10, 15, 5, 5, 10];
        maxHeapify(arr, 0, arr.length);
        assert.deepEqual(arr, [15, 10, 5, 5, 10]);
    });
    it('should maxHeapify an array containing negative numbers', () => {
        const arr = [-5, 10, -7, 15, -24, 99, 88];
        maxHeapify(arr, 0, arr.length);
        assert.deepEqual(arr, [10, 15, -7, -5, -24, 99, 88]);
    });

    it('should sort an array containing negative numbers', () => {
        const arr = [-5, 10, -7, 15, -24, 99, 88];
        heapSort(arr, arr.length)
        assert.deepEqual(arr, [-24, -7, -5, 10, 15, 88, 99]);
    });

    it('should sort an array containing positive numbers', () => {
        const arr = [5, 10, 7, 15, 24, 99, 88];
        heapSort(arr, arr.length)
        assert.deepEqual(arr, [5, 7, 10, 15, 24, 88, 99]);
    });
});