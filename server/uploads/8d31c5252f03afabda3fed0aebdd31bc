# Quick Union: Exercise

<div id="outcomes"><details><summary></summary>

- Explain the runtime improvements gained by using the heuristics for union-find operations.
- Define the iterated logarithm (log-star) function.
- Identify the amortized runtime of union-find operations.

</details></div>

Suppose you have singleton sets with the values $0$ through $6$. Then, we apply the following operations.

```js
union(0,5) 
union(1,4) 
union(2,3) 
union(3,6) 
union(4,6) 
union(0,4) 
```

<span class="tag">Exercise</span> Using both tree and array forms, show the result of each of the operations listed above, applying **union-by-size** and **path compression** heuristics. 

<details class="solution" data-release="Apr 21, 2023 17:00:00">
<summary>Solution</summary>

Here is the start:

<div class="center">
<img src="/img/30/graph05.png" width="100%">
</div>

After `union(0,5)`:

<div class="center">
<img src="/img/30/graph06.png" width="90%">
</div>

After `union(1,4)`:

<div class="center">
<img src="/img/30/graph07.png" width="80%">
</div>

After `union(2,3)`:

<div class="center">
<img src="/img/30/graph08.png" width="80%">
</div>

After `union(3,6)`: notice the size of the component containing $6$ is smaller than the size of the component containing $3$. Therefore, the component containing $6$ is added to the root of the component containing $3$.

<div class="center">
<img src="/img/30/graph09.png" width="80%">
</div>

After `union(4,6)`: notice the size of the component containing $4$ is smaller than the size of the component containing $6$. Therefore, the component containing $4$ is added to the root of the component containing $6$.

<div class="center">
<img src="/img/30/graph10.png" width="80%">
</div>

After `union(0,4)`: notice as we find the root of the component containing $4$, we apply path compression.

<div class="center">
<img src="/img/30/graph11.png" width="75%">
</div>

Then, as the size of the component containing $0$ is smaller than the size of the component containing $4$, the component containing $0$ is added to the root of the component containing $4$.

<div class="center">
<img src="/img/30/graph12.png" width="80%">
</div>

</details>