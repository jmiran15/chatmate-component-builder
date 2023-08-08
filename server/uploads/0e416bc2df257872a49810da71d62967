# Quadratic Probing: Exercise III

<div id="outcomes"><details><summary></summary>

* Describe other probing strategies (quadratic, double hashing, ... for open address hash table.

</details></div>

Suppose we have a hash table with capacity $M=7$, and we aim to insert integer keys. Further, assume the `hashCode()` is defined as the sum of the digits of `key`. 

<span class="tag">Exercise</span> Complete the table after each of the following operations, assuming collision resolution using **quadratic probing**.

|                | [ 0 ] | [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ] | [ 5 ] | [ 6 ] | 
| -------------- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | 
| `insert(5005)` |       |       |       |       |       |       |       |       
| `insert(6374)` |       |       |       |       |       |       |       |      
| `insert(2637)` |       |       |       |       |       |       |       |       
| `insert(7897)` |       |       |       |       |       |       |       |       
| `insert(3453)` |       |       |       |       |       |       |       |       
| `insert(2703)` |       |       |       |       |       |       |       |       
| `insert(7151)` |       |       |       |       |       |       |       |       


<details class="solution" data-release="Apr 7, 2023 17:00:00">
<summary>Solution</summary>

|                | [ 0 ] | [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ] | [ 5 ] | [ 6 ] | 
| -------------- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | 
| `insert(5005)` |       |       |       |  5005 |       |       |       |       
| `insert(6374)` |       |       |       |  5005 |       |       | 6374  |      
| `insert(2637)` |       |       |       |  5005 | 2637  |       | 6374  |       
| `insert(7897)` | 7897  |       |       |  5005 | 2637  |       | 6374  |       
| `insert(3453)` | 7897  |  3453 |       |  5005 | 2637  |       | 6374  |       
| `insert(2703)` | 7897  |  3453 |       |  5005 | 2637  |  2703 | 6374  |       
| `insert(7151)` | 7897  |  3453 |  7151 |  5005 | 2637  |  2703 | 6374  |

Here are the calculations:

$$
5 + 0 + 0 + 5 = 10 \implies 10 \space \\% \space 7 = 3
$$

$$
6 + 3 + 7 + 4 = 20 \implies 20 \space \\% \space 7 = 6
$$

$$
2 + 6 + 3 + 7 = 18 \implies 18 \space \\% \space 7 = 4
$$

$$
7 + 8 + 9 + 7 = 31 \implies 31 \space \\% \space 7 = 3
$$

The position `[3]`  is already occupied; the quadratic probe would explore the sequence:
* $(3 + 1) \\% 7 = 4$ OCCUPIED
* $(3 + 4) \\% 7 = 0$ Bingo! 

$$
3 + 4 + 5 + 3 = 15 \implies 15 \space \\% \space 7 = 1
$$

$$
2 + 7 + 0 + 3 = 12 \implies 12 \space \\% \space 7 = 5
$$

$$
7 + 1 + 5 + 1 = 14 \implies 14 \space \\% \space 7 = 0
$$

The position `[0]`  is already occupied; the quadratic probe would explore the sequence:
* $(0 + 1) \\% 7 = 1$ OCCUPIED
* $(0 + 4) \\% 7 = 4$ OCCUPIED
* $(0 + 9) \\% 7 = 2$ Bingo!

</details>