# Binary Search

<div id="outcomes"><details><summary></summary>

* Understand binary search well enough to implement it

</details></div>


If we sort the `students` array (or keep it sorted as we `add`/`remove` students), we can apply a more _efficient_ searching algorithm called Binary Search. 

<div class="note">

Binary search makes clever use of the knowledge that the data is sorted to consider a (much smaller) subset of elements in finding the target. 

</div>

Here is how it works:

* Compare the target value to the middle element of the array. 
* If they are equal, you found the target!
* If the target is **larger** than the middle element, you know the target is not in the first half of the array (because the array is sorted), so you can ignore the first half and repeat the search process for the second half. 
* If the target is **smaller** than the middle element, ignore the second half and repeat the search process for the first half.

By following the process described above, you are (approximately) halving the search space at every step. Eventually, you either find the target or run out of elements (in which case you would report "target not found!")

<div class="note"> 

Binary search is also called "half-interval search" or "binary chop," both are more descriptive names for what it does.

</div>

<details class="demo">
<summary>Demo</summary>

The following demo shows a schematic representation of the Binary Search process.  

<div class="pdf" file="../pdf/binary_search_demo.pdf"></div>

Notice, in the demo, the target is found after three steps (comparisons); Linear search would have needed six comparisons to find the target (assuming we start on the left side of the array with the smallest element). 

</details>

<details class="resource">
<summary>Resources</summary>

* [Watch David Malan](https://www.youtube.com/watch?v=YzT8zDPihmc) doing the classic phonebook binary search demo!
* Khan Academy has [a lesson on Binary Search](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search) which is very helpful.

</details>