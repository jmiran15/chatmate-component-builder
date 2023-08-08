# PriorityQueue Interface

<div id="outcomes"><details><summary></summary>

* Describe the core operations of Priority Queue.

</details></div>

Here is an interface for the PriorityQueue ADT.

```java
/**
 * Priority Queue of ordered values.
 *
 * @param <T> Element type.
 */
public interface PriorityQueue<T extends Comparable<T>> {
  /**
   * Insert a value.
   *
   * @param t Value to insert.
   */
  void insert(T t);

  /**
   * Remove best value.
   *
   * @throws EmptyException If queue is empty.
   */
  void remove() throws EmptyException;

  /**
   * Return best value.
   *
   * @return best value in the queue.
   * @throws EmptyException If queue is empty.
   */
  T best() throws EmptyException;

  /**
   * Check if no elements present.
   *
   * @return True if queue is empty, false otherwise.
   */
  boolean empty();
}
```

Notice the elements of PriorityQueue must be Comparable. 

<div class="note">

By default, a PriorityQueue will order (prioritize) the elements based on their _natural ordering_. 

</div>

<details class="resource">
<summary>What is "natural" ordering?</summary>

<div class="note">

Natural ordering, here, means the default ordering of objects of a specific type when they are sorted in an array or a collection. 

</div>

For example, the natural ordering of `String` objects is alphabetic order. On the other hand, the natural ordering of `Date` objects is chronological order. 

Java allows you to define the natural ordering of objects of a specific type by implementing `Comparable` interface.

<div class="note">

A class that implements the `Comparable` interface is said to have a natural ordering. And, the `compareTo()` method is called the natural comparison method.

</div>

</details>

<details class="resource">
<summary>Where are the "priorities"?</summary>

We are taking the natural ordering of elements to indicate their priority! For example, the smallest element has the least priority and the largest element has the highest priority. 

We could provide the priorities separately. Then, the interface would look like this:

```java
/**
 * Priority Queue of ordered values.
 *
 * @param <P> Priority type.
 * @param <T> Element type.
 */
public interface PriorityQueue<P extends Comparable<P>, T> {
  /**
   * Insert a value.
   * @param t Priority associated with the value.
   * @param t Value to insert.
   */
  void insert(P p, T t);

  // Other operations are not shown!
```

In the case above, the priorities are associated with values just like "keys" are associated with values in an ordered dictionary (why not an ordered map?). However, we don't have a method to get a value given its priority! The priority queue is more of a "restricted access" data structure like a queue and stack. 

</details>

The `best` can be defined to return the largest (maximum) or smallest (minimum) value. By a contract, we may define `best` to return the largest value.

As a further clarifying point, recall a queue is not a set, so duplicate values are allowed.