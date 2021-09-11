const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should return employee name", () => {
        const testEmployee = new Employee("John",5,"j@gmail.com")
        expect(testEmployee.getName()).toBe("John")
    })
    it("should return employee id", () => {
        const testEmployee = new Employee("John",5,"j@gmail.com")
        expect(testEmployee.getID()).toBe(5)
    })
    it("should return employee email", () => {
        const testEmployee = new Employee("John",5,"j@gmail.com")
        expect(testEmployee.getEmail()).toBe("j@gmail.com")
    })
    it("should return employee role", () => {
        const testEmployee = new Employee("John",5,"j@gmail.com")
        expect(testEmployee.getRole()).toBe("Employee")
    })
})