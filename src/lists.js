export class Node {
  constructor(value, nextNode) {
    this.value = value
    this.nextNode = nextNode
  }
  getValue() {
    return this.value
  }
  getNextNode() {
    return this.nextNode
  }
  setNextNode(nextNode) {
    this.nextNode = nextNode
  }
}

export class LinkedList {
  constructor(commaSeparatedValues) {
    this.length = 0
    const nodes = commaSeparatedValues.split(',').map((value) => new Node(value))
    nodes.forEach((node, index, array) => {
      this.setHead(node, array[index - 1])
    })
  }

  setHead(node, next) {
    this.length++
    if (next) {
      node.setNextNode(next)
    }
    this.head = node
  }

  /**
   * Returns string with the comma separated values of each node ("a,b,c").
   * @returns string
   */
  toString() {
    let cursor = this.head
    const array = []
    // perform at least once in case 1 node length
    array.push(cursor.getValue())
    while (cursor.nextNode) {
      cursor = cursor.getNextNode()
      array.push(cursor.getValue())
    }
    return array.reverse().join()
  }

  /**
   * Returns new LinkedList in reverse order
   * @returns A new LinkedList object with the reversed string.
   */
  reverse() {
    const seed = this.toString()
    const list = new LinkedList(seed.split('').reverse().join(''))
    return list
  }
}
