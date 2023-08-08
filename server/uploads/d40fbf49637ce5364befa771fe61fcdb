# Tree: A Connected Acyclic Graph

<div id="outcomes"><details><summary></summary>

* In the context of Graph Theory, define Cycle, Acyclic Graph, and Tree.

</details></div>

<div class="note">

A **cycle** is a path that starts and ends at the same vertex and includes at least one edge. 

</div>

Another name for a cycle is a "closed path." Having at least one edge means at least two vertices in the path: the start/end and one other.

Consider the following graph:

<div class="center">
<img src="/img/29/graph01.png" width="20%">
</div>

Here is a cycle: $(A, B, D, A)$. Here is another one: $(A, B, D, A, C, D, A)$

<div class="note">

A **simple cycle** is a cycle that includes vertices other than the start/end at most once.

</div>

In this class, when I say "cycle," I mean "simple cycle."

**Aside:** In some references, what I defined as "cycle" is described as "circuit," and instead, "simple cycle" is simply called "cycle."

<div class="note">

An **acyclic graph** is a graph having no cycles.

</div>

<div class="center">
<img src="/img/29/graph02.png" width="20%">
</div>

Recall: A graph is called **connected** if there is a path between every pair of vertices.

<div class="note">

A <u>connected acyclic graph</u> is called a **tree**!

</div>

<details class="resource">
<summary>Aside: directed or undirected?</summary>

In Mathematics and Graph Theory, trees are assumed to be **undirected**. However, in the context of Data Structures, a tree is typically rooted (one vertex has been designated as "root") and directed (all edges point away from the root).

Why is a tree considered undirected in Graph Theory? Because a "connected" graph is generally defined as an undirected graph.

In directed graphs, edges connect one node to another, but not necessarily in the opposite direction (the edge relation between vertices is asymmetric). In lieu of this, a directed graph may be _weakly connected_, _unilaterally connected_, _semi-connected_, _strongly connected_, etc. &mdash; the point is that [connectivity](https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_vertices_and_graphs) in directed graph is messy! 

<div class="note">

Accordingly, the topic covered in this chapter, i.e., minimum spanning tree, is defined for undirected graphs. 

</div>

It's possible to define MST for directed graphs. Still, it is usually given other names like *optimum branching*, *min-cost arborescence*, etc.

<!--
This slide has stuff on min-cost arborescence: https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/04GreedyAlgorithmsII-2x2.pdf
-->

</details>