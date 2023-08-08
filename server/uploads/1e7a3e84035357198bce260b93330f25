# Java's Comparator

<div id="outcomes"><details><summary></summary>

* Explain the difference between Comparable and Comparator interfaces.

</details></div>

Java's `Comparator<T>` is an interface that defines a `compare(T o1, T o2)` method with two arguments that represent compared objects.

The `compare` method works similarly to the `Comparable.compareTo()` method:

* return $0$ when two objects `o1` and `o2` are equal.
* return a value $> 0$ when the first object is greater than the second one.
* return a value $< 0$ when the first object is less than the second one.

So to give a higher "order" to a student with fewer prior submissions, we must create the following Comparator:

```java
private static class LessSubmissionHigherPriority 
  implements Comparator<Submission> {

  @Override
  public int compare(Submission s1, Submission s2) {
    return s1.getNumPriorSubmission() - s2.getNumPriorSubmission();
  }
}
```

We can (just to have fun) create a Comparator to reverse the natural ordering of submissions:

```java
private static class ReverseNaturalOrdering 
  implements Comparator<Submission> {

  @Override
  public int compare(Submission s1, Submission s2) {
    // notice s2 is compared to s1, the order matters!
    return s2.compareTo(s1);
  }
}
```

The following Comparator would meet the natural ordering of submissions:

```java
private static class NaturalOrdering 
  implements Comparator<Submission> {

  @Override
  public int compare(Submission s1, Submission s2) {
    return s1.compareTo(s2);
  }
}
```

I encourage you to use the "demo" (`Main.java` in the `demo` package of the starter code) to experiment with Comparators.

<details class="resource">
<summary>Resources</summary>

* Baeldung's article on [Comparator and Comparable in Java](https://www.baeldung.com/java-comparator-comparable).

</details>
