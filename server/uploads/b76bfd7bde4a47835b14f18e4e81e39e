# Modified Search Problem: Find Distance

<div id="outcomes"><details><summary></summary>

- Describe a variant of the general Graph Search problem that finds the distance between a source and every reachable vertex. Distance is defined as the length of a path from the source to that vertex.
- Modify BFS/DFS to find the distance between a source and every reachable vertex, where distance is the length of a path from the source to that vertex.

</details></div>

Let us further modify the goal of the General Graph Search problem:

<div class="note">

**Goal:** Find the distance of each (reachable) vertex in $G$ to $s$, where "distance" is defined as the **length** of a path from $s$ to the other vertex.

</div>

Let's make the observation that on a path from $s$ to $v$ and then to $u$ following the edge $(v, u)$, we have $d(u)=d(v)+1$ where $d(x)$ is the distance of vertex $x$ to the source $s$.

<div class="center">
<img src="/img/28/graph01.png" width="80%">
</div>

The demo here uses BFS, but we could do the same with DFS!

<details class="demo">
<summary>Demo</summary>
<div class="pdf" file="bfs-dist.pdf"></div>
</details>

The following pseudocode describes the BFS algorithm. 

```js
// Pre: "s" is the source vertex
explored = {}
explored[s] = true 
queue.enqueue(s)
while (!queue.empty())
    v = queue.dequeue()
    for (w in adjacency[v])
        if (!explored[w])
            explored[w] = true    
            queue.enqueue(w)
```

<span class="tag">Exercise</span> Modify it to include and update the `distance` collection according to the demo.

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

```js
distance = {}
explored = {}
distance[s] = 0 
queue.enqueue(s)
while (!queue.empty())
    v = queue.dequeue()
    for (w in adjacency[v])
        if (!explored[w])
            explored[w] = true    
            queue.enqueue(w)
            distance[w] = distance[v] + 1
```

</details>