# Graph ADT: Efficiency of Operations

<div id="outcomes"><details><summary></summary>

* Analyze and compare the complexity of basic operations for adjacency list vs. matrix-based representations of a graph.

</details></div>

Here is a summary of the core operations of Graph ADT:

| Operation   | Description |
| :---------- | :---------- |
| `insert(v)` | creates and returns a new Vertex storing element $v$ |
| `remove(V)` | removes vertex $V$ and returns the element stored in it |
| `insert(V, U, e)` | creates and returns a new Edge from vertex $V$ to $U$ (storing $e$) |
| `remove(E)` | removes edge $E$ and returns element stored in it. |
| `vertices()` | returns an iteration of all the vertices of the graph. |
| `edges()` | returns an iteration of all the edges of the graph. |
| `outgoing(V)` | returns an iteration of all outgoing edges of vertex $V$. |
| `incoming(V)` | returns an iteration of all incoming edges of vertex $V$. |

<span class="tag">Exercise</span> Complete the following table. Describe the efficiency of each operation for the representation in that column. 

**Assume** given a vertex, we can access it in an adjacency list or matrix (the index corresponding to it) in constant time. 

| Operation   | Adjacency List |  Adjacency Matrix | 
| :---------- | :------------: | :---------------: |
| `insert(v)` |                |                   |
| `remove(V)` |                |                   |
| `insert(V, U, e)` |          |                   |
| `remove(E)` |                |                   | 
| `vertices()` |               |                   |
| `edges()` |                  |                   |
| `outgoing(V)` |              |                   |
| `incoming(V)` |              |                   |

<details class="solution" data-release="Apr 10, 2023 17:00:00">
<summary>Solution</summary>

The answers here entirely depend on how you implement each representation. Many of the assumptions made below are not described in the notes. You must attend the lecture for a more elaborate discussion.

<!--

Let's assume the Adjacency List is implemented as a list of lists (a linked list where each element references an auxiliary linked list.) Then, inserting a new vertex is $\Omicron(1)$ assuming we can access it if it was already inserted in $\Omicron(1)$ (thus, our check for duplicate would be $\Omicron(1)$). Removing a vertex is $\Omicron(1)$ since we assumed we could access it in constant time. If the vertex has edges incident to it, the operation will throw an exception (also in $\Omicron(1)$).

-->

| Operation   | Adjacency List |  Adjacency Matrix | 
| :---------- | :------------: | :---------------: |
| `insert(v)` |     $\Omicron(1)$     |     $\Omicron(N^2)$      |
| `remove(V)` |     $\Omicron(1)$     |     $\Omicron(N^2)$      |
| `insert(V, U, e)` |  $\Omicron(1)$  |      $\Omicron(1)$       |
| `remove(E)` | $\Omicron(\max(\deg(V),\deg(U)))^*$ | $\Omicron(1)$ | 
| `vertices()`  |   $\Omicron(1)$     |     $\Omicron(1)^*$      |
| `edges()`     |   $\Omicron(M)$     |     $\Omicron(N^2)$      |
| `outgoing(V)` | $\Omicron(\deg^{+}(V))$ |   $\Omicron(N)$      |
| `incoming(V)` | $\Omicron(\deg^{-}(V))$ |   $\Omicron(N)$      |

* `remove(E)` in adjacency list: if $E$ has the endpoints $V$ and $U$, we must find (linear search) and remove $E$ from the list of edges associated with $V$ and with $U$.

* `vertices()` in the adjacency matrix is $\Omicron(1)$ by keeping an explicit list in addition to the adjacency matrix representation.

<div class="note">

In most cases, "Adjacency List" is preferred for efficient operations: especially if the operation involves "exploring" the graph.

</div>

</details>