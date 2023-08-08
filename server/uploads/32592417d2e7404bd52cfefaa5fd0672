# `#Leaves` in a Complete Binary Tree

<div id="outcomes"><details><summary></summary>

- Explain why we can ignore the leaves in the heapify process.
- Show there are ⌈ n/2 ⌉ leaves in a complete binary tree.

</details></div>

Floyd's heapify algorithm works from the bottom of the tree upwards: compare each node to its children and move nodes down (sink) so that parent nodes are always larger than their children.

<div class="note">

However, the leaf nodes don't have any children; they can be ignored! 

</div>

<span class="tag">Exercise</span> How many leaves are in a complete binary tree that has $n$ nodes. Formulate this as an exact function of $n$ (not Big-Oh notation).

<details class="solution" data-release="Apr 28, 2023 17:00:00">
<summary>Solution</summary>

In a complete binary tree, there are $\left \lceil n/2 \right \rceil$ leaves and $\left \lfloor n/2 \right \rfloor$ non-leaf nodes (internal nodes and a root).

Let's build an intuition for this. The complete binary tree can be seen as the structure of a [single-elimination tournament](https://en.wikipedia.org/wiki/Single-elimination_tournament) with $k$ teams corresponding to the leaves. As a simplifying condition, imagine $k$ is a power of 2. Therefore, we have a _perfect_ (complete & full) binary tree:

<div class="center">
<img src="/img/23/heapify01.png" width="40%">
</div>

Each non-leaf (internal node) is a _game_ in which the loser is eliminated, and the winner goes up to the next round. Finally, there is one final match, which corresponds to the root.  

Since there will be only one winner, there must be $(k-1)$ games (non-leaf nodes) since every other $(k-1)$ team loses exactly once. Therefore, we have $k+(k-1)=2k−1$ nodes altogether. And, we can verify that

$$
\left \lceil \frac{n}{2} \right \rceil = \left \lceil \frac{2k-1}{2} \right \rceil = k \\; \\; \text{leaves}
$$

A similar analogy can be made for the case where $k$ is not a power of 2. You can imagine one lucky team rests in the first round of the tournaments and directly goes to the next round. Eventually, $k-1$ teams must be eliminated, and that takes $k-1$ games (non-leaf nodes).

**Aside:** the "proper" approach to proving the formula above for the number of leaves is through [Mathematical induction](https://en.wikipedia.org/wiki/Mathematical_induction).

The implication of this observation is to simplify the implementation of the heapify process:

```java
private static void heapify(Integer[] data) {
  for (int i = numNodes / 2; i >= 1; i--) {
    sink(data, i);
  }
}
```

</details>