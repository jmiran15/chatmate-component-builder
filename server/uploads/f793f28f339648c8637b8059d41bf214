# Ranked Array Representation

<div id="outcomes"><details><summary></summary>

* Explain how a binary heap can be represented using a (ranked) array.

</details></div>

A complete binary tree can be uniquely represented by storing its level order traversal in an array.

<div class="center">
<img src="/img/20/rank.png" width="90%">
</div>

The root is the second item in the array. We skip the index zero cell of the array for the convenience of implementation. Consider $k^{\text(th)}$ element of the array, 

* its left child is located at `2 * k` index
* its right child is located at `2 * k + 1` index
* its parent is located at `k / 2` index

<span class="tag">Exercise</span> Do we have to skip index zero?

<details class="solution" data-release="Mar 29, 2023 17:00:00">
<summary>Solution</summary>

No! We could start at index zero. However, the formulas for getting children and parents would be different (how?).

</details>
