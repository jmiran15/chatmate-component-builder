# Right Rotation: Exercise II

<div id="outcomes"><details><summary></summary>

* Trace Single Right Rotation.

</details></div>

Consider the following BST:

<div class="center">
<img src="/img/19/avl15.png" width="70%">
</div>

<span class="tag">Exercise</span> Remove the value $11$ and apply a structural rotation to balance the BST if needed.

<details class="solution" data-release="Mar 27, 2023 17:00:00">
<summary>Solution</summary>

Let's observe the original BST is balanced:

<div class="center">
<img src="/img/19/avl16.png" width="75%">
</div>

Here is the BST after removal:

<div class="center">
<img src="/img/19/avl17.png" width="80%">
</div>

Notice the violation of the balance property occurs in the parent of the deleted node. From the perspective of the parent node, <u>the problem is in the **left child's left subtree**.</u> This is the pattern that requires a (single) right rotation to bring the left child (_median_ value) above the parent (_high_ value).  

<div class="center">
<img src="/img/19/avl18.png" width="75%">
</div>

</details>