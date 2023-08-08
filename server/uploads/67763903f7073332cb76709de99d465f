# Improvement 2: Path Compression

<div id="outcomes"><details><summary></summary>

- Trace the Quick Union implementation with path-compression heuristic.
- Explain the runtime improvements gained by using the heuristic for union-find operations.

</details></div>

<div class="note">

After computing the root of $p$, set the ID of each examined node to point to that root.

</div>

For example, consider the following tree:

<div class="center">
<img src="/img/30/graph03.png" width="30%">
</div>

Assume we perform `find(J)` operation. On our way to find the root, we would pass through $I$, $F$, $B$ until we get to $A$, the root.

We could set all these vertices to **directly** point to the root, so the tree becomes _shallower_:

<div class="center">
<img src="/img/30/graph04.png" width="40%">
</div> 

<div class="note">

The heuristic described above is known as **path compression**.

</div>