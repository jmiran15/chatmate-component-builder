<!---
outcomes: Use PriorityQueue to solve selection problems
--->

# PriorityQueue Aside: Selection Problem

Consider the following programming challenge:

> You are given an array of $n$ integers in no particular order. Write a program that prints out the $k^{\text{th}}$ best (max or min) value where $k \le n$.

Students came up with the following strategies to solve this problem (assuming "best" means "max"):

**Strategy 1:** Heapify the array using Floyd's algorithm to build a _max_-heap. Then, perform $k$ remove.

**Strategy 2:** Heapify the first $k$ element using Floyd's algorithm to build a _min_-heap. Then, for the remaining $n-k$ elements, compare each to best (min) in the heap; if the element is _larger_, remove the best (min) and insert the (larger) element instead. When done, the best element in the _min_-hep is the  $k^{\text{th}}$ best value in the collection!

<span class="tag">Exercise</span> For each strategy, perform asymptotic analysis for it time complexity.

<details class="solution" data-release="Apr 28, 2023 17:00:00">
<summary>Solution</summary>

**Strategy 1:**
* $\Omicron(n)$ heapify using Floyd's algorithm
* $k \times \Omicron(\lg n)$ remove.
* Total: $\Omicron(n + k\lg n)$

**Strategy 2:**
* $\Omicron(k)$ heapify the first $k$ elements using Floyd's algorithm
* for the other $n-k$ elements:
  * compare each to best (min) in heap: $\Omicron(1)$
  * if it is larger, 
    * remove the best (min): $\Omicron(\lg k)$
    * insert the larger element instead: $\Omicron(\lg k)$
* Total: $\Omicron(k) + (n-k) \times \Omicron(\lg k) \in \Omicron(k + n \lg k)$

</details>


<!--

http://www2.cs.uregina.ca/~mouhoubm/=postscript/=c3620/c36206.pdf
https://personal.utdallas.edu/~ravip/cs3345/slidesweb/node5.html

-->