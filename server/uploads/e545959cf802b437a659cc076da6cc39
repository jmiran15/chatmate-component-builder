# Prim's Algorithm: Analysis

<div id="outcomes"><details><summary></summary>

* Compare various approaches to finding the next min edge and the resulting time/space tradeoffs between them for Prim's algorithm.

</details></div>

<span class="tag">Exercise</span> Based on your understanding of Prim's algorithm, how can we efficiently implement the step which involves finding min-weight edge with one endpoint in $T$?

<details class="solution" data-release="Apr 19, 2023 17:00:00">
<summary>Solution</summary>

* Naive approach: Try all edges $\Omicron(M)$.

* Better approach: Keep all the edges that have one endpoint in $T$ in a (min-heap) Priority Queue and remove the best (min) at each iteration: $\Omicron(\lg M)$

</details>

<span class="tag">Exercise</span> Based on your answer to the previous question, analyze the asymptotic complexity of Prim's algorithm.

<details class="solution" data-release="Apr 19, 2023 17:00:00">
<summary>Solution</summary>

Runtime: $\Omicron(M \lg M)$ – with $\Omicron(M)$ auxiliary space.

| Operation       | Frequency | Cost per operation |
| :-------------: | :-------: | :----------------: |
| `pq.remove()`   | $\Omicron(M)$    | $\Omicron(\lg M)$         |
| `pq.insert()`   | $\Omicron(M)$    | $\Omicron(\lg M)$         |

Note: you might have to remove multiple edges until you find one with only one endpoint in $T$. That's why remove's frequency is $M$, not $N$.

Considering $M\in \Omicron(N^2)$, we have $\Omicron(M \lg M) \equiv \Omicron(M \lg N^2) \equiv \Omicron(M \lg N)$ for simple graphs.

</details>

