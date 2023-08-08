# Right Rotation: Exercise III

<div id="outcomes"><details><summary></summary>

* Trace Single Right Rotation.

</details></div>

Consider the following BST:

<div class="center">
<img src="/img/19/avl19.png" width="65%">
</div>

<span class="tag">Exercise</span> Insert the value $3$ and apply a structural rotation to balance the BST if needed.

<details class="solution" data-release="Mar 27, 2023 17:00:00">
<summary>Solution</summary>

Let's observe the original BST is balanced:

<div class="center">
<img src="/img/19/avl20.png" width="70%">
</div>

Here is the BST after insertion:

<div class="center">
<img src="/img/19/avl21.png" width="70%">
</div>

Notice the violation of balance property occurs in the great-grandparent of the inserted node. From the perspective of the great-grandparent node, <u>the problem is in the **left child's left subtree**.</u> This is the pattern that requires a (single) right rotation. **However, this case is a bit tricky:**

> When you bring $7$ to be the parent of $14$, the latter needs to go to the right of $7$. However, $11$ is already to the right of $7$. So we need to attach $11$ to the left of $14$ (where $7$ used to be).

<div class="center">
<img src="/img/19/avl22.png" width="80%">
</div>

</details>