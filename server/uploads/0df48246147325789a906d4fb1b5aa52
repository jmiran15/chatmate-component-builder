# Sorting Submissions

<div id="outcomes"><details><summary></summary>

* Describe how the "natural ordering" of objects is established in Java.

</details></div>

Suppose we have a collection of submissions. We want to sort the collection according to the "natural ordering" of its elements. 

<div class="note">

Natural ordering, as noted before, means the default ordering of objects of a specific type when they are sorted in an array or a collection. 

</div>

For example, the natural ordering of `String` objects is alphabetic order. On the other hand, the natural ordering of `Date` objects is chronological order. 

Java allows you to define the natural ordering of objects of a specific type by implementing `Comparable` interface.

<div class="note">

A class that implements the `Comparable` interface is said to have a natural ordering. And, the `compareTo()` method is called the natural comparison method.

</div>

So the natural ordering of `Submission` is based on the order they were received, as it is defined in the `Submission.compareTo` method.

Suppose we instantiate several objects of type `Submission` and store them in a Java Collection such as a `List`. In that case, we can use `Collections.sort` to order (sort) the submissions based on their natural ordering.

An example is provided in the `Main.java` in the `demo` package of the starter code.

```java
List<String> students = getStudents();
List<Submission> submissions = getSubmissions(students);

System.out.print("Submission sorted (natural ordering):");
Collections.sort(submissions);
System.out.println(submissions);
```