# Implement the Iterator Pattern 

<div id="outcomes"><details><summary></summary>

* Appreciate that an inner class (non-static) Iterator implementation is an instance member and has access to the instance members of the outer class.

</details></div>

## Part III

It is a common practice to place the iterator class for a data structure inside the data structure class itself.

<div class="note">

In java, it is possible to define a class within another class. Such classes are known as nested (or inner) classes.

</div>

```java
public class ArrayIndexedList<T> implements IndexedList<T> {
  private final T[] data;

  // No changes were made to other operations. 

  @Override
  public Iterator<T> iterator() {
    return new ArrayIndexedListIterator();
  }

  private class ArrayIndexedListIterator implements Iterator<T> {
    private int cursor = 0;

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
}
```

There are advantages to using an _inner_ class:
- **It is a way of logically grouping classes that are only used in one place.** Suppose a class is needed by one other class only. Then, it is logical to embed it in that class and keep the two together. 
- **It increases encapsulation.** The `ArrayIndexedListIterator` needs access to `data` member of `ArrayIndexedList`. By nesting `ArrayIndexedListIterator` within class `ArrayIndexedList`, it gets access to all `ArrayIndexedList` members (including the private ones). In addition, `ArrayIndexedListIterator` itself can be hidden from the outside world (simply declare it as a `private` member).
- **It can lead to more readable and maintainable code.** Nesting small classes within top-level classes places the code closer to where it is used.

<div class="note">

We always use an inner class to implement the `Iterator` interface for a data structure in this course.

</div>

<details class="resource">
  <summary>Resources</summary>

* Oracle's Java Tutorial, [Nested Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/nested.html).
* Baeldung's [Nested Classes in Java](https://www.baeldung.com/java-nested-classes).
* TutorialsPoint [Java - Inner classes](https://www.tutorialspoint.com/java/java_innerclasses.htm).

</details>