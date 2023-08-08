# Chaining vs. Open Addressing

<div id="outcomes"><details><summary></summary>

* Differentiate "chaining" collision resolution from "open addressing."

</details></div>

Once there is a collision, instead of probing for an open (unoccupied) position, you traverse the auxiliary data structure referenced by the table element at `index = key.hashCode() % M`. Once you have determined that an item is not present, you can insert it into the auxiliary data structure. 

To delete an item, you remove it from the auxiliary data structure. In contrast to open addressing, removing an item actually deletes it, so it will not be part of future search chains.

Another contrast to open addressing is that only items with the same value for `key.hashCode() % M` will be examined during the search. Search chains can overlap in open addressing. For example, a search chain may include items in the table with different starting index values.

You can store more elements in the table than its capacity allows (which is not the case for open addressing, unless you rehash and grow the table). Although in chaining you will not run out of space, you can end up with a load factor $\alpha > 1$, which means higher chances of collisions. Therefore, <u>you should consider rehashing in chaining too (to keep the load factor small).</u>