# IndexedList ADT Review

<div id="outcomes"><details><summary></summary>

* Recall the IndexedList ADT declared using a Java interface.

</details></div>


Here is the `IndexedList` ADT from the last chapter:

```java
/**
 * IndexedList ADT.
 */
public interface IndexedList {

  /**
   * Change the value at the given index.
   *
   * @param index representing a position in this list.
   *              Pre: 0 <= index < length
   * @param value to be written at the given index.
   *              Post: this.get(index) == value
   */
  void put(int index, int value);

  /**
   * Retrieve the value stored at the given index.
   *
   * @param index representing a position in this list.
   *              Pre: 0 <= index < length
   * @return value at the given index.
   */
  int get(int index);

  /**
   * Get the declared capacity of this list.
   *
   * @return the length
   *         Inv: length() >= 0
   */
  int length();
}
```

<div class="note">

The `IndexedList` ADT is an abstraction of _list_: a sequential set of elements to which you can add and access (get) data using an _index_. The index is a non-negative integer representing the data position in the sequence.

</div>
