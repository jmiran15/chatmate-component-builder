# Single Right Rotation

<div id="outcomes"><details><summary></summary>

* Describe Single Right Rotation.

</details></div>

Consider inserting the values $7, 5, 3$ in that order. 

We start by inserting $7$:

<div class="center">
<img src="/img/19/avl06.png" width="80%">
</div>

We have a BST with a single node; it is balanced! 

Next, we insert $5$.

<div class="center">
<img src="/img/19/avl07.png" width="80%">
</div>

Now our BST has two nodes. Notice the height and balance factor of the root has changed (and it is still balanced).

Next, we insert $3$.

<div class="center">
<img src="/img/19/avl08.png" width="80%">
</div>

Our BST has three nodes now. Notice the heights and balance factors of the parent and _grandparent_ of $3$ have changed. In particular, the grandparent (the root) is not balanced anymore! 

However, if we were to push $7$ to the **right** of $5$, we would restore balance:

<div class="center">
<img src="/img/19/avl09.png" width="80%">
</div>

This is called a (single) **right rotation**:

<div class="center">
<img src="/img/19/avl10.png" width="100%">
</div>

Notice the violation of balance property occurred in the grandparent of the newly inserted node. From the perspective of the grandparent node, <u>the problem was in the **left child's left subtree**.</u> The solution is a (single) right rotation to bring the parent node (_median_ value) above the grandparent (_high_ value). 