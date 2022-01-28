import {kata} from "../src/kata";

describe("kata", function () {

    test('should return number to string', () => {
        expect(kata(23)).toBe('vingt trois');
    });
})