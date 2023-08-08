# Graph Search: Analysis

<div id="outcomes"><details><summary></summary>

* Analyze the time complexity of BFS and DFS for each Graph implementation (list vs. matrix).

</details></div>

Here is a (more elaborate) pseudocode for solving the General Graph Search problem:

```text
mark s as explored, all other vertices as unexplored
D := a queue or stack data structure, initialized with s 
while D is not empty do
  remove the vertex from the front/top of D, call it v 
  for edge (v, w) in v's neighborhood do
    if w is unexplored then
      mark w as explored 
      add w to the end/top of D
```

<div class="note">

Notice the difference between BFS and DFS is that DFS uses **stack** but BFS uses **queue**.

</div>

<span class="tag">Exercise</span> Analyze the complexity of BFS algorithm (use Big-Oh notation).

<details class="solution" data-release="Apr 14, 2023 17:00:00">
<summary>Solution</summary>

```text
mark s as explored, all other vertices as unexplored // O(1), O(N)
D := a queue or stack data structure, initialized with s // O(1)
while D is not empty do                              // total O(N)     
  remove the vertex from the front/top of D, call it v  // O(1)
  for edge (v, w) in v’s neighborhood do                // O(neighbors(v))
    if w is unexplored then                             // O(1)
      mark w as explored                                // O(1)
      add w to the end/top of D                         // O(1)
```

* Both search explore each edge at most once (for directed graphs), or twice (undirected graphs — once
when exploring each endpoint).
* After edge $(v, u)$ is encountered, both $v$ & $u$ are marked as explored.
* We can implement the search in linear time if we can find eligible $(v, u)$ quickly (for each $v$)
* This is where adjacency (incidence) list will provide fast access.
* $\Omicron(\text{neighbors}(v))$ is $\Omicron(\deg(v))$ in incidence list (but it is $\Omicron(N)$ in adjacency matrix).
* $N \times O(\deg(v))$ is $\Omicron(M)$ because Handshaking lemma says $\sum_{v \in V} \deg(v) = 2M$.
* So in adjacency list, finding (unexplored) neighbors of each vertex takes total of $\Omicron(M)$ time.
* (In adjacency matrix, this total would be $\Omicron(N^2)$ : $N$ for `neighbors(v)` $\times$ $N$ vertices).
* Note that we can check $u$ is unexplored in $\Omicron(1)$ if we store this information in the vertex node (or HashTable of explored vertices where keys are the nodes). 

<div class="note">

The total running time of BFS & DFS is $\Omicron(M+N)$ if we use adjacency list representation.

</div>

The space complexity of a DFS, in practice, is usually lower than that of BFS. This is because, during BFS, all the nodes at one level must be stored, whereas in DFS, all the nodes in one path need to be stored. Thus, for instance, in a tree, the number of nodes per level usually exceeds the depth of the tree.

</details>
