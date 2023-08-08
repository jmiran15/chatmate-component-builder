# Treap Removal: Exercise

<div id="outcomes"><details><summary></summary>

* Select the appropriate rotation type to rebalance a Treap after performing a removal.

</details></div>


Consider the following (max-heap) treap, where the keys are the letters and the priorities are the integers:

<div class="center">
<img src="/img/21/treap23.png" width="90%">
</div>

<span class="tag">Exercise</span> Show the result of removing the key **T**, including any necessary rotations. 

<details class="solution" data-release="Mar 31, 2023 17:00:00">
<summary>Solution</summary>

After finding the node with key **T** we set its priority to $-1$:

<div class="center">
<img src="/img/21/treap24.png" width="90%">
</div>

We must now apply tree rotations to fix the max-heap order property. Among the children of **T**, the node with key **Y** has the highest priority. So we must apply a _left_ rotation to bring **Y** above **T**:

<div class="center">
<img src="/img/21/treap25.png" width="90%">
</div>

Among the children of **T**, the node with key **P** has the highest priority. So we must apply a _right_ rotation to bring **P** above **T**:

<div class="center">
<img src="/img/21/treap26.png" width="90%">
</div>

Notice at this point we can simply remove **T** (since it has only one child). If we were to follow the process completely, we would have to apply another _left_ rotation to bring **X** above **T**:

<div class="center">
<img src="/img/21/treap27.png" width="90%">
</div>

We can easily remove the node with key **T** as it is a leaf now.

<div class="center">
<img src="/img/21/treap28.png" width="90%">
</div>

</details>