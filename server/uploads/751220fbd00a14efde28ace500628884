# Kruskal's Algorithm: Analysis

<div id="outcomes"><details><summary></summary>

* Compare various approaches to checking for cycles and the resulting time/space tradeoffs between them for Kruskal's Algorithm.

</details></div>

<span class="tag">Exercise</span> Based on your understanding of Kruskal's algorithm, how can we efficiently implement the step which involves finding the next min-weight edge in $G$?

<details class="solution" data-release="Apr 19, 2023 17:00:00">
<summary>Solution</summary>

* Keep a sorted array of edges. Keep a pointer to the next position (edge).
* Keep edges in a (min-heap) priority queue.

With an optimal sorting algorithm (to sort edges of the input graph by increasing weight), both approaches are $\Omicron(M \lg M)$ runtime.

> We would spend $\Omicron(M \lg M)$ to sort the edges and then get the next edge in $\Omicron(1)$ time. Whereas, we can build the PriorityQueue in $\Omicron(M)$ time and remove the next "best" edge in $\Omicron(\lg M)$. We would have to do the "remove" $\Omicron(M)$ times because some edges may have to be disregarded (they cause cycle).

</details>

<span class="tag">Exercise</span> Once the next min-weight edge $(v, w)$ is found, how can we efficiently check if adding it to the MST would create a cycle?

<details class="solution" data-release="Apr 19, 2023 17:00:00">
<summary>Solution</summary>

We cannot check for a cycle by simply checking if the endpoints are already in $T$ (why?). We can run BFS/DFS on $T$, start at $v$ and check if $w$ is reachable.

</details>


<span class="tag">Exercise</span> Based on your answers to the previous questions, analyze the asymptotic complexity of Kruskal's algorithm.

<details class="solution" data-release="Apr 19, 2023 17:00:00">
<summary>Solution</summary>

| Operation   | Frequency | Cost per operation |
| :---------  | :-------: | :----------------: |
| build PQ    | $1$       | $\Omicron(M)$             |
| extract min | $\Omicron(M)$       | $\Omicron(\lg M)$         |
| run BFS/DFS | $\Omicron(M)$       | $\Omicron(N+M)$           |

From the table, it can be seen that Kruskal's algorithm is _quadratic_. However, we can improve the performance by using another data structure called **Union-Find** for efficiently checking/preventing cycles. We will explore Union-Find in the next chapter!

</details>