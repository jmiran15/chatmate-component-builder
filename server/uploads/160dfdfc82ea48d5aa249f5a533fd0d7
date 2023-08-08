# Overloaded Constructors

<div id="outcomes"><details><summary></summary>

* Explain the role of the overloaded non-default constructor of PriorityQueue.

</details></div>

<div class="note">

Any implementation of `PriorityQueue` *must* provide <u>two</u> constructors: a default constructor (with no argument) and a non-default one which allows a Comparator to be provided to _overwrite_ the natural ordering of the element types. 

</div>

Consider the following example!

```java
/**
 * Priority queue implemented as a binary heap.
 *
 * @param <T> Element type.
 */
public class BinaryHeapPriorityQueue<T extends Comparable<T>>
    implements PriorityQueue<T> {

  private Comparator<T> cmp;

  /**
   * A binary heap using the "natural" ordering of T.
   */
  public BinaryHeapPriorityQueue() {
    this(new DefaultComparator<>());
  }

  /**
   * A binary heap using the given comparator for T.
   *
   * @param cmp Comparator to use.
   */
  public BinaryHeapPriorityQueue(Comparator<T> cmp) {
    this.cmp = cmp;
    // TODO
  }

  @Override
  public void insert(T t) {
    // TODO
  }

  @Override
  public void remove() throws EmptyException {
    // TODO
  }

  @Override
  public T best() throws EmptyException {
    // TODO
    return null;
  }

  @Override
  public boolean empty() {
    // TODO
    return false;
  }

  // The default comparator uses the "natural" ordering.
  private static class DefaultComparator<T extends Comparable<T>>
      implements Comparator<T> {
    public int compare(T t1, T t2) {
      return t1.compareTo(t2);
    }
  }

}
```

Notice the use of `Comparator<T>`! Java's `Comparator<T>` is an interface that defines a `compare(T o1, T o2)` method with two arguments that represent compared objects.

In the next sections, we will work with a contrived example to clarify how the *Comparator* works and how it is different from *Comparable*.