# Heapsort: Putting it together!

<div id="outcomes"><details><summary></summary>

* Implement heapsort efficiently in Java.

</details></div>

<span class="tag">Exercise</span> Complete the implementation of `HeapSort.sort` so it builds the head from bottom up (Floyd's method) and then sorts the collection _in-place_.

```java
private static void sort(Integer[] data) {
  // TODO Implement me
}
```

**Note**: Assume the following helper methods are correctly implemented:

```java
private static void sink(Integer[] data, int index, int numNodes) {
  // percolate down data[index] to restore heap order
  // the percolation is bounded to go down no further than data[numNodes]
}

private static void swap(Integer[] data, int i, int j) {
  // swap values between data[i] and data[j]
}
```

<details class="solution" data-release="Apr 28, 2023 17:00:00">
<summary>Solution</summary>

```java
private static void sort(Integer[] data) {
  // heapify
  for (int i = numNodes / 2; i >= 1; i--) {
    sink(data, i, numNodes);
  }

  // sort
  for (int i = numNodes; i >= 1; i--) {
    swap(data, 1, numNodes--); // remove best
    sink(data, 1, numNodes); // restore order
  }
}
```

</details>