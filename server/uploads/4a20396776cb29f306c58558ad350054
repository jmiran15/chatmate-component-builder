# Stable Sorting

<div id="outcomes"><details><summary></summary>

* Explain what stable sorting means and determine which sorting algorithms (that we learned so far) are stable.

</details></div>

A stable sorting algorithm is one where it maintains the order of elements with duplicate values. This property may be necessary if the sort order is based on a subset of attributes (in an object).

<span class="tag">Exercise</span> Fill out the following table to determine which sorting algorithms are stable. Indicate in the third column what special conditions (or data structures) must be employed to ensure the given algorithm is stable. 

|     Sort      | Stable? | Condition |
| :-----------: | :-----: | :-------: |
|  **Bubble**   |         |           |
| **Selection** |         |           |
| **Insertion** |         |           |
|   **Heap**    |         |           |
|   **Merge**   |         |           |
|   **Quick**   |         |           |

<details class="solution" data-release="Apr 26, 2023 17:00:00">
<summary>Solution</summary>

|     Sort      | Stable? |                          Condition                           |
| :-----------: | :-----: | :----------------------------------------------------------: |
|  **Bubble**   |   Yes   |                   Don't swap equal values                    |
| **Selection** |   No    |                                                              |
| **Insertion** |   Yes   |                   Don't swap equal values                    |
|   **Heap**    |   No    |                                                              |
|   **Merge**   |   Yes   |  See below |
|   **Quick**   |   No    |                                                              |

- Bubble sort works by continuously comparing adjacent items so that the most significant items bubble over to the end of the array. The algorithm can be implemented in such a manner that if items are equal, no swapping occurs. 

- Selection sort works by repeatedly finding the minimum element in the unsorted part of a list & swapping it with the first item in the sorted part of the array. Due to the nature of this method, duplicate items would not maintain the same order. 

<!--
Selection sort is not: 
- sort [4, 2, 3, 4, 1]
- after the first round, we take 1 and swap with 4: [1, 2, 3, 4, 4]
- now the relative order of the 4's has changed
-->

- Insertion sort works by continuously and sequentially comparing elements and arranging them in a particular order. This algorithm is stable because all identical elements are inserted in the sorted array after one another in the same order discovered. 

- The final sequence of the results from heapsort comes from removing items from the created heap in purely rank order (based on the key field). Therefore any information about the ordering of the items in the original sequence was lost during the heap creation stage, which came first. 

- Merge sort breaks down an array into multiple subarrays of halved size and builds back up to the original collection via comparison. The sort is stable as long as the same pattern for equivalent items is maintained (e.g., always taking left-half values). 

- Quicksort is not stable since it exchanges nonadjacent elements. 

</details>



