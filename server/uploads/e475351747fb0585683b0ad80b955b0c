# Double Rotation: Exercise VI

<div id="outcomes"><details><summary></summary>

* Trace Double Right-Left Rotation.

</details></div>

Consider the following BST:

<div class="center">
<img src="/img/19/avl42.png" width="70%">
</div>

<span class="tag">Exercise</span> Insert the value $23$ and apply a structural rotation to balance the BST if needed.

<details class="solution" data-release="Mar 27, 2023 17:00:00">
<summary>Solution</summary>

Let's observe the original BST is balanced:

<div class="center">
<img src="/img/19/avl43.png" width="75%">
</div>

Here is the BST after insertion:

<div class="center">
<img src="/img/19/avl44.png" width="75%">
</div>

Notice the violation of balance property occurs in the great-grandparent of the newly inserted node. From the perspective of the grandparent node, <u>the problem is in the **right child's left subtree** (the highlighted nodes).</u> This is the pattern that requires (double) right-left rotation to rebalance.  

So we perform a right rotation to bring $22$ above $25$ (to bring the median value on a level between the low and high values):

<div class="center">
<img src="/img/19/avl45.png" width="85%">
</div>

And then a left rotation to bring $22$ above $20$ (to bring the median value on a level above the low and high values):

<div class="center">
<img src="/img/19/avl46.png" width="75%">
</div>

</details>