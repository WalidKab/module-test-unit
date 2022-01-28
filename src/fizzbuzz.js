export function fizzBuzz(n) {
    // A completer
    if (n > 100) {
        return "should be between 1 and 100";
    }

    else if (n % 15 === 0) {
        return "FizzBuzz";
    }

    else if (n % 3 === 0) {
        return "Fizz";
    }

    else if (n % 5 === 0) {
        return "Buzz";
    }

    else{
        return n;
    }
}
