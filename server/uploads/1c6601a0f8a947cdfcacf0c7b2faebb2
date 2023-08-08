# Putting it all together!

<div id="outcomes"><details><summary></summary>

* Select the appropriate rotation type to rebalance a BST after an insertion/removal operation is performed.

</details></div>

This is called a (single) **right rotation**:

<div class="center">
<img src="/img/19/avl10.png" width="100%">
</div>

<div class="note">

Cause of imbalance: **left child's left subtree**.

</div>

This is called a (single) **left rotation**:

<div class="center">
<img src="/img/19/avl29.png" width="100%">
</div>

<div class="note">

Cause of imbalance: **right child's right subtree**.

</div>

This is called a (double) **right-left rotation**:

<div class="center">
<img src="/img/19/avl35.png" width="100%">
</div>

<div class="note">

Cause of imbalance: **right child's left subtree**.

</div>

This is called a (double) **left-right rotation**:

<div class="center">
<img src="/img/19/avl41.png" width="100%">
</div>

<div class="note">

Cause of imbalance: **left child's right subtree**.

</div>

<span class="tag">Exercise</span> Complete the following table which assists in determining the type of rotation.

| Imbalance Node  | Child's `bf = -1` <br> (right heavy) | Child's `bf = 1` <br> (left heavy) |
| :-------------: | :----------------------------------: | :-------------------------------:  |
| **`bf = -2` <br> (right heavy)** |   |   |
| **`bf = 2` <br> (left heavy)** |   |   |


<details class="solution" data-release="Mar 27, 2023 17:00:00">
<summary>Solution</summary>

| Imbalance Node  | Child's `bf = -1` <br> (right heavy) | Child's `bf = 1` <br> (left heavy) |
| :-------------: | :----------------------------------: | :-------------------------------:  |
| **`bf = -2` <br> (right heavy)** |  Left |  Right-Left |
| **`bf = 2` <br> (left heavy)** |  Left-Right |  Right |

**Caution** The table above does not account for an edge case where the child's balance factor is $0$. 

<!--
bf = -2 and child's bf = 0 results in single left rotation.
bf = 2 and child's bf = 0 results in single right rotation.
-->

<details class="demo">
<summary>Schematic representation of tree rotations</summary>

<div class="pdf" file="avl_rotations.pdf"></div>

</details>

</details>

<details class="resource">
<summary>Resources</summary>

- Wikipedia's entry on [AVL Tree: Rebalancing](https://en.wikipedia.org/wiki/AVL_tree#Rebalancing).
- Wikipedia's entry on [Tree Rotation](https://en.wikipedia.org/wiki/Tree_rotation).

</details>
