# Remove Operation

<div id="outcomes"><details><summary></summary>

* Trace the removal operation of Priority Queue with Binary Heap implementation.

</details></div>

Consider we have the following _min_-heap:

<div class="center">
<img src="/img/20/heap03.png" width="70%">
</div>

To remove the best, that is, to remove the minimum element, we can replace the root with the last element of the heap.

<div class="center">
<img src="/img/20/heap07.png" width="70%">
</div>

Then, we will delete the last element.

<div class="center">
<img src="/img/20/heap08.png" width="70%">
</div>

Finally, we restore the heap property by percolating the new root down. This process is often called **sink-down**. It involves comparing the added element with its children and moving it down a level (swapping with the smaller of the two children) if needed. 

<div class="center">
<img src="/img/20/heap09.png" width="70%">
</div>

The process is repeated until the children are smaller than or equal to the percolating (sinking) element.

<div class="center">
<img src="/img/20/heap10.png" width="70%">
</div>

Or until the percolating (sinking) element reaches the deepest level.

<div class="center">
<img src="/img/20/heap11.png" width="70%">
</div>

Similar to insertion, the worst-case runtime for removal is $\Omicron(\lg n)$ since we need at most one swap on each heap level on the path from the root node to the deepest level.