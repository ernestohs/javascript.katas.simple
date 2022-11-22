// import scenarios
import armstrongNumberscenarios from '../scenarios/armstrong.scenarios.json'

// import functions
import { armstrong } from '../src/numbers'

// tests
describe('Number Katas', () => {
  describe('An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits. Determine if the input number is an Armstrong number. Return either true or false.', () => {
    const cases = armstrongNumberscenarios
    cases.forEach((testCase) => {
      it(`should say that "${testCase.input}" ${testCase.expected ? 'is' : 'is not'} an armstrong number`, () => {
        const actual = armstrong(testCase.input)
        expect(actual).toBe(testCase.expected)
      })
    })
  })
})
