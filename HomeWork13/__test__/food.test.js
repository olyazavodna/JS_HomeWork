const { filterFoodPrice, food } = require('../food');

describe("filterFoodPrice test", () => {
    const min = 12;
    const max = 40;
    test("result length is 3", () => {
        expect(filterFoodPrice(food, min, max)).toHaveLength(3);
    });
    test("result contains { kind: 'pepper', price: 27 }", () => {
        const pepper = { kind: 'pepper', price: 27 }
        expect(filterFoodPrice(food, min, max)).toContainEqual(pepper);
    });
    test("result contains 2nd, 3rd, 4th element of food", () => {
        expect(filterFoodPrice(food, min, max)).toContain(food[1]);
        expect(filterFoodPrice(food, min, max)).toContain(food[2]);
        expect(filterFoodPrice(food, min, max)).toContain(food[3]);
    });
    test("price of first element is greater than min", () => {
        expect(filterFoodPrice(food, min, max)[0].price).toBeGreaterThan(min);
    });
    test("price of 3rd element is less than max", () => {
        expect(filterFoodPrice(food, min, max)[2].price).toBeLessThan(max);
    });
    test("result doesn't contain { kind: 'lemon', price: 50 }", () => {
        const lemon = { kind: 'lemon', price: 50 }
        expect(filterFoodPrice(food, min, max)).not.toContainEqual(lemon);
    });
    test("result contains some value", () => {
        expect(filterFoodPrice(food, min, max)).toBeTruthy();
    });
    test("result contains food with name 'banana'", () => {
        expect(filterFoodPrice(food, min, max)).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ "kind": "banana" })
            ])
        );
    });
})