# Linear Probing: Analysis

<div id="outcomes"><details><summary></summary>

* Analyze the efficiency of "open address" hash tables.

</details></div>

If there are no collisions, insert/remove and search performance is $\Omicron(1)$; this is the *best-case* scenario.

The *worst-case* scenario is when the probing sequence goes over every occupied position. This scenario leads to $\Omicron(n)$ performance where $n$ is the number of items stored in the hash table.

Given an open-address hash table with load factor $\alpha$, the **expected** number of probes in an unsuccessful search (or for inserting an element) is _at most_:

$$
\frac{1}{1 - \alpha}
$$

The statement above can be proved by assuming the hash table employs a uniform hashing function. The proof is beyond the scope of this class. Interested reader is referred to the [CLRS](https://mitpress.mit.edu/books/introduction-algorithms-third-edition): Theorem $11.6$ and Corollary $11.7$. 

> **The take-home message**: since $\alpha < 1$ in open-address hash tables, the average (expected) performance is constant time <u>under the assumption of uniform hashing.</u>

<details class="resource">
<summary>Resources</summary>

* Wikipedia entry on [Hash Table: Performance](https://en.wikipedia.org/wiki/Hash_table#Performance).

</details>


