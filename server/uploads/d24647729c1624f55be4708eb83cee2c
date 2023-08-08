# Graph Search: General Solution

<div id="outcomes"><details><summary></summary>

* Identify a general solution to the general graph search problem.

</details></div>

Recall:

<div class="note">

**General Graph Search Problem**

**Input**: Graph $G=(V, E)$, and a starting vertex $s \in V$.\
**Goal:** Identify the vertices in $V$ <u>reachable</u> from $s$ in $G$.

</div>

The following is a solution to this problem:

```js
// Post: a vertex is reachable from s iff it is marked as explored.
mark s as "explored"; all other vertices as "unexplored"
while there is an edge (v, w) in E with v explored and w unexplored do 
    choose some such edge (v, w) // underspecified 
    mark w as explored
```

Notice the instruction marked as "underspecified"; depending on how we choose the edge, the search will be called:
* **BFS** (Breadth-First Search), or 
* **DFS** (Depth-First Search).