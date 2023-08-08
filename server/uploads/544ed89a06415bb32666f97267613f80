# Shortest Path: Weighted Graph

<div id="outcomes"><details><summary></summary>

* Explain why the modified BFS will not find the shortest path in weighted graphs.

</details></div>

**Recall:** A <u>weighted graph</u> is a labeled graph where the edge labels are numbers.

<div class="center">
<img src="/img/28/graph03.png" width="50%">
</div>

Notice in the graph above, there are two paths between $A$ and $C$. The shortest (in terms of length) is $(A, C)$. However, the shortest (cheapest) in terms of **total** weight (cost) is $(A, B, D, C)$.

<div class="note">

The shortest path problem is generally defined in terms of "cost." We can set the edge weights to $1$, giving us the shortest path in terms of length.

</div>

<span class="tag">Exercise</span> Can BFS be used to find the shortest path when shortest means "cheapest"?

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

BFS will not work, as seen in the example graph. BFS will explore $B$ and $C$ at the same time (both are one edge away from $A$) and concludes the shortest path from $A$ to $C$ is the direct edge $(A,C)$. BST will not update this "shortest" path when it finds the second path (which is cheaper) from $D$ to $C$ because, at that point, $C$ is already "explored."

</details>




 
