# In-order Traversal: Left, Root, Right!

<div id="outcomes"><details><summary></summary>

* Explain in-order traversal.

</details></div>

In a BST, in-order traversal will produce the sequence in order (duh!). In a way, we recreate the ordered sequence where this binary (decision) tree was generated from:

<div class="center">
<img src="/img/17/bst00.png" width="70%">
</div>

This is the strategy:

<div class="note">

For every node, visit the left subtree, then the node, then the right subtree.

</div>

<div class="center">
<img src="/img/17/bst02.png" width="70%">
</div>

Following the strategy above will generate this sequence:

$$
2, 4, 5, 7, 8, 9, 12, 14, 17, 20, 21, 25
$$

<details class="resource">
<summary>Explanation</summary>

We start with the root, $9$, but the strategy demands us to visit all the nodes in the left subtree first. So we move to the subtree rooted at $5$. However, before we visit $5$, we must visit all the nodes in its left subtree. So we move to the subtree rooted at $2$. Since there is no subtree to the left of $2$, we can visit $2$. Thus the first node that we will iterate over is going to be $2$. 

<div class="center">
<img src="/img/17/2020-10-15-20-17-13.png" width="60%">
</div>

According to the strategy, when a node is visited, we must visit all the nodes in its right subtree. So we move to node $4$. We must visit all the nodes in the subtree to the left of $4$, but there are none, so we can process $4$ itself. Therefore, $4$ will be the second node we will iterate over. We must now visit all the nodes to the right subtree of $4$, but there is none. Therefore, we conclude our visit of all the nodes in the right subtree of $2$, and by proxy, our visit to all the nodes in the left subtree of $5$ is done too. We must now process $5$ itself. Thus, $5$ will be the third node we will iterate over. Then we move to the right subtree of $5$ and $\dots$

</details>

Here is a *recursive definition* of in-order traversal: for each node, recursively perform in-order traversal of the subtree rooted at its left child, then visit the root (the note itself), then recursively perform in-order traversal of the subtree rooted at its right child.

<details class="resource">
<summary>Resources</summary>

* [In-order tree traversal in 3 minutes](https://youtu.be/5dySuyZf9Qg) on YouTube.

</details>

