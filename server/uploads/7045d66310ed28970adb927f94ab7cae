# Runtime after improvements!

<div id="outcomes"><details><summary></summary>

* Identify the *amortized* runtime of union-find operations.

</details></div>

If implemented with Union-by-size and Path Compression:

* practically keeps the tree almost flat
* makes the operations work in $\Omicron(\lg^* N)$

<div class="note">

$\lg^* N$ (read: [Iterated logarithm](https://en.wikipedia.org/wiki/Iterated_logarithm) of $N$) is the number of times one needs to apply $\lg$ to $N$ to get a value less than or equal to $1$. 

</div>

In practice, one could think of it to be almost $\Omicron(1)$ since it exceeds $5$ only after it has reached $2^{65536}$.

**Aside:** The proof of the above running time is beyond the scope of this course. The Union-Find data structure was invented in 1964. The running time above was proved in 1973 (by Hopcroft and Ullman &mdash; see their [paper](https://epubs.siam.org/doi/abs/10.1137/0202024)). 
