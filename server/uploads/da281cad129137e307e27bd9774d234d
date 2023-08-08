# Stack Interface

<div id="outcomes"><details><summary></summary>

- Identify the operation of Stack ADT.
- Describe the difference between top and pop.

</details></div>

Here is the `Stack` interface which we use in this course:

```java
/**
 * Stack ADT.
 *
 * @param <T> base type.
 */
public interface Stack<T> {

  /**
   * Checks if empty.
   *
   * @return true if this stack is empty and false otherwise.
   */
  boolean empty();

  /**
   * Peeks at top value without removing it.
   *
   * @return the value at the top of this stack.
   * @throws EmptyException when empty() == true.
   */
  T top() throws EmptyException;

  /**
   * Removes the top element.
   *
   * @throws EmptyException when empty() == true.
   */
  void pop() throws EmptyException;

  /**
   * Adds a new element to top of stack.
   *
   * @param t value to be added to the top of this stack.
   *          Post: top() == t
   */
  void push(T t);
}
```

Make a note of `pop` and `top`:

* `pop` removes the top element but does not return it.
* `top` returns the top element but does not remove it.