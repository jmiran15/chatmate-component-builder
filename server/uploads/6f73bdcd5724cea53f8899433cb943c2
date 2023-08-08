# Tree ADT

<div id="outcomes"><details><summary></summary>

- Differentiate general (rooted) tree from a binary tree
- Recognize "Array of References" and "Leftmost-Child–Right-Sibling" representations of a general tree.

</details></div>

A general (or unrestricted) tree is one where each node has an unlimited number of children nodes.

A Tree ADT to represent a general tree may look like this:

```java
public interface Tree<T> extends Iterable<T> {
  int size();
  boolean empty();
  Position<T> insertRoot(T t) throws InsertionException;
  boolean root(Position<T> p) throws PositionException;
  Position<T> root() throws EmptyException;
  Position<T> insertChild(Position<T> p, T t) throws PositionException;
  boolean leaf(Position<T> p) throws PositionException;
  Position<T> parent(Position<T> p) throws PositionException;
  T remove(Position<T> p) throws PositionException, RemovalException;
  Iterator<T> iterator();
  Iterable<Position<T>> children(Position<T> p) throws PositionException;
}
```

A Tree ADT has utility in any application that requires hierarchical representation of data:
* File directories
* Inheritance hierarchy
* Website page structure
* Book outline
* Etc

The Tree ADT can be implemented using a linked structure such as the one we have used to represent the binary search tree. The static nested `Node` class can be updated according to the following tree representations:

1. Array of References Representation

  ```java
  private static class Node<T> {
    T data;
    ArrayList<Node<T>> children;
  }
  ```

2. Leftmost-Child–Right-Sibling Representation

  ```java
  private static class Node<T> {
    T data;
    Node<T> child;
    Node<T> sibling;
  }
  ```