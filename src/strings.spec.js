import {
  anagram,
  longest,
  stringMode,
  palindrome,
  areBracketsBalanced,
} from "./strings";
import { default as longStringCases } from "../cases/longstring.cases.json";
import { default as stringModeCases } from "../cases/stringmode.cases.json";
import { default as anagramCases } from "../cases/anagrams.cases.json";
import { default as balancedBracketsCases } from "../cases/brackets.cases.json";
import { default as palindromeCases } from "../cases/palindromeCases.cases.json";

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

  describe("Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.", () => {
    anagramCases.forEach((testCase) => {
      const [first] = testCase.input;
      const [, second] = testCase.input;
      it(`should say that "${first}" ${
        testCase.expected ? "is" : "is not"
      } an anagram of "${second}"`, () => {
        const actual = anagram(...testCase.input);
        expect(actual).toBe(testCase.expected);
      });
    });
  });

  describe("Given a string possibly containing three types of braces ({}, [], ()), write a function that returns a Boolean indicating whether the given string contains a valid nesting of braces.", () => {
    balancedBracketsCases.forEach(({ input, expected }) => {
      it(`should say that "${input}" ${
        expected ? "is" : "is not"
      } balanced`, () => {
        const actual = areBracketsBalanced(input);
        expect(actual).toBe(expected);
      });
    });
  });

  describe("Given a string, write a function that will return whether or not that string is a palindrome.", () => {
    palindromeCases.forEach((testCase) => {
      it(`should say that "${testCase.input}" ${
        testCase.expected ? "is" : "is not"
      } a palindrome`, () => {
        const actual = palindrome(testCase.input);
        expect(actual).toBe(testCase.expected);
      });
    });
  });
  
});
