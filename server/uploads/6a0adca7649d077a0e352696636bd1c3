# Implement the Iterator Pattern 

<div id="outcomes"><details><summary></summary>

* Write a Java class that implements the `Iterator` interface.

</details></div>

## Part II

Here is an implementation for `hasNext` and `next` methods:

```java
public class ArrayIndexedListIterator<T> implements Iterator<T> {
  private T[] data;
  private int cursor;

  public ArrayIndexedListIterator(T[] data) {
    this.data = data;
    this.cursor = 0;
  }

  @Override
  public boolean hasNext() {
    return cursor < data.length;
  }

  @Override
  public T next() {
    if (!hasNext()) {
      throw new NoSuchElementException();
    }
    return data[cursor++];
  }
} 
```

Notes:

* We need to point to the data (elements) stored in the data structure we want to iterate over (the `ArrayIndexedList` here). Thus, we keep a reference (`data`) in the implementation provided here, which the constructor initializes.
* We use the `cursor` to keep track of the current element. The `cursor` is the index position of the current element. A "cursor" is not always as simple as an "index." Depending on the data structure, the "cursor" may require complex implementation.
* `hasNext` is true if the `cursor` has not reached the last element.
* `next` returns the current element pointed by the `cursor` <u>and advances the `cursor`.</u>
* `next` should throw `NoSuchElementException` when a client calls it after the iteration is over.


Now, update the implementation of `ArrayIndexedList.iterator` to use `ArrayIndexedListIterator`:

```java
public class ArrayIndexedList<T> implements IndexedList<T> {

  // No changes were made to other operations.

  @Override
  public Iterator<T> iterator() {
    return new ArrayIndexedListIterator<>(this.data);
  } 
}
```

Run the tests and make sure they all pass!