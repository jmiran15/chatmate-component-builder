# Improvement 1: Weighting

<div id="outcomes"><details><summary></summary>

- Trace the Quick Union implementation with a union-by-size heuristic.
- Explain the runtime improvements gained by using the heuristic for union-find operations.

</details></div>

<div class="note">

Modify quick-union to avoid tall trees:
* Keep track of the size of each component.
* Balance by linking small tree below large one.

</div>

<br>

<div class="center">
<img src="/img/30/graph02.png" width="100%">
</div>

> **Proposition:** In this scheme, the depth of any node $x$ is at most $\lg N$.

<span class="tag">Exercise</span> To justify the proposition, complete the following statements by filling in the blanks.

* The depth of $x$ increases at most by `______` when tree $T_1$ containing $x$ merges into another tree $T_2$.
* Since the larger tree (among $T_1$ and $T_2$) is at least `___________` the smaller tree, the resultant tree (after union) must have at least `_________` the number of elements in the smaller one.
* The size of tree containing $x$ can `_______` at most `________` times because if you start with one node and `_______________` you will get $N$, and there is only $N$ nodes in the tree.

<details class="solution" data-release="Apr 21, 2023 17:00:00">
<summary>Solution</summary>

* The depth of $x$ increases at most by <u>one</u> when tree $T_1$ containing $x$ merges into another tree $T_2$. 
  * (Assume the worst case where each tree has $m$ elements and a height of $m$. Then the resulting tree after union will have $2m$ elements and heigh of $m+1$.)
* Since the larger tree (among $T_1$ and $T_2$) is at least <u>as large as</u> the smaller tree, the resultant tree (after union) must have at least <u>double</u> the number of elements in the smaller one.
* The size of tree containing $x$ can <u>double</u> at most </u>$\lg N$</u> times because if you start with one node and <u>double it $\lg N$ times</u> you will get $N$, and there is only $N$ nodes in the tree.

</details>

From the proposition, <span class="highlight">it follows the height of the tree is in $\Omicron(\lg N)$.</span>

<div class="note">

The heuristic described above is known as **union by size**.

</div>

**Aside:** An alternative strategy is _union by rank_, which always attaches the tree with a smaller "rank" to the root of the tree having a higher rank. The rank of a node is the height of its subtree; the rank of a node can only change if it is a root.

<!-- 

https://www.coursera.org/learn/algorithms-part1/lecture/RZW72/quick-union-improvements

http://www.cs.cmu.edu/~avrim/451/lectures/lect0914.pdf

https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/UnionFind.html

-->
