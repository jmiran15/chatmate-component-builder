# Modified Search Problem: Find Path

<div id="outcomes"><details><summary></summary>

* Modify BFS/DFS to find a path between a source and every reachable vertex.

</details></div>

**Idea:** To produce a path for each vertex, keep track of the vertex from which it was explored during the BFS/DFS process.

The demo here uses BFS, but we could do the same with DFS!

<details class="demo">
<summary>Demo</summary>
<div class="pdf" file="bfs-prev.pdf"></div>
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

<span class="tag">Exercise</span> Modify it to include and update the `previous` collection according to the demo.

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

```js
previous = {}
explored = {}
explored[s] = true 
queue.enqueue(s)
while (!queue.empty())
    v = queue.dequeue()
    for (w in adjacency[v])
        if (!explored[w])
            explored[w] = true    
            queue.enqueue(w)
            previous[w] = v
```

</details>

<span class="tag">Exercise</span> Assuming the modified BFS produced the `previous` collection. Use `previous` to print out a path from the source to any given vertex.

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

```js
// Pre: target is reachable from source
node = target
stack.push(node)
while (node != source)
   node = previous[node]
   stack.push(node)

print stack
```

</details>