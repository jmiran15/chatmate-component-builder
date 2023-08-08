# AVL Tree

<div id="outcomes"><details><summary></summary>

* Explain the core operations of the AVL tree.

</details></div>

<div class="note">

AVL Tree is named after its inventors [Adelson-Velskii](https://en.wikipedia.org/wiki/Georgy_Adelson-Velsky), and [Landis](https://en.wikipedia.org/wiki/Evgenii_Landis). It is a **self-balancing** binary search tree that maintains the height balance property (in addition to the BST order property) using structural rotations.

</div>

The insertion and deletion operations for AVL trees begin similarly to the corresponding procedures for (regular) binary search trees. It then performs *post-processing* structural rotations to restore the balance of any portions of the tree that are adversely affected by the insertion/removal.

**Insertion**
- Insert an item as in a (regular) binary search tree.
- Starting with the new node, go up to update heights.
- If you find a node that has become unbalanced, do a rotation to rebalance it.
- Rebalancing reduces the height of a subtree by $1$, so there is no need to propagate up! That is, only one adjustment is needed at most because the tree was previously balanced before the insert.
- So, in total, it takes $\Omicron(\lg N)$ to insert and $\Omicron(1)$ to rebalance.

**Removal**
- Remove an item as in a (regular) binary search tree.
- Starting with the parent of the deleted node, go up to update heights.
  - By "deleted node," I mean the _actual_ deleted node (which is going to be a leaf), not the node whose value was replaced with in-order predecessor/successor.
- As you go up from the deleted node to update the heights of its ancestors, rebalance them as needed (perform rotation).
- Rotations may reduce the height of a subtree, causing further imbalances for ancestors, so you may need to perform more than one rebalancing operation.
- Since you travel from the deleted node upwards to the root, at most, you will perform $\Omicron(\lg n)$ rotations.
- So, in total, $\Omicron(\lg n)$ to remove and $\Omicron(\lg n)$ to rebalance.

**Recommendation**: Implement insertion/removal (with structural rotations) <u>recursively</u>!

<div class="note">

For the implementation of the AVL Tree, you must store the height of each node.

</div>

As you insert/remove, you must travel upward toward the root to update the ancestors' height. 

<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [AVL Tree](https://en.wikipedia.org/wiki/AVL_tree).
* [VisualAlgo interactive demo for BST and AVL Tree](https://visualgo.net/bn/bst).

</details>
