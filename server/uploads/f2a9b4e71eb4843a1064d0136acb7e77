# Quicksort: Analysis

<div id="outcomes"><details><summary></summary>

* Analyze the best and worst-case time efficiency of QuickSort.

</details></div>

<span class="tag">Exercise</span> Based on your understanding of the "partitioning" process, what is the runtime of the partition subroutine?

<details class="solution" data-release="Apr 26, 2023 17:00:00">
<summary>Solution</summary>

It is $\Omicron(n)$; each element is visited once using the _left_ and _right_ pointers. 

</details>

For the following theoretical considerations, assume the case where we select the pivot to be the rightmost element.

<div class="note">

The quicksort runs in $\Omicron(n^{2})$ time in the **worst-case**.

</div>

<span class="tag">Exercise</span> Complete the following statement.  

* The worst case is when the sequence values are already sorted (in ascending or descending order). 
  
* In this case, the partition algorithm will always select the (next) smallest/largest element, resulting in the most unbalanced split possible; two subsequences with  `________` and `________` elements.

* Repeated partitioning of this type will occur `________` times before both subsequences get down to size 1 or 0 subsequences (base-case).. 

* So there will be `________` calls made to the partition algorithm, which itself runs in $\Omicron(n)$ time.

* So the total running time for the quicksort algorithm, in this case, is $\Omicron(n^{2})$.


<details class="solution" data-release="Apr 26, 2023 17:00:00">
<summary>Solution</summary>

* The worst case is when the sequence values are already sorted (in ascending or descending order). 
  
* In this case, the partition algorithm will always select the (next) smallest/largest element, resulting in the most unbalanced split possible; two subsequences with $(n-1)$ and $0$ elements.

* Repeated partitioning of this type will occur $\Omicron(n)$ times before both subsequences get down to size 1 or 0 subsequences (base-case).

* So there will be $\Omicron(n)$ calls made to the partition algorithm, which itself runs in $\Omicron(n)$ time.

* So, the total running time for the quicksort algorithm, in this case, is $\Omicron(n^{2})$.

</details>

<span class="tag">Exercise</span> In the worst-case, quicksort behaves like selection sort. True or false? Why?

<details class="solution" data-release="Apr 26, 2023 17:00:00">
<summary>Solution</summary>

True because each call to partition amounts to selecting the largest (or smallest) element from the subsequence passed to it.

</details>

<div class="note">

The quicksort runs in $\Omicron(n \lg n)$ time in the **best-case**.

</div>

<span class="tag">Exercise</span> Complete the following statement.   

* The best case is when the sequence values are not in sorted order. Instead, each pivot selected happens to be the median of its subsequence.
   
* In this case, each recursive call to the quicksort algorithm divides the sequence into two subsequences of `_______________` length.

* Similar to binary search and merge sort, this repeated subdivision takes `________` steps to get down to size 1 or 0 subsequences (base-case).

* So there will be `________` levels in the tree of recursive calls, where each level does $\Omicron(n)$ work.

* So, the total running time for the quicksort algorithm, in this case, is $\Omicron(n \lg n)$.

<details class="solution" data-release="Apr 26, 2023 17:00:00">
<summary>Solution</summary>

* The best case is when the sequence values are not in sorted order. Instead, each pivot selected happens to be the median of its subsequence 
  
* In this case, each recursive call to the quicksort algorithm divides the sequence into two subsequences of *nearly equal* length.

* Similar to binary search and merge sort, this repeated subdivision takes $\lg n$ steps to get down to size 1 or 0 subsequences (base-case).
  
* So there will be $\Omicron(\lg n)$ levels in the tree of recursive calls, where each level does $\Omicron(n)$ work.
  
* So, the total running time for the quicksort algorithm, in this case, is $\Omicron(n \log n)$.

</details>

<div class="note">

The quicksort runs in $\Omicron(n \lg n)$ time in the **average case**.

</div>

The proof is beyond the scope of this course! However, the interested reader is referred to [CLRS](https://mitpress.mit.edu/books/introduction-algorithms-third-edition), section $7.2$, Performance of quicksort.


<details class="resource">
<summary>Resources</summary>

* Implementation of partition and quicksort as well as a detailed analysis of runtime can be found here: [Quicksort implementation and analysis](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort).
* [Analysis of quicksort](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/analysis-of-quicksort) on Khan Academy.
* Wikipedia's entry on [Quicksort: Formal Analysis](https://en.wikipedia.org/wiki/Quicksort#Formal_analysis).

</details>
