# `Iterable` Interface

<div id="outcomes"><details><summary></summary>

* Declare an Iterable ADTs.

</details></div>

It is easy to declare that `IndexedList` ADT is _iterable_:

```java
/**
 * IndexedList ADT.
 * @param <T> the base type of the items in the IndexedList.
 */
public interface IndexedList<T> extends Iterable<T> {

  // No changes were made to the declaration of operations.

}
```

By inheritance, the `IndexedList` ADT now contains the following method declaration (inherited from the `Iterable` interface):

```java
/**
  * Returns an iterator over elements of this collection.
  *
  * @return an Iterator.
  */
Iterator<T> iterator();
```

Any class that implements `IndexedList` (such as `ArrayIndexedList`) must provide an implementation for the `iterator` method.