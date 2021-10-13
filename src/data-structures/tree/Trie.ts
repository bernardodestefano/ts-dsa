class TrieNode<T> {
  terminal: boolean;
  children: Map<string, TrieNode<T>>;

  constructor() {
    this.children = new Map();
    this.terminal = false;
  }
}
export default class Trie<T> {
  root: TrieNode<T>;
  constructor() {
    this.root = new TrieNode<T>();
  }

  insert(s: string): void {
    let curr: TrieNode<T> = this.root;

    for (const c of s) {
      if (!curr.children.has(c)) {
        curr.children.set(c, new TrieNode<T>());
      }
      const nextNode = curr.children.get(c);
      if (nextNode) {
        curr = nextNode;
      }
    }
    if (curr !== this.root) {
      curr.terminal = true;
    }
  }

  search(s: string): boolean {
    let curr = this.root;

    for (const c of s) {
      if (!curr.children.has(c)) {
        return false;
      }
      const nextNode = curr.children.get(c);
      if (nextNode) {
        curr = nextNode;
      }
    }

    return curr.terminal;
  }
  startsWith(p: string): boolean {
    let curr = this.root;

    for (const c of p) {
      if (!curr.children.has(c)) {
        return false;
      }
      const nextNode = curr.children.get(c);
      if (nextNode) {
        curr = nextNode;
      }
    }
    return true;
  }
}
