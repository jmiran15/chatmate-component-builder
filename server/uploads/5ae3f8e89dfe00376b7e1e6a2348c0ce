# Linearithmic Sorts

<div id="outcomes"><details><summary></summary>

* Summary of Linearithmic Sorts.

</details></div>

We add another sorting strategy, the **Quicksort**, to our repertoire of linearithmic sorts.

| Name | Description | Average Case|   
| :----: | :---------- | :-------: |
| Heapsort | Build a max-heap from the sequence (bottom-up heapify). Remove the max and swap it to the end of the collection where the "leaf" was removed. Repeat the last step $n-1$ times. |  $\Omicron(n \lg n)$ |
| Merge Sort | Divide the sequence into subsequences of singletons. Successively merge the subsequences pairwise until a single sequence is reformed. |  $\Omicron(n\lg n)$ |
| Quicksort | Pick an element from the sequence (the pivot), partition the remaining elements into those greater than and less than this pivot. Repeat this for each partition (recursively). |  $\Omicron(n\lg n)$ |  

As noted [here](https://xlinux.nist.gov/dads/HTML/quicksort.html), "quicksort has running time $\Omicron(n^2)$ in the worst case, but it is typically $\Omicron(n \lg n)$. Indeed, in practical situations, a finely tuned implementation of quicksort beats most sorting algorithms, including those whose theoretical complexity is $\Omicron(n \lg n)$ in the worst case.