import { LinkedList } from "./lists";
import { default as reverseLinkedListCases } from "../cases/reverseLinkedList.cases.json";

describe("Linked List Katas", () => {
  describe("Create a Node class and a LinkedList class", () => {
    reverseLinkedListCases.forEach((testCase) => {
      it(`should reverse that "${testCase.input}" to "${testCase.expected}"`, () => {
        const list = new LinkedList(testCase.input);
        expect(testCase.input).toBe(list.toString());
        const actual = list.reverse().toString();
        expect(actual).toBe(testCase.expected);
      });
    });
  });
});
