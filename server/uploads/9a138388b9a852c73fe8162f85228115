# The convert method!

<div id="outcomes"><details><summary></summary>

- Explain how Position is different from the Node (inner) class.
- Describe the role of the convert method.

</details></div>


Open the `LinkedList.java` file in the starter code and find the helper method `convert`:

```java
// Convert a Position back into a Node.
// Guards against null positions, positions from other data structures,
// and positions that belong to other LinkedList objects.
private Node<T> convert(Position<T> position) throws PositionException {
  try {
    Node<T> node = (Node<T>) position;
    if (node.owner != this) {
      throw new PositionException();
    }
    return node;
  } catch (NullPointerException | ClassCastException e) {
    throw new PositionException();
  }
}
```

The `convert` method takes care of any situation that may require throwing the `PositionException`. You should be using this method when receiving a position as an argument. For example:

```java
public boolean first(Position<T> position) throws PositionException {
  Node<T> node = convert(position);
  return head == node;
}
```