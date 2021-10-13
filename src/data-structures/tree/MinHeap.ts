export default class MinHeap<T> {
  items: Array<T>;

  constructor(items: T[] = []) {
    this.items = [];
    this.buildHeap(items);
  }

  /**
   * Add a new item to the Heap
   * @param item the value of the new Heap's item
   */
  insert(item: T): void {
    this.items.push(item);
    this.heapifyUp(this.getCount() - 1);
  }

  /**
   * Extract MIN value
   * @returns the MIN value in the Heap if exist, undefined otherwise
   */
  extractMin(): T | undefined {
    if (!this.getCount()) {
      return undefined;
    }
    const MIN = this.items[0];

    this.swap(0, this.getCount() - 1);
    this.items.pop();
    this.heapifyDown(0);

    return MIN;
  }

  /**
   * Perform a pop without actually removing the item
   * @returns Min value
   */
  peek(): T | undefined {
    if (!this.isEmpty()) return this.items[0];
  }

  isEmpty() {
    return !!this.items.length;
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return this.items.length;
  }

  private buildHeap(items: T[]) {
    if (items && items.length) {
      for (const item of items) {
        this.insert(item);
      }
    }
  }

  private heapifyUp(index: number) {
    if (index < 0 || index > this.getCount() - 1) return;
    const parentIdx = this.parent(index);
    if (this.items[parentIdx] > this.items[index]) {
      this.swap(parentIdx, index);
      this.heapifyUp(parentIdx);
    }
  }

  private heapifyDown(index: number) {
    if (this.isLeaf(index) || index < 0 || index > this.getCount() - 1) return;

    const leftIdx = this.leftChild(index);
    const rightIdx = this.rightChild(index);
    let minIdx = index;

    if (this.items[leftIdx] < this.items[minIdx]) minIdx = leftIdx;
    if (this.items[rightIdx] <= this.items[minIdx]) minIdx = rightIdx;

    if (minIdx !== index) {
      this.swap(index, minIdx);
      this.heapifyDown(minIdx);
    }
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return 2 * index + 1;
  }
  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  private isLeaf(index: number): boolean {
    return (
      index >= Math.floor(this.getCount() / 2) && index <= this.getCount() - 1
    );
  }

  private swap(i: number, j: number): void {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }
}
