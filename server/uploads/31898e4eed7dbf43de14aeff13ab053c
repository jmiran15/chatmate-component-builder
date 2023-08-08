# Merge Sort: Analysis

<div id="outcomes"><details><summary></summary>

* Analyze the best and worst-case time efficiency of MergeSort.

</details></div>

<div class="note">

The merge sort runs in $\Omicron(n \lg n)$ time.

</div>

**Justification:**

* The number of times the merge sort divides a sequence is the number of times $n$ can be halved: $\Omicron(\lg n)$. Therefore, the divide part has $\Omicron(\lg n)$ levels. At each level $l$, we perform $2^l$ _divide_ (which itself is a constant time). So the total work is $2^0 + 2^1 + \dots + 2^{\lg n} \in \Omicron(n)$.

<div class="center">
<img src="/img/24/divide.png" width="80%">
</div>

* The number of times merge sort merges the subsequences is equal to the number of sub-sequences. Therefore, the merging part also has $\Omicron(\lg n)$ levels. Consider at each level, we perform $k\times \Omicron(n/k) \in \Omicron(n)$ time to merge the sub-arrays. So the total running time for the merge sort algorithm is  $\Omicron(n \lg n)$, 

<div class="center">
<img src="/img/24/merge.png" width="80%">
</div>

<details class="resource">
<summary>Formal Proof</summary>

A formal proof can be constructed by writing the runtime of merge sort as a **recurrence relation** 
$T(n) = 2T(n/2) + \theta(n)$ and showing $T(n) \in \theta(n \lg n)$. 

If you want to look this up, search for "the master theorem for divide-and-conquer recurrences" and look up "case 2". This is, however, beyond the scope of this course.

</details>

<details class="resource">
<summary>Resources</summary>

* [Analysis of Merge Sort](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/analysis-of-merge-sort) on Khan Academy.
* Wikipedia's entry on [Merge sort: Analysis](https://en.wikipedia.org/wiki/Merge_sort#Analysis).
* Wikipedia's entry on [Master Theorem](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)).

</details>

