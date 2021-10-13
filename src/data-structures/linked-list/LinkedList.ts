class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;

  constructor(items: T[] = []) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.fromArray(items);
  }

  /**
   * Add a new Node at the BEGINNING of the LinkedList
   * @param value Value of the new Node to insert
   * @returns the updated LinkedList
   */
  unshift(value: T): LinkedList<T> {
    const newNode = new Node(value);
    if (!this.size) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return this;
  }

  /**
   * Add a new Node at the END of the LinkedList
   * @param value Value of the new Node to insert
   * @returns the updated LinkedList
   */
  push(value: T): LinkedList<T> {
    const newNode = new Node(value);
    if (!this.size) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  /**
   * Remove Node from the BEGINNING of the LinkedList
   * @returns the removed Node
   */
  shift(): Node<T> | null {
    if (!this.size) {
      return null;
    }
    const removedNode = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else if (this.head) {
      this.head = this.head?.next;
    }
    this.size--;
    return removedNode;
  }

  /**
   * Remove Node from the END of the LinkedList
   * @returns the removed Node
   */
  pop(): Node<T> | null {
    if (!this.size) {
      return null;
    }
    const removedNode = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else if (this.head) {
      let current = this.head;
      let prev = this.head;

      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
      this.tail = prev;
    }

    this.size--;
    return removedNode;
  }

  toArray() {
    if (!this.size) {
      return [];
    }
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  private fromArray(list: T[]) {
    for (const el of list) {
      this.push(el);
    }
  }
}
