// import scenarios
import reverseLinkedListScenarios from '../scenarios/reverseLinkedList.scenarios.json'

// import class
import { LinkedList } from '../src/lists'

// tests
describe('Linked List Katas', () => {
  describe('Create a Node class and a LinkedList class', () => {
    const scenarios = reverseLinkedListScenarios
    scenarios.forEach((testCase) => {
      it(`should reverse that "${testCase.input}" to "${testCase.expected}"`, () => {
        const ll = new LinkedList(testCase.input)
        expect(testCase.input).toBe(ll.toString())
        const actual = ll.reverse().toString()
        expect(actual).toBe(testCase.expected)
      })
    })
  })
})
