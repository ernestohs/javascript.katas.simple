import { armstrong } from "./numbers";
import { default as armstrongNumberCases } from "../cases/armstrong.cases.json";

describe("Number Katas", () => {
  describe("An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits. Determine if the input number is an Armstrong number. Return either true or false.", () => {
    armstrongNumberCases.forEach((testCase) => {
      it(`should say that "${testCase.input}" ${
        testCase.expected ? "is" : "is not"
      } an armstrong number`, () => {
        const actual = armstrong(testCase.input);
        expect(actual).toBe(testCase.expected);
      });
    });
  });
});
