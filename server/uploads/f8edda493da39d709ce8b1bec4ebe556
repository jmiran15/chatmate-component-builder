# PriorityQueue Implementation

<div id="outcomes"><details><summary></summary>

Contrast the efficiency of alternative implementation approaches.

</details></div>

Suppose we want to implement the operations of PriorityQueue using a linked list or an array-based implementation. 

<span class="tag">Exercise</span> Provide an example of core operations, for each underlying data structure, where the operation cannot be implemented better than $\Omicron(n)$. 

**Hint**: We have, generally, two choices: keeping the underlying data ordered (sorted) or not.

<details class="solution" data-release="Mar 29, 2023 17:00:00">
<summary>Solution</summary>

Keeping the underlying data sorted will enable us to perform `remove` and `best` in constant time. However, the `insert` will be $\Omicron(n)$ since an array implementation will require shifting elements around. Even a linked list implementation will require a linear search to find where to insert. 

Keeping the underlying data unordered (unsorted) will require us to perform a linear search for finding/removing the `best` (whether we use an array or a linked list implementation).

</details>
