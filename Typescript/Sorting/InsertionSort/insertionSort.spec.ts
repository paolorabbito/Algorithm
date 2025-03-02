import { describe, it } from "node:test";
import assert from 'node:assert';
import {insertionSort} from "./insertionSort";

describe("Selection Sort Test", () => {
    it('should return sorted array', () => {
        const unsortedArray = [5, 10, 7, 15, 24, 99, 88];
        const sortedArray = [5, 7, 10, 15, 24, 88, 99];
        assert.deepEqual(insertionSort(unsortedArray), sortedArray);
    });
});