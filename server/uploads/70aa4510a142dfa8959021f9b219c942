# Treap Insertion: Exercise

<div id="outcomes"><details><summary></summary>

* Select the appropriate rotation type to rebalance a Treap after performing an insertion.

</details></div>

Consider the following (max-heap) treap, where the keys are the letters and the priorities are the integers:

<div class="center">
<img src="/img/21/treap13.png" width="90%">
</div>

<span class="tag">Exercise</span> Show the result of inserting the key **M**, including any necessary rotations. <u>Assume the priority generated for the key **M** is 15.</u>

<details class="solution" data-release="Mar 31, 2023 17:00:00">
<summary>Solution</summary>

We insert **M** following the insertion process of a regular BST (ignoring priorities):

<div class="center">
<img src="/img/21/treap14.png" width="90%">
</div>

We must now apply tree rotations to fix the max-heap order property. Since **M** is to the left of **P**, we apply a right rotation to bring **M** above **P** and **P** to the right of **M**:

<div class="center">
<img src="/img/21/treap15.png" width="90%">
</div>

Since the priority of **M** is larger than the priority of **T**** we must apply tree rotation again to bring **M** above **T**:

<div class="center">
<img src="/img/21/treap16.png" width="90%">
</div>

We must apply a rotation one last time; this time, however, we apply a left rotation since **M** is to the right of **J**:

<div class="center">
<img src="/img/21/treap17.png" width="90%">
</div>

Notice the BST order property is maintained over the keys (letters) and the max-heap order property is maintained over the priorities (integers).

</details>