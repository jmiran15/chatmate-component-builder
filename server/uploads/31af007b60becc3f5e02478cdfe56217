# Queue Interface

<div id="outcomes"><details><summary></summary>

- Identify the operation of Queue ADT.
- Describe the difference between `enqueue` and `dequeue`.

</details></div>


Here is the `Queue` interface which we use in this course:

```java
/**
 * Queue ADT.
 *
 * @param <T> base type.
 */
public interface Queue<T> {

  /**
   * Adds a new element to the back of this queue.
   *
   * @param value to be added
   */
  void enqueue(T value);

  /**
   * Removes the element at the front of this queue.
   *
   * @throws EmptyException when empty() == true.
   */
  void dequeue() throws EmptyException;

  /**
   * Peeks at the front value without removing it.
   *
   * @return the value at the front of this queue.
   * @throws EmptyException when empty() == true.
   */
  T front() throws EmptyException;

  /**
   * Checks if empty.
   *
   * @return true if this queue is empty and false otherwise.
   */
  boolean empty();
}
```

Make note of `enqueue` and `dequeue`: one adds the other removes. Also, there is a `front` which allows you to peek at the front of the queue without removing the front element. 