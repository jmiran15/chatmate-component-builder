# Java Interlude: Built-in Sorts

<div id="outcomes"><details><summary></summary>

* Describe what sorting algorithm is used in Java's API.

</details></div>

The Java `Collections.sort()`​ method implements (a [variant](https://en.wikipedia.org/wiki/Timsort)) of merge sort.

The Java `Arrays.sort()` method implements the quicksort, selecting the pivot as the median of the three elements (first, last and middle element) when $n \leq 40$, and the median of nine equally spaced elements when $n > 40$. It also switches to the _insertion sort_ when $n < 7$.

<details class="resource">
<summary>Why Java uses quicksort to sort a collection (array) of primitives but for collections of reference variables, it uses merge sort?</summary>

The Java API guarantees a **stable sorting**, which merge sort offers but quicksort doesn't offer. However, when sorting primitive values by their natural order, you would not notice a difference as primitive values have no _identity_. Therefore, quicksort can be used for primitive arrays and will be used when it is considered more efficient.

</details>