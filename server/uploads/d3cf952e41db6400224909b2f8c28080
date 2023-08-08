# Running time

<div id="outcomes"><details><summary></summary>

* Recognize the speed difference between linear search and binary search

</details></div>


For binary search, like linear search, the best case is when we get lucky, and the first value we look at is the target value. But let's consider the worst-case: the target element is not to be found. 

Assume the array has $n$ elements. For some random target value (which is not in the array), we look at the value in the middle and eliminate about half of the numbers. We repeat this process again and again until there is one element left. The question is, how many steps it will take us to get to that last element. 

<details class="demo">
<summary>Demo</summary>

The following slides assist in building an intuition for the answer:

<div class="pdf" file="../pdf/binary_search_runtime.pdf"></div>

</details>

At each _step_, as can be seen from the demo, <span class= "highlight">we reduce the search space by a factor proportional to the inverse of 2 raised to the power of step.</span> So, the total number of steps Binary search takes to finish its search, $x$, is proportional to the $\log_2 n$.

> **Note on notation**
> 
> In this class I use the notation $\lg x$ for _binary_ logarithm $\log_2 x$.

<details class="resource">
<summary>Resources</summary>

* Khan Academy's lesson on [running time of binary search](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/running-time-of-binary-search) is a delight to read.

</details>
