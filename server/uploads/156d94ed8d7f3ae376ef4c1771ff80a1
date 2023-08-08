# The List ADT: Generic Positional List

<div id="outcomes"><details><summary></summary>

- Enumerate the core operations of List ADT
- Describe the difference between similar operations (e.g., `front` vs. `removeFront`)

</details></div>


Here is the List ADT, which is an abstraction build on top of the doubly linked list:

```java
/**
 * Generic positional list abstraction.
 *
 * @param <T> Element type.
 */
public interface List<T> extends Iterable<T> {
  /**
   * Number of elements in this list.
   *
   * @return Number of elements.
   */
  int length();

  /**
   * List is empty or not.
   *
   * @return True if empty, false otherwise.
   */
  boolean empty();

  /**
   * Insert at the front of this list.
   *
   * @param data Element to insert.
   * @return Position created to hold element.
   */
  Position<T> insertFront(T data);

  /**
   * Insert at the back of this list.
   *
   * @param data Element to insert.
   * @return Position created to hold element.
   */
  Position<T> insertBack(T data);

  /**
   * Insert before a position.
   *
   * @param p Position to insert before.
   * @param data Element to insert.
   * @return Position created to hold element.
   * @throws PositionException If p is invalid for this list.
   */
  Position<T> insertBefore(Position<T> p, T data) throws PositionException;

  /**
   * Insert after a position.
   *
   * @param p Position to insert after.
   * @param data Element to insert.
   * @return Position created to hold element.
   * @throws PositionException If p is invalid for this list.
   */
  Position<T> insertAfter(Position<T> p, T data) throws PositionException;

  /**
   * Remove a position.
   *
   * @param p Position to remove.
   * @throws PositionException If p is invalid for this list.
   */
  void remove(Position<T> p) throws PositionException;

  /**
   * Remove from the front of this list.
   *
   * @throws EmptyException If this list is empty.
   */
  void removeFront() throws EmptyException;

  /**
   * Remove from the back of this list.
   *
   * @throws EmptyException If this list is empty.
   */
  void removeBack() throws EmptyException;

  /**
   * First position.
   *
   * @return First position.
   * @throws EmptyException If this list is empty.
   */
  Position<T> front() throws EmptyException;

  /**
   * Last position.
   *
   * @return Last position.
   * @throws EmptyException If this list is empty.
   */
  Position<T> back() throws EmptyException;

  /**
   * This position is the first position or not.
   *
   * @param p Position to examine.
   * @return True if p is the first position, false otherwise.
   * @throws PositionException If p is invalid for this list.
   */
  boolean first(Position<T> p) throws PositionException;

  /**
   * This position is the last position or not.
   *
   * @param p Position to examine.
   * @return True if p is the last position, false otherwise.
   * @throws PositionException If p is invalid for this list.
   */
  boolean last(Position<T> p) throws PositionException;

  /**
   * Next position.
   *
   * @param p Position to examine.
   * @return Position after p.
   * @throws PositionException If p is invalid or the last position.
   */
  Position<T> next(Position<T> p) throws PositionException;

  /**
   * Previous position.
   *
   * @param p Position to examine.
   * @return Position before p.
   * @throws PositionException If p is invalid or the first position.
   */
  Position<T> previous(Position<T> p) throws PositionException;

  /**
   * Returns an iterator "going forward" over list elements of type T.
   * The standard iterator() method creates one of these.
   *
   * @return Iterator going from front to back.
   */
  Iterator<T> forward();

  /**
   * Returns an iterator "going backward" over list elements of type T.
   *
   * @return Iterator going from back to front.
   */
  Iterator<T> backward();
}
```

Notes:

* You can insert/remove from either end.
* You can insert/remove in between given a "position."
* There are several "getter" methods to access, e.g., front, back, and the next or previous positions given a "position."
* There are <u>three iterators</u>: forward, backward, and a default one inherited from Iterable.