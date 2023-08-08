# The Merge Process

<div id="outcomes"><details><summary></summary>

* Explain and trace the merge sort algorithm on a particular data sequence.

</details></div>

Consider the following two sorted list of numbers, $A = \\{1, 3, 5 \\}$  and $B = \\{0, 2, 4, 8, 9 \\}$. 
We are interested in combining (merging) these two lists, such that the resulting merged list <u>remains sorted</u>. 

Here is the naive approach:

| Step  | Details  | Runtime |
| :---: | :------- | :-----: |
| I     | Make a list, $C$, large enough to hold all elements of $A$ & $B$ | $\Omicron(1)^{*}$ |
| II    | Copy elements of $A$ to $C$  | $\Omicron(n)$ |
| III   | Copy elements of $B$ to $C$  | $\Omicron(m)$ |
| VI    | Sort $C$  | $\Omicron(\text{sort})^{**}$ |

<small>

$^{*}$ $\Omicron(m+n)$ depending on the language/data structure cost to construct the auxiliary space.\
$^{**}$ The $\Omicron(\text{sort})$ will be _linearithmic_ at best (for comparison-based sorting).

</small>

<span class="highlight">This solution does not make any use of the knowledge the two inputs were sorted, to begin with.</span> So naturally, the question is: can we do better? And the answer is yes; with a bit of creativity, we can copy the numbers in $A$ and $B$ to $C$, one at a time, and keep them in sorted order. 

<details class="demo">
<summary>Linear-time merge</summary>
<div class="pdf" file="merge.pdf"></div>
</details>
