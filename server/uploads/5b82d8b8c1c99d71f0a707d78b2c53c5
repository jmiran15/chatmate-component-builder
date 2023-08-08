<!---
outcomes: 
--->

# Dynamic Connectivity

<div id="outcomes"><details><summary></summary>

* Identify the operations of the Dynamic Connectivity structure.

</details></div>

Kruskal's algorithm needs a data structure that dynamically (and efficiently) maintains information about the <u>connected components of a graph</u>. 

<details class="resource">
<summary>Why does Kruskal's algorithm need such a data structure?</summary>

Every edge selected by Kruskal's algorithm must be checked to ensure adding it to the MST would not create a cycle. <span class="highlight">If the two endpoints of the edge are already "connected" (i.e. there is a path between them), adding the edge will create a cycle.</span>

</details>

Such a data structure is called **Dynamic Connectivity** structure. According to [Wikipedia](https://en.wikipedia.org/wiki/Dynamic_connectivity):

<div class="note">

In a dynamic connectivity structure, the set $V$ of vertices of the graph is fixed, but the set $E$ of edges can change:

* Edges may only be added to the graph (incremental connectivity);
* Edges may only be deleted from the graph (decremental connectivity);
* Edges can be either added or deleted (fully dynamic connectivity).

After each addition/deletion of an edge, the dynamic connectivity structure should adapt itself to answer questions such as "is there a path between $x$ and $y$? or equivalently: "do vertices $x$ and $y$ belong to the same connected component?".

</div>

For example, consider the following graph:

<div class="center">
<img src="/img/30/graph01.png" width="60%">
</div>

We may ask if there is a path between vertices $A$ and $G$? Or if the vertices $H$ and $J$ belong to the same connected component?

```js
connected(A,G)  // false
connected(H,J)  // true
```

<details class="resource">
<summary>Notice "is connected to" is an <i>equivalence</i> relation</summary>

* Reflexive: $p$ is connected to $p$.
* Symmetric: if $p$ is connected to $q$, then $q$ is connected to $p$. 
* Transitive: if $p$ is connected to $q$ and $q$ is connected to $r$, then $p$ is connected to $r$.

</details>

If edges can only be added, then the dynamic connectivity problem can be solved by a <u>**Union-Find** data structure</u>. 

<details class="resource">
<summary>Resources</summary>

* Wikipedia Entry on [Dynamic Connectivity](https://en.wikipedia.org/wiki/Dynamic_connectivity).

</details>