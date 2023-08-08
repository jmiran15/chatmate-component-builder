# Tree Terminology: Depth

<div id="outcomes"><details><summary></summary>

* Define tree-related terminologies.

</details></div>

The **depth**, or *level*, of a node $n$, is the length of the path from the root to $n$.

<div class="center">
<img src="/img/17/bst06.png" width="100%">
</div>

<div class="note">

The height of a tree is the depth of its *deepest* node.

</div>

We can _recursively_ define the depth of a node:

$$
\text{depth}(n)=\left \\{ \begin{matrix} 0 & n = \text{root} \\\ 1 + \text{depth}(\text{parent}(n)) & n \neq \text{root} \end{matrix} \right \\}
$$

**Aside**: In some references, the depth of a node includes the node. In that case, the depth of the root is $1$. Some references keep the depth of the root at $0$ but define $\text{level} = \text{depth} + 1$ so the level of the root is $1$.