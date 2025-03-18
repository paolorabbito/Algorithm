import { describe, it } from "node:test";
import assert from 'node:assert';
import {mergeSort} from "./mergeSort";

describe("MergeSort Test", () => {
    it('should return sorted array', () => {
        const unsortedArray = [5, 10, 7, 15, 24, 99, 88];
        const sortedArray = [5, 7, 10, 15, 24, 88, 99];
        mergeSort(unsortedArray, 0, 6)
        assert.deepEqual(unsortedArray, sortedArray);
    });
});