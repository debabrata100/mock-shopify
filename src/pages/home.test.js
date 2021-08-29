const home = require("./home")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new home.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
