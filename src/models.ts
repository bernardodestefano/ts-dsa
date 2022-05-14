export class ListNode<T> {
  constructor(public val: T, public next?: ListNode<T>) {}
}

export class TreeNode<T> {
  constructor(
    public val: T,
    public left?: TreeNode<T>,
    public right?: TreeNode<T>
  ) {}
}
