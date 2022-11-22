// import cases
import longestCases from './mock/longstring.cases.json'
import stringModeCases from './mock/stringmode.cases.json'
import anagramCases from './mock/anagram.cases.json'
import balancedBracketsCases from './mock/brackets.cases.json'
import palindromeCases from './mock/palindrome.cases.json'

// import functions
import { longest, stringMode, anagram, areBracketsBalanced, palindrome } from '../src/strings'

// tests
describe('String Katas', () => {
  describe('Function that accepts an array of strings. Returns the longest string.', () => {
    const cases = longestCases
    cases.forEach((testCase) => {
      it(`should return (${testCase.expected}) as the longest string from this array ${JSON.stringify(
        testCase.input
      )} `, () => {
        const actual = longest(testCase.input)
        expect(actual).toBe(testCase.expected)
      })
    })
  })

  describe('Function that takes a string. Returns the most commonly used character.', () => {
    const cases = stringModeCases
    cases.forEach((testCase) => {
      it(`should get the character "${testCase.expected}" from the string "${testCase.input}"`, () => {
        const actual = stringMode(testCase.input)
        expect(actual).toBe(testCase.expected)
      })
    })
  })

  describe('Function that takes an array of two strings as a parameter. Returns a boolean that indicates whether or not the first string is an anagram of the second string.', () => {
    const cases = anagramCases
    cases.forEach((testCase) => {
      it(`should say that "${testCase.input[0]}" ${testCase.expected ? 'is' : 'is not'} an anagram of "${
        testCase.input[1]
      }"`, () => {
        const actual = anagram(testCase.input)
        expect(actual).toBe(testCase.expected)
      })
    })
  })

  describe('Given a string with 3 possible types of braces: {}, [], (). Return a boolean indicating wether or not string containst a valid nesting pattern.', () => {
    const cases = balancedBracketsCases
    cases.forEach((testCase) => {
      it(`should say that "${testCase.input}" ${testCase.expected ? 'is' : 'is not'} balanced`, () => {
        const actual = areBracketsBalanced(testCase.input)
        expect(actual).toBe(testCase.expected)
      })
    })
  })

  describe('Given a string, write a function that will return whether or not that string is a palindrome.', () => {
    const cases = palindromeCases
    cases.forEach((testCase) => {
      it(`should say that "${testCase.input}" ${testCase.expected ? 'is' : 'is not'} a palindrome`, () => {
        const actual = palindrome(testCase.input)
        expect(actual).toBe(testCase.expected)
      })
    })
  })
})
