import { Node } from '../../models';

export function createLinkedListFromArray<T>(arr: Node<T>[]) {
  if (!arr || arr.length === 0) {
    return null;
  }
  const head = new Node(arr[0]);
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    const node = new Node(arr[i]);
    prev.next = node;
    prev = node;
  }

  return head;
}
