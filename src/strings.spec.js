import { longest } from "./strings";
import { default as longStringCases } from "../cases/longstring.cases.json";

describe("String Katas", () => {
  describe("Write a function that accepts an array of strings. Return the longest string.", () => {
    longStringCases.forEach((testCase) => {
      it(`should return "${
        testCase.expected
      }" as the longest string from this array ${JSON.stringify(
        testCase.input
      )} `, () => {
        const actual = longest(testCase.input);
        expect(actual).toBe(testCase.expected);
      });
    });
  });
});
