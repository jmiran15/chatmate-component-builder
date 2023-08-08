# Treap: Deletion

<div id="outcomes"><details><summary></summary>

- Explain and trace the balancing operations of a Treap.
- Explain the role of the priorities in rebalancing and the importance of being random.

</details></div>

Consider the following (max-heap) treap:

<div class="center">
<img src="/img/21/treap18.png" width="90%">
</div>

Let's remove the node with key $2$. 

We find the entry to be removed (look-up as in BST, ignoring priorities). Since we have a "max-heap" treap and the priorities are non-negative, we set the priority of the entry to be removed to $-1$:

<div class="center">
<img src="/img/21/treap19.png" width="90%">
</div>

The max-heap order property is violated. To fix it, we need to bring the child node with key $3$ above the node with key $2$ (because $3$ has a higher priority between the children of $2$).

Since $3$ is to the right of $2$, we perform a left rotation:

<div class="center">
<img src="/img/21/treap20.png" width="90%">
</div>

The max-heap order property is still violated. To fix it, we need to bring the child node with key $1$ above the node with key $2$. Since $1$ is to the left of $2$, we perform a right rotation:

<div class="center">
<img src="/img/21/treap21.png" width="90%">
</div>

We can easily remove the node with key $2$ as it is a leaf now.

<div class="center">
<img src="/img/21/treap22.png" width="90%">
</div>

Notice the resulting treap is a BST over the keys and a max-heap over the priorities, and its height is $\Omicron(\lg n)$.

<!--

Alternative approach:

* If the key is a leaf node, remove it!
* If the key node has one child, replace it with the child.
* If the key has two children, perform removal as in the BST and then fix the heap property by swapping the key with its in-order predecessor (max in left subtree). Then, rotate down to restore the heap order property.

-->