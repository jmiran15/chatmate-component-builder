# Pre-order Traversal: Root, Left, Right!

<div id="outcomes"><details><summary></summary>

* Explain pre-order traversal.

</details></div>

This is the strategy for pre-order traversal:

<div class="note">

For every node, visit it, then visit its left subtree, then visit its right subtree.

</div>

<div class="center">
<img src="/img/17/bst02.png" width="70%">
</div>

Following the strategy above will generate this sequence:

$$
9, 5, 2, 4, 7, 8, 17, 12, 14, 21, 20, 25
$$

<details class="resource">
<summary>Explanation</summary>

We start with the root, $9$; then we visit all the nodes in its left subtree. So we move to the subtree rooted at $5$. Next, we visit $5$; then we visit all the nodes in its left subtree. So, we move to $2$. First, we visit $2$, and then we visit all the nodes in its left subtree. But $2$ has no subtree to its left. So we move to visit all the nodes in the right subtree of $2$. 

<div class="center">
<img src="/img/17/2020-10-15-21-22-18.png" width="60%">
</div>

So we move to node $4$. We visit $4$. Then, we must visit all the nodes in the subtree to the left of $4$, but there is none. So, we visit all the nodes to the right subtree of $4$, but there are none. Therefore, we conclude our visit of all the nodes in the right subtree of $2$, and by proxy, our visit to all the nodes in the left subtree of $5$ is done too. We must now move to the right subtree of $5$ and $\dots$

</details>

Here is a *recursive definition* of pre-order traversal: for each node, visit it, then recursively perform pre-order traversal of its children (the subtrees rooted at its left and right child, in that order).

<details class="resource">
<summary>Resources</summary>

* [Pre-order tree traversal in 3 minutes](https://youtu.be/1WxLM2hwL-U) on YouTube.

</details>




