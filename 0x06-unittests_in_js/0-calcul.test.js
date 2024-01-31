const sumUp = require("./0-calcul.js");
const assert = require("assert");

describe("sumUp()", function() {
    const tests = [
        {args: [1, 3], expected: 4},
        {args: [1, 3.7], expected: 5},
        {args: [1.2, 3.7], expected: 5},
        {args: [1.5, 3.7], expected: 6}
    ];

    tests.forEach(({args, expected}) => {
        it(`Test ${args[0]} + ${args[1]}`, function() {
            const ans = sumUp(args[0], args[1]);
            assert.equal(ans, expected);
        });
    });
});