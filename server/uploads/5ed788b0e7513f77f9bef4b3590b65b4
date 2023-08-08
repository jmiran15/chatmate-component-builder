# Selection Sort: The Code

<div id="outcomes"><details><summary></summary>

- Understand the implementation of selection sort.
- Understand the use and operations of the SortingAlgorithm interface.
- Understand the use and operation of Java's Comparable interface.

</details></div>


Please download the starter code for this chapter. 

Here is how we have implemented selection sort:

```java
/**
 * The basic Selection Sort algorithm.
 *
 * @param <T> Element type.
 */
public final class SelectionSort<T extends Comparable<T>>
    implements SortingAlgorithm<T> {

  // is a less than b?
  private boolean less(T a, T b) {
    return a.compareTo(b) < 0;
  }

  @Override
  public void sort(IndexedList<T> indexedList) {
    // We try to put "correct" values into a[0], a[1], ... a[n-2];
    // once a "correct" value is in a[n-2], the very last value
    // has to be the largest one anyway; thus it's also "correct".
    for (int i = 0; i < indexedList.length() - 1; i++) {
      // We're trying to put the "correct" element in a[i].
      // We need to find the smallest element in a[i..n-1].
      // We start by assuming a[i] is the smallest one.
      int min = i;
      // Now we try to find a smaller one in a[i+1..n-1].
      for (int j = i + 1; j < indexedList.length(); j++) {
        if (this.less(indexedList.get(j), indexedList.get(min))) {
          min = j;
        }
      }
      // Now we have the "true" minimum at a[min], and we
      // swap it with a[i], unless i == min of course.
      if (min != i) {
        T t = indexedList.get(i);
        indexedList.put(i, indexedList.get(min));
        indexedList.put(min, t);
      }
    }
  }

  @Override
  public String name() {
    return "Selection Sort";
  }
}
```

<details class="resource">
<summary>Frequently asked questions!</summary>

**Q:** Why `SelectionSort` implements `SortingAlgorithm`?

<details class="resource">
<summary>Answer</summary>

`SortingAlgorithm` is an interface we provided which encapsulates the essence of a sorting algorithm:

```java
public interface SortingAlgorithm<T extends Comparable<T>> {
  void sort(IndexedList<T> list);
  String name();
}
```
Given an object of `SortingAlgorithm`, we can (a) ask it to sort a given `IndexedList` and (b) ask it for its name (e.g., "Selection Sort").

</details>

**Q:** Why the generic parameter `T` extends `Comparable<T>`?

<details class="resource">
<summary>Answer</summary>

Things to be sorted need an *order*, and we need a way to compare items, not just for equality (there's an `equals()` method on all objects) but for less-than and greater-than as well.

Therefore, we need a **bounded** type parameter. The elements to be sorted (of type `T`) must be `Comparable`. That, in turn, ensures that we have a method `compareTo()` that we can use to establish order. 

</details>

**Q:** What is `Comparable`?

<details class="resource">
<summary>Answer</summary>

It is an interface in Java.  

```java
public interface Comparable<T> {
  /**
  * Compares this object with the specified object for order.
  *
  * @param  o the object to be compared.
  * @return a negative integer, zero, or a positive integer 
  *         as this object is less than, equal to, or greater 
  *         than the specified object.
  */
  int compareTo(T o);
}
```

* Most Java built-in types implement `Comparable` (e.g. `String`, `Integer`, etc.)

* We implement this interface in many classes, particularly if we want to sort a collection of their objects.

See [Comparable](https://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html) on Oracle's website for more.

</details>

**Q:** Why is there a `less` method?

<details class="resource">
<summary>Answer</summary>

The `less` method encapsulates the notion of comparing two elements: "is `a` less than `b`?". It simply makes for a more readable code that is easier to update if the notion of "$<$" changes.  

</details>

</details>