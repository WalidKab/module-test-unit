import {fizzBuzz} from "../src/fizzbuzz";
import {multiply} from "../src/multiply";

describe("fizzBuzz", function () {

    it('should be between 1 and 100', function () {
        expect(fizzBuzz(150)).toBe("should be between 1 and 100")
    });

    test('should return fizz on multiples of 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');

    });

    test('should return buzz on multiples of 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
    });

    test('should return buzz on multiples of 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
    });
})