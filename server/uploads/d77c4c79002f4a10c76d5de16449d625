# Load Factor

<div id="outcomes"><details><summary></summary>

* Compute the **load factor** of a hash table.

</details></div>

The **load factor** ($\alpha$) for a hash table is a measure that indicates how "full" the table is. It is defined as the number of filled cells divided by table capacity.

$$
\alpha = \frac{\text{number of filled cells}}{\text{table capacity}}
$$

Notice the numerator is "number of filled cells," that is, the total number of items stored in the table plus the tombstones.

<div class="note">

The lower the load factor, the better the performance. There is less chance of a collision when a table is sparsely populated.

</div>

<u>When the load factor reaches a given threshold, rehashing kicks in.</u> Since rehashing increases the capacity, it reduces the load factor.

The threshold is usually found empirically based on benchmarking experiments. For example, Java's built-in Hash Table (HashMap) maintains a load factor $\alpha \le 0.75$.

The load factor threshold is usually configurable as it offers a tradeoff between time and space costs. <u>Lower load factor means fewer collisions but more memory overhead.</u> 