const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {
    it("should return engineer's name", () => {
        const testEngineer = new Engineer("john's github","John",5,"j@gmail.com")
        expect(testEngineer.getName()).toBe("John")
    })
    it("should return engineer's id", () => {
        const testEngineer = new Engineer("john's github","John",5,"j@gmail.com")
        expect(testEngineer.getID()).toBe(5)
    })
    it("should return engineer's email", () => {
        const testEngineer = new Engineer("john's github","John",5,"j@gmail.com")
        expect(testEngineer.getEmail()).toBe("j@gmail.com")
    })
    it("should return engineer's github name", () => {
        const testEngineer = new Engineer("john's github","John",5,"j@gmail.com")
        expect(testEngineer.getGithub()).toBe("john's github")
    })
    it("should override role to engineer", () => {
        const testEngineer = new Engineer("john's github","John",5,"j@gmail.com")
        expect(testEngineer.getRole()).toBe("Engineer")
    })
})