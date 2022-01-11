export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {

  constructor(seed) {
    this.head = null;
    if (seed) {
      seed.split(",").map((value) => {
        const node = new Node(value);
        if (!this.tail) {
          this.head = node;
          this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
      });
    }
  }

  getFirst = () => this.head;
  getLast = () => this.tail;

  reverse() {
    let prev = null;
    let curr = this.head;
    let next = curr.next;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;

    return this;
  }

  toString() {
    let result = [];
    let cursor = this.head;

    do {
      result.push(`${cursor.data}`);
      cursor = cursor.next;
    } while (cursor);

    return result.join(",");
  }
}
