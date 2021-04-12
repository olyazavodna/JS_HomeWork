const { expect } = require('@jest/globals');
const sum = require('../addition');

describe("Addition test", () => {
    test("add 0.1 to 0.2 is 0.3", () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    })
})