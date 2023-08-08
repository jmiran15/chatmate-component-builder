# Quick Union

<div id="outcomes"><details><summary></summary>

- Trace the Quick Union implementation strategy for Union-Find.
- Identify the runtime of Union-Find operations under Quick Union implementation.

</details></div>

This approach is similar to Quick Find in that each vertex (object) is given an ID. However, the ID links one node to another to form a "parent/child" relationship as in a tree structure.

* `connected(p,q)`: check if $p$ and $q$ have the same _root_ (i.e., following their _parents_ we reach the same root object).
* `union(p,q)`: to merge components containing $p$ and $q$, set the root of the component containing $q$ to be a direct child of the root of the component containing $p$.

<details class="demo">
<summary>Demo</summary>
<div class="pdf" file="quickunion.pdf"></div>
</details>

<span class="tag">Exercise</span> What is the complexity of core operations under "Quick Union" implementation?

<details class="solution" data-release="Apr 21, 2023 17:00:00">
<summary>Solution</summary>

* Both `connected` and `union` need to find the root of the components containing their arguments.

```java
// chase parent pointers until reach root
private int root(int x) { 
  while (x != id[x]) {
    x = id[x]; 
  }
  return x; 
} 
```

The runtime of `root` corresponds to the height of the (logical) tree structure containing the $x$ object. In the worst-case, it will be $\Omicron(N)$.

<div class="note">

If we keep the tree flat, we can expect better performance in practice.

</div>

</details>