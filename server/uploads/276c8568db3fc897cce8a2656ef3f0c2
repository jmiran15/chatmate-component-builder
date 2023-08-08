# Dijkstra's Algorithm

<div id="outcomes"><details><summary></summary>

* Trace Dijkstra's algorithm (shortest path in weighted graphs) by specifying the values in auxiliary data structures.

</details></div>

[E. W. Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) (1930-2002), the legendary Dutch Computer Scientist (and Turing Award winner), discovered an algorithm for finding the shortest path (in weighted graphs).

<div class="center">
<img src="/img/28/dijkstra.png" width="20%">
</div>

Dijkstra's algorithm works by exploring the (unexplored) neighbors of the next vertex <u>with the smallest distance</u> to the source vertex. For this reason, the algorithm is also called *Shortest Path First* (SPF) algorithm.

The intuition behind Dijkstra's algorithm is that if vertex $B$ is on the shortest path from $A$ to $D$, then the _subpath_ from $B$ to $D$ is also the shortest path between vertices $B$ and $D$.

<div class="center">
<img src="/img/28/graph05.png" width="60%">
</div>

> For a rigorous analysis and formal proof of correctness, refer to [CLRS](https://mitpress.mit.edu/books/introduction-algorithms-third-edition), Third Edition, Chapter 24, Section 3, Dijkstra's Algorithm on page 658.

Here we will use a demo to understand the steps involved in Dijkstra's Algorithm.

<details class="demo">
<summary>Demo</summary>
<div class="pdf" file="dijkstra.pdf"></div>
</details>

<span class="tag">Exercise</span> Complete the pseudocode for Dijkstra's Algorithm:

```js
for each vertex v
    distance[v] = Infinity
    previous[v] = null
    explored[v] = false
distance[s] = 0   // s is the source
repeat N times
    let v be unexplored vertex with smallest distance
    ________________
    for every u: unexplored neighbor(v)
        d = distance[v] + weight[v,u]  
        if ________________
            _______________
            _______________
```

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

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

</details>


<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm).
* Brilliant's Wiki on Dijkstra's [Shortest Path Algorithm](https://brilliant.org/wiki/dijkstras-short-path-finder/).
* Programiz Tutorial on [Dijkstra's Algorithm](https://www.programiz.com/dsa/dijkstra-algorithm).
* [Dijkstra's Shortest Path Algorithm - A Detailed and Visual Introduction](https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/) on FreeCodeCamp.
* Computerphile YouTube Video on [Dijkstra's Algorithm](https://youtu.be/GazC3A4OQTE) - highly recommended!

</details>
