export default class DisjointSet {
  root: number[];
  // Use a rank array to record the height of each vertex, i.e., the "rank" of each vertex.
  rank: number[];

  constructor(size: number) {
    this.root = Array.from({ length: size }, (el, i) => i);
    this.rank = Array(size).fill(1);
    // The initial "rank" of each vertex is 1, because each of them is
    // a standalone vertex with no connection to other vertices.
  }

  // with path compression optimization
  find(x: number): number {
    if (x == this.root[x]) return x;
    return (this.root[x] = this.find(this.root[x]));
  }

  // quick union by rank
  union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX] += 1;
      }
    }
  }

  connected(x: number, y: number): boolean {
    return this.find(x) == this.find(y);
  }
}
