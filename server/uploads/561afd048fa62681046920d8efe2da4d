# Shortest Path: Unweighted Graph

<div id="outcomes"><details><summary></summary>

- Formally describe the shortest path problem.
- Recognize that (unweighted) shortest path algorithm is a modified BFS.

</details></div>

Let us formally define the _shortest path_ problem:

<div class="note">

**Shortest Path Problem**

**Input**: Graph $G=(V, E)$, and a starting vertex $s \in V$.\
**Goal:** Identify a shortest path from $s$ to every vertex in $G$.

</div>

Note we are considering the **length** of a path here. In other words, "shortest path" means "shortest length." (We will soon contrast this with the case where shortest path means shortest _cost_.)

<div class="note">

**Lemma**: Let $G$ be a directed or undirected graph. At the conclusion of the modified BFS, for every vertex $v \in V$, the value `distance[v]` equals the length $\text{dist}(s, v)$ of a **shortest path** from $s$ to $v$ in $G$ (or $+ \infty$ if no such path exists).

</div>

This is not the case for DFS!

<details class="resource">
<summary>Why does BFS find the shortest path?</summary>

Okay! Let's think about this problem for a moment. We have a source vertex $s$ and a target vertex $t$. We want a shortest path from $s$ to $t$ (if exists). What can we do? Well, we can look at all the vertices that are one edge away from $s$; if we find $t$, we are done. If not, we can look at all vertices that are two edges away from $s$, then those that are three edges away from $s$, and so on until we find $t$. This strategy is what BFS is doing! It explores all (reachable) vertices that are $k$ edges away from the source vertex $s$ before visiting any vertex $k+1$ edges away. So, if there are multiple paths to $t$, and one returned by BFS has $d$ edges, that path is the shortest. If there was a shorter path with, e.g., length of $d-1$, then $t$ would have been explored before exploring vertices that are $d$ edges away from the source. 

> For a formal proof, refer to [CLRS](https://mitpress.mit.edu/books/introduction-algorithms-third-edition), Third Edition, Lemma 22.2 on page 598.

</details>

<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [Shortest Path Problem](https://en.wikipedia.org/wiki/Shortest_path_problem).

</details>
