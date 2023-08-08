# Right Rotation: Exercise IV

<div id="outcomes"><details><summary></summary>

* Implement Single Right Rotation.

</details></div>

Consider the schematic representation of the pattern that leads to a (single) right rotation:

<div class="center">
<img src="/img/19/avl23.png" width="80%">
</div>

The nodes with dashed lines are roots of their own subtree (they could be null too). After the application of a right rotation, we get the following:

<div class="center">
<img src="/img/19/avl24.png" width="80%">
</div>

<span class="tag">Exercise</span> Complete the implementation of `rightRotation` method:

```java
Node<T> rightRotation (Node<T> root) {
  // TODO Implement me!
}
```

**Note:** The argument to `rightRotation` is the root of a subtree (not necessarily the root of the BST). The `rightRotation` must return the updated (new) root. Assume each node has access to its left/right subtrees.

<details class="solution" data-release="Mar 27, 2023 17:00:00">
<summary>Solution</summary>

```java
Node<T> rightRotation (Node<T> root) {
  Node<T> child = root.left;
  root.left = child.right;
  child.right = root;
  return child;
}
```

</details>

<span class="tag">Exercise</span> What is the time complexity of your implementation of `rightRotation` method?

<details class="solution" data-release="Mar 27, 2023 17:00:00">
<summary>Solution</summary>

The `rightRotation` involves a constant number of assignments. Therefore, its time complexity is $\Omicron(1)$

</details>





