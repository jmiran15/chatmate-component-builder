# Graph Search: Summary

<div id="outcomes"><details><summary></summary>

* Summarize graph search algorithms.

</details></div>

| BFS | DFS |
| --- | --- |
| Starts the search from the source node and visits nodes in a level-by-level manner (i.e., visiting the ones closest to the source first). | Starts the search from the source node and visits nodes as far as possible from the source node (i.e., depth-wise). |
| Usually implemented using a queue data structure.            | Usually implemented using a stack data structure.            |
| Used for finding the shortest path between two nodes, testing if a graph is bipartite, finding all connected components in a graph, etc. | Used for topological sorting, solving problems that require graph backtracking, detecting cycles in a graph, scheduling problems, etc. |

<div class="note">

Both BFS & DFS run in $\Omicron(M+N)$ if we use the adjacency list. That's just a constant factor larger than the amount of time required to read the input!

</div>

**Note:** It is common to modify the BFS/DFS algorithm to keep track of the edges instead of (or in addition to) the vertices (where each edge describes the nodes at each end). This is useful, e.g., for reconstructing the traversed path after processing each node.

**Aside:** Both BFS & DFS can be implemented **recursively**. In particular, DFS easily lends itself to a recursive implementation. Most resources describe DFS recursively! It is left as an exercise to you to develop the recursive implementation of these algorithms.

<!--

<details class="resource">
<summary>Resources</summary>

* TechieDelight [Breadth First Search (BFS) | Iterative & Recursive Implementation](https://www.techiedelight.com/breadth-first-search/)
* TechieDelight [Depth First Search (DFS) | Iterative & Recursive Implementation](https://www.techiedelight.com/depth-first-search/)
* HackerRank's [Algorithms: Graph Search, DFS and BFS](https://www.youtube.com/watch?v=zaBhtODEL0w&ab_channel=HackerRank)

</details>


**Recursive DFS**

```text
mark all vertices as unexplored
DFS(s)
```
```text
DFS(v)
  if v is unexplored then
      mark v as explored 
      for each vertex w in neighbors(v) do 
          if w is unexplored then
              DFS(w)
```

-->