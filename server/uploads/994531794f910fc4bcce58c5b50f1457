# DFS Exercise

<div id="outcomes"><details><summary></summary>

* Trace the Depth-First Search algorithm.

</details></div>

Consider the following graph:

<div class="center">
<img src="/img/27/graph04.png" width="50%">
</div>

<span class="tag">Exercise</span> Write the vertices of the above graph in the order in which they would be visited in a depth-first traversal starting at node $0$. Assume neighbors are visited in numerical order.

<details class="solution" data-release="Apr 14, 2023 17:00:00">
<summary>Solution</summary>

| Stack      | Edges  | Explored |
| :--------: | :----: | :------: |
| 0          |  -     | 0 |
| 1          | (0, 1) | 1 |
| 2, 1       | (0, 2) | 2 |
| 5, 2, 1    | (0, 5) | 5 |
| 7, 2, 1    | (5, 7) | 7 |
| 4, 2, 1    | (7, 4) | 4 |
| 3, 2, 1    | (4, 3) | 3 |
| 6, 3, 2, 1 | (4, 6) | 6 |
| 8, 3, 2, 1 | (6, 8) | 8 |
| 3, 2, 1    |  -     | - |
| 2, 1       |  -     | - |
| 1          |  -     | - |
| -          |  -     | - |

The answer is $0, 1, 2, 5, 7, 4, 3, 6, 8$.

</details>
