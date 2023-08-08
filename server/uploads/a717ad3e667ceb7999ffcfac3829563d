# Random BST: Treap

<div id="outcomes"><details><summary></summary>

* Describe what a Treap data structure is.

</details></div>

<div class="note">

Treap is a data structure that combines binary search tree and binary heap (hence the name: Tree + Heap ⇒ Treap).

</div>

* Each entry (key-value pair) is assigned a **random** *priority*. 
* The BST ordering property is based on keys. 
* The priorities are used to create a (_min_ or _max_) heap.

### Insertion

* Generate random priority for the entry (key-value pair).
* Insert the entry as you would in BST (based on the "key" and ignoring priorities)
* If priorities (inserted node and its parent) are not in the desired order (based on whether we maintain a max- or min-heap), **rotate node up and parent down** (instead of swim-up).    
* Repeat the last step until all priorities are in the desired order. 


### Removal

* Find the target following a "lookup" in BST (on keys, ignoring priorities). 
* Change the priority of the entry to be removed to a value that results in the entry sinking. For example, if the priorities are non-negative, set the target's priority to $-1$.
* Rotate down the target until it cannot sink any further (it becomes a leaf), then remove it.

<div class="note">

After any sequence of insertions and deletions, the *height* of the tree is, **with high probability**, *proportional to* the **logarithm** of the number of entries.

</div>


<details class="resource">
<summary>Resources</summary>

- Wikipedia's entry on [Treap](https://en.wikipedia.org/wiki/Treap)
- [A Visual Introduction to Treap Data Structure (Part I: The Basics)](https://medium.com/carpanese/a-visual-introduction-to-treap-data-structure-part-1-6196d6cc12ee) on Medium.

</details>

