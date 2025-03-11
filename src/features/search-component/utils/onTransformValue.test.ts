import {onTransformValue} from "./onTransformValue.ts";

describe('Transforming input data using the onTransformValue function', () => {
    it('should convert a single number to a string', () => {
        expect(onTransformValue(5)).toBe('5');
        expect(onTransformValue(0)).toBe('0');
        expect(onTransformValue(-3)).toBe('-3');
    });

    it('should join an array of numbers into a comma-separated string', () => {
        expect(onTransformValue([1, 2, 3])).toBe('1,2,3');
        expect(onTransformValue([0, -1, 5])).toBe('0,-1,5');
    });

    it('should handle an empty array', () => {
        expect(onTransformValue([])).toBe('');
    });

    it('should handle an array with a single number', () => {
        expect(onTransformValue([7])).toBe('7');
    });

    it('should handle large numbers', () => {
        expect(onTransformValue(1000000)).toBe('1000000');
        expect(onTransformValue([1000000, 2000000])).toBe('1000000,2000000');
    });

    it('should handle decimal numbers', () => {
        expect(onTransformValue(3.14)).toBe('3.14');
        expect(onTransformValue([1.5, 2.7, 3.14])).toBe('1.5,2.7,3.14');
    });
});