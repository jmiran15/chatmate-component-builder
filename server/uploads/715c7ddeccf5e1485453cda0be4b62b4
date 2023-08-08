# Table Size

<div id="outcomes"><details><summary></summary>

* Determine table size and when to rehash.

</details></div>

<div class="note">

When choosing a table size (capacity), selecting a **prime number** larger than the desired table size is recommended.

</div>

Why? There is an intuitive explanation on StackExchange (use this [link](https://cs.stackexchange.com/a/64191)). The idea generally is that we compute the index as 

```java
// Compress hashcode to index range [0, M-1]
index = key.hashCode() % M; 
```

Assume the value returned from `key.hashCode()` is $K$. Then, for every possible $K$ that shares a common factor with $M$, the key will be hashed to multiple positions of this factor. Therefore, to minimize collisions, we can reduce the number of common factors between $M$ and $K$ by choosing $M$ to have very few factors: a prime number.

In particular, when you rehash, if you double the table capacity, you get an even number. If the table capacity $M$ is an even number, and the `key.hashCode()` is even, the `index` will also be an even number. This occurrence can bias the entries in the table to only occupy the even indices. In that case, only half the table positions may be used. 

When it comes to implementing the hash table, a common practice is to tabulate primes $p_1, p_2, \dots, p_{k}$ (for some choice of $k$) and use it as a look-up table to pick the table size. Something like this:

```java
int primes[] = {2, 5, 11, 23, 47, 97, 197, 397, 797, 1597, 3203, 6421, 12853, 25717, 51437,102877, 205759, 411527, 823117, 1646237,3292489, 6584983, 13169977};
```

When this strategy is employed, the table capacity is capped at $p_k$. Alternatively, when the capacity reaches $p_k$, the algorithm switches to doubling the capacity for the following rehashes.

<details class="resource">
<summary>Resources</summary>

* [Why should the size of a hash table be a prime number?](https://www.quora.com/Why-should-the-size-of-a-hash-table-be-a-prime-number) on Quora.
* [Why Should the Length of Your Hash Table Be a Prime Number?](https://medium.com/swlh/why-should-the-length-of-your-hash-table-be-a-prime-number-760ec65a75d1) on Medium.
* [Good hashtable primes](https://planetmath.org/goodhashtableprimes) on Planet Math.

</details>