# Merge Sort: Optimization?

<div id="outcomes"><details><summary></summary>

* Determine how to optimize the merge phase to be O(1) for sorted subarrays and why this results in $\Omicron(n)$ for already sorted starting sequences.

</details></div>

You can optimize bubble sort to stop early when the input is sorted. The optimized version of bubble sort runs in $\Omicron(n)$ for the case when the input sequence is already sorted. 

<div class="note">

The merge sort algorithm can also be optimized to run in $\Omicron(n)$ when the input sequence is already sorted.

</div>

<span class="tag">Exercise</span> Can you come up with the optimization strategy and justify it runs in $\Omicron(n)$ when the input sequence is already sorted.

<details class="solution" data-release="Apr 21, 2023 17:00:00">
<summary>Solution</summary>

Since the (in-place) merge operation assumes the two sub-arrays (to be merged) are already sorted, we can check if the last element of the first subarray is less than or equal to the first element of the second sub-array. In that case we can *escape* merging:

```java 
if (a[mid - 1] > a[mid]) { // escape comparision 
	merge(a, left, mid, right)
}
```

The runtime will be $\Omicron(n)$ because the "escape comparison" is done for every pair of subarrays level by level as you merge $n$ subarrays to $n/2$ to $n/4$ to $\dots$ to $1$ array. So the total number of comparisons would be $n/2 + n/4 + n/8 + \dots + 1$ which is $\Omicron(n)$

</details>