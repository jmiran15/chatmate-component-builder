# Double Rotation: Left-Right

<div id="outcomes"><details><summary></summary>

* Describe Double Left-Right Rotation.

</details></div>

Consider inserting the values $7, 5, 3$ in that order. 

We start by inserting $7$:

<div class="center">
<img src="/img/19/avl36.png" width="80%">
</div>

We have a BST with a single node; it is balanced! 

Next, we insert $3$.

<div class="center">
<img src="/img/19/avl37.png" width="80%">
</div>

Now our BST has two nodes. Notice the height, and balance factor of the root has changed (and it is still balanced).

Next, we insert $5$.

<div class="center">
<img src="/img/19/avl38.png" width="80%">
</div>

Our BST has three nodes now. Notice the heights and balance factors of the parent and _grandparent_ of $5$ have changed. In particular, the grandparent (the root) is not balanced anymore! 

A single rotation will not restore the balance! However, if we were to push $3$ to the **left** of $5$, we would _transform_ the structure to a pattern we have seen before:

<div class="center">
<img src="/img/19/avl39.png" width="80%">
</div>

<details class="resource">
<summary>The above is a (single) right rotation away from being balanced!</summary>

<div class="center">
<img src="/img/19/avl10.png" width="100%">
</div>

</details>

So we perform a **right** rotation:

<div class="center">
<img src="/img/19/avl40.png" width="80%">
</div>

As you have noticed, we needed two rotations, first a left and then a right rotation. This is called a (double) **left-right rotation**.

<div class="center">
<img src="/img/19/avl41.png" width="100%">
</div>

Notice the violation of balance property occurred in the grandparent of the newly inserted node. From the perspective of the grandparent node, <u>the problem was caused in **left child's right subtree**.</u> The solution is a (double) left-right rotation to bring the _median_ value above the high and low values. 