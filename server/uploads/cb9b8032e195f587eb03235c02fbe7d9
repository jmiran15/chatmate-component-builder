# BST Node

<div id="outcomes"><details><summary></summary>

* Recognize a tree as a non-linear linked structure.

</details></div>

A tree is a **non-linear** _linked_ structure. 
We can easily repurpose the `Node` class to implement a _binary_ tree.

```java
public class BstOrderedSet<T extends Comparable<T>> 
    implements OrderedSet<T> {
  
  private Node<T> root;

  private static class Node<E> {
    E data;
    Node<E> left;
    Node<E> right;

    Node(E data) {
      this.data = data;
    }
  }

  // Other operations not shown here.
}
```

In `Node`, the `left` reference variable points to the _root_ of the left subtree, i.e., the left child of the node. Likewise, the `right` reference variable points to the _root_ of the right subtree, i.e., the right child of the node.