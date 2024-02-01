const calculateNumber = require("./1-calcul.js");
const assert = require("assert");

describe("calculateNumber()", function() {
    const tests = [
        {args: ['SUM', 1.4, 4.5], expected: 6},
        {args: ['SUM', 1.2,3.7], expected: 5},
        {args: ['SUM', 1.5, 3.7], expected: 6},
        {args: ['SUM', 1.2,3.7], expected: 5},
        {args: ['SUBTRACT', 1.4, 4.5], expected: -4},
        {args: ['SUBTRACT', 10.3, 5], expected: 5},
        {args: ['SUBTRACT', 5.6, 1.7], expected: 4},
        {args: ['SUBTRACT', 1.2,3.7], expected: -3},
        {args: ['DIVIDE', 1.4, 4.5], expected: 0.2},
        {args: ['DIVIDE', 1.2,3.7], expected: 0.25},
        {args: ['DIVIDE', 1.55, 3.7], expected: 0.5},
        {args: ['DIVIDE', 0, 4], expected: 0},
        {args: ['DIVIDE', 1.4, 0], expected: "Error"},
        {args: ['DIVIDE', 1.4, 0.4], expected: "Error"}
    ];

    tests.forEach(({args, expected}) => {
        it(`Test ${args[0]}: ${args[1]} and ${args[2]}`, function() {
            const ans = calculateNumber(args[0], args[1], args[2]);
            assert.equal(ans, expected);
        });
    });
});