# The Submission Class

<div id="outcomes"><details><summary></summary>

* Motivate the need for defining the natural ordering of types.

</details></div>

Open `Submission.java` in the `demo` package of the starter code. The `Submission` class represents a (homework) submission made by a student. Among its attributes are:

```java
private int positionInQueue;
private String student;
private int numPriorSubmission;
```

All submissions are positioned one after another in the order they are received. Thus, submissions are *comparable* to one another, based on the order they were received (their position in the submission queue).

```java
@Override
public int compareTo(Submission other) {
  return this.positionInQueue - other.positionInQueue;
}
```

We will use the `Submission` class to motivate the idea of a priority queue.
