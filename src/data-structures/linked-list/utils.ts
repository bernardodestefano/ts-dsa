import { ListNode } from '../../models';

export function createLinkedListFromArray<T>(arr: ListNode<T>[]) {
  if (!arr || arr.length === 0) {
    return null;
  }
  const head = new ListNode(arr[0]);
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    prev.next = node;
    prev = node;
  }

  return head;
}
