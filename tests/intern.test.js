const Intern = require('../lib/Intern.js');

describe("Intern", () => {
    it("should return Intern's name", () => {
        const testIntern = new Intern("John",5,"j@gmail.com", "university")
        expect(testIntern.getName()).toBe("John")
    })
    it("should return Intern's id", () => {
        const testIntern = new Intern("John",5,"j@gmail.com", "university")
        expect(testIntern.getID()).toBe(5)
    })
    it("should return Intern's email", () => {
        const testIntern = new Intern("John",5,"j@gmail.com", "university")
        expect(testIntern.getEmail()).toBe("j@gmail.com")
    })
    it("should return Intern's school", () => {
        const testIntern = new Intern("John",5,"j@gmail.com", "university")
        expect(testIntern.getSchool()).toBe("university")
    })
    it("should override role to Intern", () => {
        const testIntern = new Intern("John",5,"j@gmail.com", "university")
        expect(testIntern.getRole()).toBe("Intern")
    })
})