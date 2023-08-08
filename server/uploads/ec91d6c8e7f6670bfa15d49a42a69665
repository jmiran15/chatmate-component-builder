# Double Rotation: Exercise VII

<div id="outcomes"><details><summary></summary>

* Trace Double Left-Right Rotation.

</details></div>

Consider the following BST:

<div class="center">
<img src="/img/19/avl47.png" width="75%">
</div>

<span class="tag">Exercise</span> Remove the value $13$ and apply a structural rotation to balance the BST if needed.

<details class="solution" data-release="Mar 27, 2023 17:00:00">
<summary>Solution</summary>

Let's observe the original BST is balanced:

<div class="center">
<img src="/img/19/avl48.png" width="80%">
</div>

Here is the BST after removal:

<div class="center">
<img src="/img/19/avl49.png" width="80%">
</div>

Notice the violation of balance property occurs in the parent of the node which was removed. From the perspective of the parent node, <u>the problem is in the **left child's right subtree**. (the highlighted nodes)</u> This is the pattern that requires (double) left-right rotation to rebalance.  

So we perform a left rotation to bring $10$ above $9$ (to bring the median value on a level between the low and high values):

<div class="center">
<img src="/img/19/avl50.png" width="80%">
</div>

And then a right rotation to bring $10$ above $12$ (to bring the median value on a level above the low and high values):

<div class="center">
<img src="/img/19/avl51.png" width="80%">
</div>

</details>