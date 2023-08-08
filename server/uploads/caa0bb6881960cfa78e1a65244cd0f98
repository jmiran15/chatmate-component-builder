# BFS Exercise

<div id="outcomes"><details><summary></summary>

* Trace the Breadth-First Search algorithm.

</details></div>

Consider the following graph:

<div class="center">
<img src="/img/27/graph04.png" width="50%">
</div>

<span class="tag">Exercise</span> Write the vertices of the above graph in the order in which they would be visited in a breadth-first traversal starting at node $0$. Assume neighbors are visited in numerical order.

<details class="solution" data-release="Apr 12, 2023 17:00:00">
<summary>Solution</summary>

| Queue   | Edges    | Explored |
| :-----: | :------: | :------: |
| 0       |  -       | 0        |
| 1       | (0, 1)   | 1        |
| 1, 2    | (0, 2)   | 2        |
| 1, 2, 5 | (0, 5)   | 5        |
| 2, 5, 3 | (1, 3)   | 3        |
| 5, 3, 4 | (2, 4)   | 4        |
| 3, 4, 7 | (5, 7)   | 7        |
| 4, 7, 6 | (3, 6)   | 6        |
| 7, 6    |  -       | -        |
| 6       |  -       | -        |
| 8       | (6, 8)   | 8        |
| -       |  -       | -        |

The answer is $0, 1, 2, 5, 3, 4, 7, 6, 8$.

</details>
