const { getCircleLength, getCircleArea } = require('../calcCircle');

describe("CircleLength test", () => {
    test("CircleLength is equal to 138.2 when radius is 22", () => {
        expect(getCircleLength(22)).toBeCloseTo(138.2, 1);
    });
    test("CircleLength when radius is absent eqular to NaN", () => {
        expect(getCircleLength()).toBeNaN;
    });
})

describe("CircleArea test", () => {
    test("CircleArea is equal to 254.47 when radius is 9", () => {
        expect(getCircleArea(9)).toBeCloseTo(254.47, 2);
    });
    test("CircleArea when radius is absent eqular to NaN", () => {
        expect(getCircleArea()).toBeNaN;
    });
})