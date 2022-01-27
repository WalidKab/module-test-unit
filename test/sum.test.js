// Add the unit tests of the sum function here
import {sum} from "../src/sum";

test('adds 1 + 2 to equal 3', () => {

    expect(sum(1, 2)).toBe(3);
});

test('is number', () => {
    expect(sum("a", "hgrfue")).toBe("You must provide 2 numbers!")
});
