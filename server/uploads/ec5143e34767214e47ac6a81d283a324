# Kruskal's Runtime

<div id="outcomes"><details><summary></summary>

* Explain how to implement Kruskal's algorithm efficiently using a union-find structure to detect cycles. Identify the resulting time complexity.

</details></div>

How to get the next min-weight edge?

> Keep edged in a (min-heap) priority queue.

How to check if adding edge (v-w) creates a cycle?

> Use Union-Find to help in checking/preventing cycle

<span class="tag">Exercise</span> Complete the following table:

| Operation   | Frequency | Cost per operation |
| :---------- | :-------: | :----------------: |
| build PQ    |           |                    |
| extract min |           |                    |
| union       |           |                    |
| connected   |           |                    |


<details class="solution" data-release="Apr 21, 2023 17:00:00">
<summary>Solution</summary>

| Operation   | Frequency | Cost per operation |
| :---------- | :-------: | :----------------: |
| build PQ    | $1$       | $\Omicron(M)$             |
| extract min | $\Omicron(M)$       | $\Omicron(\lg M)$         |
| union       | $\Omicron(N)$       | $\Omicron(\lg^* N)$       |
| connected   | $\Omicron(M)$       | $\Omicron(\lg^* N)$       |

</details>