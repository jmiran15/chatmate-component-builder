# Double Rotation: Right-Left

<div id="outcomes"><details><summary></summary>

* Describe Double Right-Left Rotation.

</details></div>

Consider inserting the values $3, 7, 5$ in that order. 

We start by inserting $3$:

<div class="center">
<img src="/img/19/avl30.png" width="80%">
</div>

We have a BST with a single node; it is balanced! 

Next, we insert $7$.

<div class="center">
<img src="/img/19/avl31.png" width="80%">
</div>

Now our BST has two nodes. Notice the height and balance factor of the root has changed (and it is still balanced).

Next, we insert $5$.

<div class="center">
<img src="/img/19/avl32.png" width="80%">
</div>

Our BST has three nodes now. Notice the heights and balance factors of the parent and _grandparent_ of $5$ have changed. In particular, the grandparent (the root) is not balanced anymore! 

A single rotation will not restore the balance! However, if we were to push $7$ to the **right** of $5$, we would _transform_ the structure to a pattern we have seen before:

<div class="center">
<img src="/img/19/avl33.png" width="80%">
</div>

<details class="resource">
<summary>The above is a (single) left rotation away from being balanced!</summary>

<div class="center">
<img src="/img/19/avl29.png" width="100%">
</div>

</details>

So we perform a **left** rotation:

<div class="center">
<img src="/img/19/avl34.png" width="80%">
</div>

As you have noticed, we needed two rotations, first a right and then a left rotation. This is called a (double) **right-left rotation**.

<div class="center">
<img src="/img/19/avl35.png" width="100%">
</div>

Notice the violation of balance property occurred in the grandparent of the newly inserted node. From the perspective of the grandparent node, <u>the problem was in the **right child's left subtree**.</u> The solution is a (double) right-left rotation to bring the _median_ value above the high and low values. 