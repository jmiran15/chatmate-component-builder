# Iterator Interface

<div id="outcomes"><details><summary></summary>

* Write a Java class that implements the `Iterable` interface.

</details></div>

We must implement the inherited `iterator` method in the `ArrayIndexedList`. 

```java
public class ArrayIndexedList<T> implements IndexedList<T> {

  // No changes were made to other operations.

  @Override
  public Iterator<T> iterator() {
    return Arrays.stream(data).iterator();
  }
}
```

[Java's `Arrays` class](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html) provides many utilities to work with arrays, including one to build an iterator for an array. We will shortly build our iterator from the ground up!

Note, the only addition to the `ArrayIndexedList` class is the method above. There are no other changes made (in particular, no changes made to the declaration of `ArrayIndexedList`). 

You need to import the `Iterator` interface and the `Arrays` class in the `ArrayIndexedList.java` file.

```java
import java.util.Arrays;
import java.util.Iterator;
```