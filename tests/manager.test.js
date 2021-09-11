const Manager = require('../lib/Manager.js');

describe("Manager", () => {
    it("should return Manager's name", () => {
        const testManager = new Manager("210B","John",5,"j@gmail.com")
        expect(testManager.getName()).toBe("John")
    })
    it("should return Manager's id", () => {
        const testManager = new Manager("210B","John",5,"j@gmail.com")
        expect(testManager.getID()).toBe(5)
    })
    it("should return Manager's email", () => {
        const testManager = new Manager("210B","John",5,"j@gmail.com")
        expect(testManager.getEmail()).toBe("j@gmail.com")
    })
    it("should return Manager's office number", () => {
        const testManager = new Manager("210B","John",5,"j@gmail.com")
        expect(testManager.getOfficeNumber()).toBe("210B")
    })
    it("should override role to Manager", () => {
        const testManager = new Manager("210B","John",5,"j@gmail.com")
        expect(testManager.getRole()).toBe("Manager")
    })
})