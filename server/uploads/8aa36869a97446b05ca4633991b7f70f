# Sort using PriorityQueue

<div id="outcomes"><details><summary></summary>

* Explain how a PriorityQueue can be used to sort a collection.

</details></div>

A PriorityQueue can be used for sorting a collection:

* Insert every element from the collection into the PriorityQueue.
* Remove elements from the PriorityQueue and place them in order, one after another, in the collection.

<span class="tag">Exercise</span> Complete the implementation of `Heap.sort` in the starter code.

```java
private static void sort(Integer[] data) {
  // TODO Implement me
}
```

**Suggestion**: Use Java's built-in [PriorityQueue](https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html ).

<details class="solution" data-release="Apr 28, 2023 17:00:00">
<summary>Solution</summary>

```java
private static void sort(Integer[] data) {
  PriorityQueue<Integer> pq = new PriorityQueue<>();
  for (int i = 0; i < data.length; i++) {
    pq.add(data[i]);
  }

  for (int i = 0; i < data.length; i++) {
    data[i] = pq.remove();
  }
}
```

</details>