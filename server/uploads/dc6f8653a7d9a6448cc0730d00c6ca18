# Efficiency

<div id="outcomes"><details><summary></summary>

* Describe the efficiency of PriorityQueue based sort using Big-Oh notation.

</details></div>

Consider your implementation of `Heap.sort` from the previous section. Assume Java's `PriorityQueue` is implemented as Binary Heap, hence insertion/removal are $\Omicron(\lg n)$.

<span class="tag">Exercise</span> Complete the following table. Use Big-Oh notation to asymptotically describe time/space complexities.

|             | Time Complexity | Space Complexity | Input Space | Auxiliary Space |
| ----------- | --------------- | ---------------- | ----------- | --------------- |
| `Heap.sort` |                 |                  |             |                 |


<details class="solution" data-release="Apr 28, 2023 17:00:00">
<summary>Solution</summary>

* We need a PriorityQueue: $\Omicron(n)$ auxiliary space.
* $n$ inserts into PriorityQueue, each $\Omicron(\lg n)$, adds up to $\Omicron(n \lg n)$
* $n$ removes from PriorityQueue, each $\Omicron(\lg n)$, adds up to $\Omicron(n \lg n)$

|             | Time Complexity | Space Complexity | Input Space | Auxiliary Space |
| ----------- | :-------------: | :--------------: | :---------: | :-------------: |
| `Heap.sort` | $\Omicron(n \lg n)$    | $\Omicron(n)$           | $\Omicron(n)$      | $\Omicron(n)$          |

</details>
