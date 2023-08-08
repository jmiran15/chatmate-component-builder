# Contamination

<div id="outcomes"><details><summary></summary>

* Explain what is meant by *contamination* of open address hash tables.

</details></div>

In the previous lesson, we learned about tombstones. The use of tombstones prevents search from terminating prematurely. In addition, the insert operation can reuse the positions marked by a tombstone.

<details class="resource">
<summary>Is it safe for insert to write over tombstone?</summary>

You should not simply replace a tombstone with a new item. Why? Well, suppose the item was already inserted in the table! Then, it is necessary to follow the probe sequence to ensure that the new item is not already present in the table.

So, you either must never write over tombstones or perform a search before insertion to verify that a duplicate is not in the table. Only then the new item can safely be inserted into the slot of the first tombstone encountered through the probe sequence.

</details>

<div class="note">

Tombstones waste space and reduce search efficiency.  

</div>

In the worst-case scenario, if the table is (almost) full of tombstones as most of the items were deleted, you will have $\Omicron(n)$ performance when searching. However, there are truly only a few items remaining in the table! <u>This phenomenon is called **contamination**. To recover from contamination, you must **rehash**!</u>