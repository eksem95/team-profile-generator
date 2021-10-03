const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {
    it("should return engineer's name", () => {
        const testEngineer = new Engineer("John",5,"j@gmail.com", "john's github")
        expect(testEngineer.getName()).toBe("John")
    })
    it("should return engineer's id", () => {
        const testEngineer = new Engineer("John",5,"j@gmail.com", "john's github")
        expect(testEngineer.getID()).toBe(5)
    })
    it("should return engineer's email", () => {
        const testEngineer = new Engineer("John",5,"j@gmail.com", "john's github")
        expect(testEngineer.getEmail()).toBe("j@gmail.com")
    })
    it("should return engineer's github name", () => {
        const testEngineer = new Engineer("John",5,"j@gmail.com", "john's github")
        expect(testEngineer.getGithub()).toBe("john's github")
    })
    it("should override role to engineer", () => {
        const testEngineer = new Engineer("John",5,"j@gmail.com", "john's github")
        expect(testEngineer.getRole()).toBe("Engineer")
    })
})