# Perfect Binary Tree

<div id="outcomes"><details><summary></summary>

* Explain why the height of a complete binary tree is $\Omicron(\lg N)$.

</details></div>

A perfect binary tree is a binary tree in which all interior nodes have two children, and all leaves have the same depth or same level

<div class="center">
<img src="/img/17/bst10.png" width="70%">
</div>

<div class="note">

The height of a perfect binary tree is $\Omicron(\lg n)$, where $n$ is the number of nodes. 

</div>

You can verify this by looking at the example above: a perfect binary tree has $1$ node at level (depth) $0$, $2$ nodes at level $1$, $4$ nodes at level $2$, and so on. Thus, it will have $2^d$ nodes at level $d$. Adding these quantities, the total number of nodes $n$ for a perfect binary tree with depth $d$ is:

$$
n = 2^0 + 2^1 + 2^2 + \dots + 2^d = 2^{d+1} − 1
$$

For example, the perfect binary tree of depth $2$ above has $2^3 – 1 = 7$ nodes. Now, consider the formula above for the number of nodes in a perfect binary search tree:

$$
n = 2^{d+1} − 1
$$

Solving for $d$, we get:

$$
n+1 = 2^{d+1}
$$

$$
\lg(n+1) = \lg(2^{d+1})
$$

$$
\lg(n+1) = (d+1)\lg(2)
$$

$$
\lg(n+1) = (d+1)
$$

$$
d = \lg(n+1) - 1
$$

We know the height of the tree is the depth of the *deepest* node. So the height of a perfect binary tree is at most $\lg(n+1) - 1$ or $\Omicron(\lg n)$.

<details class="resource">
<summary>Resources</summary>

* [How to Sum Consecutive Powers of 2](https://jarednielsen.com/sum-consecutive-powers-2/).
* Wikipedia's entry on [Types of Binary Tree](https://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees).
* Wikipedia's entry on [Properties of Binary Trees](https://en.wikipedia.org/wiki/Binary_tree#Properties_of_binary_trees).

</details>
