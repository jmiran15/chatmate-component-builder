# Ordered Set

<div id="outcomes"><details><summary></summary>

* Explain the difference between the Set ADT and the OrderedSet ADT.

</details></div>

An ordered-set is an *iterable* collection of **ordered** *unique* elements. The elements are expected to be iterated over in order, <u>based on their values</u>.


```java
/**
 * Ordered set of arbitrary values.
 * Iteration order is based on the values.
 *
 * @param <T> Element type.
 */
public interface OrderedSet<T extends Comparable<T>> extends Set<T> {
  // Same operations as the Set ADT
}
```

Notice we must use _bounded generics_ to ensure the elements are comparable (otherwise, we cannot put them in order).