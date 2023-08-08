# Balance Factor

<div id="outcomes"><details><summary></summary>

* Identify the height and balance factor of binary search tree nodes.

</details></div>

To assist in establishing _balance property_, we define the following measure:

<div class="note">

Each node's **balance factor** is the height of the left subtree minus the height of the right subtree.

</div>

More specifically

```text
bf(node) = height(node.left) – height(node.right)
```

For the calculation of _balance factor_, we define "height" as follows:

$$
\text{height}(n)=\left \\{ \begin{matrix} -1 & n = \text{null} \\\ 0 & n = \text{leaf} \\\ 1 + \max(\text{height of children}) & n \neq \text{leaf} \end{matrix} \right \\}
$$

<div class="note">

A BST is balanced when, for any node, its balance factor is $1$, $0$, or $-1$.

</div>

Here is an example

<div class="center">
<img src="/img/18/bbst00.png" width="100%">
</div>

The above BST is not balanced because $\text{bf}(\\{ 10, 5 \\})\notin \\{0, 1, -1 \\}$.