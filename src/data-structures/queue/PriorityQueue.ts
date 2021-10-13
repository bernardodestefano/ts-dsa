import MinHeap from '../tree/MinHeap';

export default class PriorityQueue<T> {
  heap: MinHeap<T>;
  constructor() {
    this.heap = new MinHeap();
  }

  enqueue(item: T): number {
    this.heap.insert(item);
    return this.size();
  }

  dequeue(): T | undefined {
    return this.heap.extractMin();
  }

  peek(): T | undefined {
    return this.heap.peek();
  }

  size() {
    return this.heap.getCount();
  }
}
