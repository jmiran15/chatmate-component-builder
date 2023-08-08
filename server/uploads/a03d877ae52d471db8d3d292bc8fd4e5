# Other Probing Strategies

<div id="outcomes"><details><summary></summary>

* Describe other probing strategies (quadratic, double hashing, ... for open address hash table.

</details></div>

Another probing strategy is **double hashing**, where the interval between probes is computed by a second hash function:

```java
int index = getIndex(key);
// if table[index] is occupied, then
for(int i = 0; i < M; i++) { 
  index = (getIndex(key) + hash(key) * i) % M; 
  // stop the loop when table[index] is available!
} 
```

Here, `hash(key) != key.hashCode()` and `hash(key) != 0`. (And, of course, the second hash function must also be a "good" hash function.)

<details class="resource">
<summary>How is the second hash function implemented?</summary>

In practice, the second hash function usually uses the first one (`key.hashCode()`) to produce another hash value.

The general form for this practice is as follows: $\text{index} = [h_1(k) + j\times h_2(k)] \space \text{mod} M$ looping over $j \in [1,M)$ until a position is found.

Let’s assume that the keys are already hash keys (i.e. $k$ is `key.hashCode`) then $h_1$ is what I defined earlier as `getIndex`: $h_1(k) = k \text{mod} M$ and the second hash function is $h_2(k) = q - (k \text{mod} q)$ where $q<M$.

For double hashing to probe all positions, you must select $q$ and $M$ as two mutual primes (their greatest common divisor is $1$)

</details>


<span class="highlight">The advantage of double hashing is that the probe sequence depends on the "key" (rather than a fixed pattern).</span> Double hashing avoids (both primary and secondary) clustering.

There are many, more sophisticated, techniques based on open addressing. Examples include:

* [Cuckoo Hashing](https://en.wikipedia.org/wiki/Cuckoo_hashing)
* [Coalesced Hashing](https://en.wikipedia.org/wiki/Coalesced_hashing)
* [Robin Hood Hashing](https://en.wikipedia.org/wiki/Hash_table#Robin_Hood_hashing)
* [Hopscotch Hashing](https://en.wikipedia.org/wiki/Hopscotch_hashing)

<details class="demo">
<summary>Cuckoo Hashing Demo</summary>

This section should be considered as an optional reading; we will go over it if time allows!

<div class="pdf" file="cuckoo.pdf"></div>

</details>
