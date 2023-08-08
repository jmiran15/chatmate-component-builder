# Node is-a Position!

<div id="outcomes"><details><summary></summary>

* Explain how Position is different from the Node (inner) class.

</details></div>


Here is how we declare the `Node` class:

```java
private static class Node<E> implements Position<E> {
  Node<E> next;
  Node<E> prev;
  E data;
  List<E> owner;

  Node(E data, List<E> owner) {
    this.data = data;
    this.owner = owner;
  }

  @Override
  public E get() {
    return data;
  }
}
```

Notice the attribute `owner`. We use this attribute to check whether a "position" belongs to this data structure or not. 

For example, when we insert to the front of the List:

```java
public Position<T> insertFront(T data) {
  Node<T> newFront = new Node<T>(data, this);
 
  // update current front, head, tail, numElements, etc.

  return newFront;
}
```

By passing `this` to the constructor of `Node`, we set "this data structure" to be the owner of `newFront`.

We can then check if a given position belongs to this data structure:

```java
public boolean first(Position<T> position) throws PositionException {
  Node<T> node = (Node<T>) position;
  if (node.owner != this) {
    throw new PositionException();
  }

  return head == node;
}
```