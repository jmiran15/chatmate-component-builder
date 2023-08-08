<!---
outcomes: 

--->

# Quick Find

<div id="outcomes"><details><summary></summary>

- Trace the Quick Find implementation strategy for Union-Find.
- Identify the runtime of Union-Find operations under Quick Find implementation.

</details></div>

The main idea behind this approach is to assign an ID to each vertex (object) to record its "membership"; $p$ and $q$ are connected if and only if they have the same ID.

* `connected(p,q)`: check if $p$ and $q$ have the same ID.
* `union(p,q)`: to merge components containing $p$ and $q$, change all entries whose ID equals `ID[q]` to `ID[p]`.

<div class="note">

It is common to store vertices (or their references) in an array and use array indices to refer to each vertex.

</div>

<details class="demo">
<summary>Demo</summary>
<div class="pdf" file="quickfind.pdf"></div>
</details>

<span class="tag">Exercise</span> What is the complexity of core operations under "Quick Find" implementation?

<details class="solution" data-release="Apr 21, 2023 17:00:00">
<summary>Solution</summary>

* `find`/`connected` involves checking `ID[p]==ID[q]` so it is $\Omicron(1)$.
* `union` is expensive, in the worst-case, it is $\Omicron(N)$ where $N$ is the number of vertices (objects).

If we start with a $N$ singleton set of objects, to build the MST, it takes at least $(N-1)$ union commands, leading to $\Omicron(N^2)$ runtime.

</details>