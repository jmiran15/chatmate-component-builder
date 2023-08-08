# Single Left Rotation

<div id="outcomes"><details><summary></summary>

* Describe Single Left Rotation.

</details></div>

Consider inserting the values $3, 5, 7$ in that order. 

We start by inserting $3$:

<div class="center">
<img src="/img/19/avl25.png" width="80%">
</div>

We have a BST with a single node; it is balanced! 

Next, we insert $5$.

<div class="center">
<img src="/img/19/avl26.png" width="80%">
</div>

Now our BST has two nodes. Notice the height and balance factor of the root has changed (and it is still balanced).

Next, we insert $7$.

<div class="center">
<img src="/img/19/avl27.png" width="80%">
</div>

Our BST has three nodes now. Notice the heights and balance factors of the parent and _grandparent_ of $7$ have changed. In particular, the grandparent (the root) is not balanced anymore! 

However, if we were to push $3$ to the **left** of $5$, we would restore balance:

<div class="center">
<img src="/img/19/avl28.png" width="80%">
</div>

This is called a (single) **left rotation**:

<div class="center">
<img src="/img/19/avl29.png" width="100%">
</div>

Notice the violation of balance property occurred in the grandparent of the newly inserted node. From the perspective of the grandparent node, <u>the problem was in the **right child's right subtree**.</u> The solution is a (single) left rotation to bring the parent node (_median_ value) above the grandparent (_high_ value). 