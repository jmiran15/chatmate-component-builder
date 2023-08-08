# Heapsort

<div id="outcomes"><details><summary></summary>

* Define heapsort and explain how it relates to (and differs from) selection sort.

</details></div>


**Heapsort** is using a (binary) Heap-based PriorityQueue for sorting. It has $\Omicron(n \lg n)$ performance. This performance is *substantially* better than all the other (quadratic) sorting algorithms we have studied.  

<div class="note">

Heapsort is, in a way, similar to selection sort; it repeatedly finds the smallest/largest item and moves it to the front/back of the collection. 

The main difference is that instead of scanning through the entire collection to find the smallest/largest item, it uses a heap to find the "best" (max or min) element in sub-linear $\Omicron(\lg n)$ time.

</div>

In the earlier example, we started with an empty heap (PriorityQueue), then successively inserted each element. This process is an $\Omicron(n \lg n)$ operation. <u>It turns out building the heap can be done in linear time!</u> Although the asymptotic efficiency of heapsort remains $\Omicron(n \lg n)$.

This alternative method starts by arbitrarily putting the elements in a ranked array representation of a binary heap, thus respecting the shape property and repairing the heap (order) property in linear time.

**Aside-1:** This latter approach was invented by [Robert W Floyd](https://en.wikipedia.org/wiki/Robert_W._Floyd), computer scientist and recipient of [Turing Award](https://en.wikipedia.org/wiki/Turing_Award) in 1978.  

**Aside-2:** The original $\Omicron(n \lg n)$ approach is called Williams' method after [J. W. J. Williams](https://en.wikipedia.org/wiki/J._W._J._Williams) the inventor of binary heaps. Williams invented binary heap for heapsort (not for implementing PriorityQueue).

<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [Heapsort](https://en.wikipedia.org/wiki/Heapsort).

</details>
