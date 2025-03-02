import { describe, it } from "node:test";
import assert from 'node:assert';
import {getMinIndex, selectionSort} from "./selectionSort";

describe("Selection Sort Test", () => {
    it('should return sorted array', () => {
        const unsortedArray = [5, 10, 7, 15, 24, 99, 88];
        const sortedArray = [5, 7, 10, 15, 24, 88, 99];
        assert.deepEqual(selectionSort(unsortedArray), sortedArray);
    });

    it('should return minimum at index 0', () => {
        const unsortedArray = [5, 10, 7, 15, 24, 99, 88];
        assert.deepEqual(getMinIndex(unsortedArray, 0, 7), 0);
    });

    it('should return minimum at last index', () => {
        const unsortedArray = [5, 10, 7, 15, 24, 99, 88];
        assert.deepEqual(getMinIndex(unsortedArray, 5, 7), 6);
    });
});