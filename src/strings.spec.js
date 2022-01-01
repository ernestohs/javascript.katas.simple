import { longest, stringMode } from "./strings";
import { default as longStringCases } from "../cases/longstring.cases.json";
import { default as stringModeCases } from "../cases/stringmode.cases.json";

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

  describe("Write a function that takes a string, and returns the character that is most commonly used in the string.", () => {
    stringModeCases.forEach((testCase) => {
      it(`should get the character "${testCase.expected}" from the string "${testCase.input}"`, () => {
        const actual = stringMode(testCase.input);
        expect(actual).toBe(testCase.expected);
      });
    });
  });
});
