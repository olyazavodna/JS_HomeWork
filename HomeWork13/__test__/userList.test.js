const userList = require('../userList');

describe("UserList test", () => {
    test("is 'admin' present", () => {
        expect(userList).toContain("admin");
    });
    test("is first element 'Nick'", () => {
        expect(userList[0]).toBe("Nick");
    });
    test("is last element 'new_user_2'", () => {
        expect(userList[userList.length - 1]).toBe("new_user_2");
    });
    test("is array length equal to 5", () => {
        expect(userList).toHaveLength(5);
    });
    test("is 3rd element's type 'string'", () => {
        expect(typeof userList[2]).toBe("string");
    });
    test("is 8th element absent", () => {
        expect(userList[7]).toBeUndefined();
    });
})