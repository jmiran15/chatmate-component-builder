# Rehash

<div id="outcomes"><details><summary></summary>

* Understand **rehashing** well enough to implement it.

</details></div>

The likelihood of a collision is proportional to how full the table is.

<div class="note">

When the hash table becomes _sufficiently_ full, a _larger_ table should be allocated, and the entries should be <u>reinserted</u>. 

</div>

Unlike growing a dynamic array, copying the values from the original collection to the new one will not work with a hash table. 

<details class="resource">
<summary>Why not?</summary>

The table size affects the index returned by the hashing procedure. For example, suppose a key was inserted at index $x$ in the smaller table. In that case, it will not necessarily be mapped to the same index in a larger table. Therefore, the search operation may not find an element in the table after the table is resized.

</details>

The solution is **rehashing**:

1. Allocate a new hash table (with twice the capacity of the original).

2. **Reinsert** each old table entry (that has not been deleted) into the new hash table.