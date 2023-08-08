# Selecting the Pivot

<div id="outcomes"><details><summary></summary>

* Compare the advantages and disadvantages of various **pivot** choices when implementing the general QuickSort algorithm.

</details></div>

So far, we have selected the rightmost element as the pivot. Our analysis of quicksort was based on this presupposition. The analysis would be the same if we were to choose the leftmost element instead. 

For the case of the sorted sequence, selecting the middle element would result in best-case performance. Generally, the ideal pivot is the _median_ of the sequence to be partitioned.

<details class="resource">
<summary>Why?</summary>

Because it results in partitions of nearly equal length.

</details>

Employing the median to sort may seem like the "[chicken or the egg](https://en.wikipedia.org/wiki/Chicken_or_the_egg)" problem since finding the median seems to require one to sort the sequence first! There are, however, celever algorithms to compute the median in linear time but those approaches are not considered practical choices.

Alternatively, one might calculate the average of all values or the mid-point value (as $\frac{max + min}{2}$). However, these strategies are $\Omicron(n)$ to compute and only good if the values in the sequence follow a symmetric distribution; e.g. a normal (Gaussian) distribution.

Another strategy is to select a random element as the pivot and hope the choice makes for partitions of *nearly equal* length. It can be shown this strategy results in *expected* $\Omicron(n \lg n)$ worst-case runtime.

<div class="note">

A popular choice for pivot is <span class="highlight">selecting the median of the leftmost, rightmost and the middle elements</span> in the sequence. This strategy is called **the median of the three.**

</div>

<span class="tag">Exercise</span> Trace the first pass of running quicksort (applying partitioning process) on the following sequence using **the median of the three** for your pivot choice.

$$
20, \space 13, \space 7, \space 71, \space 31, \space 10, \space 5, \space 50, \space 17
$$

After selecting the pivot, swap it with the rightmost element, then apply partitioning.
Use the following table to trace the process; show every swap in a different row.

<div class="center">
<img src="/img/25/pivot_question.png" width="95%">
</div>

<details class="solution" data-release="Apr 26, 2023 17:00:00">
<summary>Solution</summary>

Pivot is the median of $\\{20, 31, 17\\}$ which is $20$

<div class="center">
<img src="/img/25/pivot_solution.png" width="100%">
</div>

Items in bold indicate the elements which were swapped. 

</details>

<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [Quicksort: Choice of pivot](https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot).
* CMU's 15-451 Lecture notes on [Probabilistic Analysis and Randomized Quicksort](https://www.cs.cmu.edu/afs/cs/academic/class/15451-s07/www/lecture_notes/lect0123.pdf).

</details>
