# Dijkstra's Algorithm: Analysis

<div id="outcomes"><details><summary></summary>

- Analyze the running time of Dijkstra's algorithm, assuming an incidence/adjacency list Graph implementation.
- Describe the role of support data structures in reducing the running time of Dijkstra's algorithm from quadratic to log-linear.

</details></div>

Here is the Dijkstra's Algorithm for finding shortest path: 

```js
for each vertex v
    distance[v] = Infinity
    previous[v] = null
    explored[v] = false
distance[s] = 0   // s is the source
repeat N times
    let v be unexplored vertex with smallest distance
    explored[v] = true
    for every u: unexplored neighbor(v)
        d = distance[v] + weight[v,u]  
        if d < distance[u]
            distance[u] = d
            previous[u] = v
```

<span class="tag">Exercise</span> Analyze the complexity of SPF algorithm (use Big-Oh notation).

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

```js
for each vertex v            // O(N)
    distance[v] = Infinity      // O(1)
    previous[v] = null          // O(1)
    explored[v] = false         // O(1)
distance[s] = 0              // O(1)
repeat N times               // O(N)
    let v be unexplored vertex with smallest distance  // O(?)
    explored[v] = true          // O(1)
    for every u: unexplored neighbor(v)  // O(neighbor(v))
        d = distance[v] + weight[v,u]       // O(1)
        if d < distance[u]                  // O(1)
            distance[u] = d                 // O(1) 
            drevious[u] = v                 // O(1) 
```

Using incidence/adjacency list representation will make $\Omicron(\text{neighbor}(v))$ to be $\Omicron(\deg(v))$. Repeating this $N$ times will give runtime of $\Omicron(M)$ for this part of the algorithm.

Let's focus on $\Omicron(?)$:

* Finding (an unexplored) vertex with min distance is $\Omicron(N)$ if we store the "distances" in a linear data structure such as an array.
* Since the above will be repeated $N$ times, it pushes the running time of the algorithm to $\Omicron(N^2)$
* You can use a **priority queue** (min-heap; priority is distance) to get $\Omicron(\lg N)$ on finding (an unexplored) vertex with min distance.
* <span class="highlight">But you must also update the distances! How can you do that in Priority Queue?</span> (This is left unanswered - you need it for HW8!)
  
If $\Omicron(?)$ is $\Omicron(\lg N)$ (using a [modified] priority queue), we get total running time of $\Omicron(M + N \lg N)$.

<!--

Since the distances will only get smaller, we can add an updated distance to the priority queue, and it will still work. Still, the runtime to get the min will not be O(log N). Instead, it would be O(log M) which is okay when we assume the graph is sparse. 

Another solution is to implement a kind of "Adaptable" Priority Queue – naive "location-aware" approach is O(log N) to find * N iterations + O(log N) to update priorities * M iterations = O(M log N) total

There are more advanced implementations of priority queues (e.g., using Fibonacci Heap) that allow you to update priority (distance) in O(1) 
https://en.wikipedia.org/wiki/Fibonacci_heap

-->

</details>
