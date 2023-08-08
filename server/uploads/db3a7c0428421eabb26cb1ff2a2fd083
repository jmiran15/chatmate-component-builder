# Preliminaries for Analysis

<div id="outcomes"><details><summary></summary>

- Count the degree of a vertex.
- Describe the Handshaking lemma.
- Describe the lower and upper bounds on the number of edges in a simple and connected graph. 

</details></div>

For a graph $G=(V,E)$ with vertex set $V$ and edge set $E$:
* $N = \left | V \right |$ denotes the number of vertices.
* $M = \left | E \right |$ denotes the number of edges.

What can we say about $N$ and $M$?
* Theoretically, $N \in \mathbb{Z}^{+}$. (A graph with an infinite vertex set is called an *infinite* graph!) In practice, $N$ is a positive finite integer. 
* If a graph is **not** connected, $M$ could be as small as $0$.
* If a graph is **not** simple, we may have parallel edges, so $M$ could be (theoretically) as large as $+\infty$.

<div class="note">

For a simple, connected graph, the minimum number of edges is $N-1$ (as in a [Tree](https://en.wikipedia.org/wiki/Tree_(graph_theory))). On the other hand, the maximum number of edges is in a [Complete graph](https://en.wikipedia.org/wiki/Complete_graph), where there is an edge between every pair of vertices.

$$
n \space \text{choose} \space 2 = \binom{N}{2}=\frac{N(N-1)}{2}
$$

</div>

Therefore, in a simple connected graph, $M \in \Omega(N)$ and $M \in \Omicron(N^2)$.

### Degree of a vertex

The degree of a vertex $v$ is the number of edges incident with $v$. (A loop counts as two edges.)

The degree of the vertex $v$ is denoted by $\deg(v)$.

<div class="note">

**Degree sum formula:**

$$
\sum_{v \in V}\deg(v) = 2M
$$

</div>

<details class="resource">
<summary>Why?</summary>

Each edge contributes twice to the degree count of all vertices. 
Hence, both the left-hand and right-hand sides of this equation equal twice the number of edges.

This is also known as the [Handshaking lemma](https://en.wikipedia.org/wiki/Handshaking_lemma).

</details>
