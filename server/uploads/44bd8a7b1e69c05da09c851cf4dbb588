# Linear Probing: Exercise I

<div id="outcomes"><details><summary></summary>

* Describe "Open Addressing with Linear Probing" as a collision resolution.

</details></div>

Suppose we have a hash table with capacity $M=7$, and we aim to insert integer keys. Further, assume the `hashCode()` is defined as the sum of the digits of `key`. 

<span class="tag">Exercise</span> Complete the table after each of the following operations, assuming collision resolution using **linear probing** (with step size of $1$). For the `find()` operation, _output_ the *indices* of the positions visited during the search to find the element.

|                | [ 0 ] | [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ] | [ 5 ] | [ 6 ] | Output |
| -------------- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :----: |
| `insert(1111)` |       |       |       |       |       |       |       |        |
| `insert(5005)` |       |       |       |       |       |       |       |        |
| `insert(86)`   |       |       |       |       |       |       |       |        |
| `find(5557)`   |       |       |       |       |       |       |       |        |
| `insert(2332)` |       |       |       |       |       |       |       |        |
| `insert(8333)` |       |       |       |       |       |       |       |        |
| `find(2332)`   |       |       |       |       |       |       |       |        |
| `insert(700)`  |       |       |       |       |       |       |       |        |


<details class="solution" data-release="Apr 5, 2023 17:00:00">
<summary>Solution</summary>

|                | [ 0 ] | [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ] | [ 5 ] | [ 6 ] | Output |
| -------------- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :----: |
| `insert(1111)` |       |       |       |       | 1111  |       |       |        |
| `insert(5005)` |       |       |       | 5005  | 1111  |       |       |        |
| `insert(86)`   | 86    |       |       | 5005  | 1111  |       |       |        |
| `find(5557)`   | 86    |       |       | 5005  | 1111  |       |       | 1: NOT_FOUND |
| `insert(2332)` | 86    |       |       | 5005  | 1111  | 2332  |       |        |
| `insert(8333)` | 86    |       |       | 5005  | 1111  | 2332  | 8333  |        |
| `find(2332)`   | 86    |       |       | 5005  | 1111  | 2332  | 8333  | 3,4,5: FOUND |
| `insert(700)`  | 86    | 700   |       | 5005  | 1111  | 2332  | 8333  |        |

$$
(1 + 1 + 1 + 1) \bmod 7 = 4
$$

Therefore, insert $1111$ at index $4$.

$$
(5 + 0 + 0 + 5) \bmod 7 = 3
$$

Therefore, insert $5005$ at index $3$.

$$
(8 + 6) \bmod 7 = 0
$$

Therefore, insert $86$ at index $0$.

$$
(5 + 5 + 5 + 7) \bmod 7 = 1
$$

Lookup for $5557$ at index $1$. There is no element there! Therefore, return `NOT_FOUND`.

$$
(2 + 3 + 3 + 2) \bmod 7 = 3
$$

Try to insert $2332$ at index $3$. The position is occupied. Linear probing will take us to index $4$ and then index $5$ where the element can be inserted. Therefore, insert $2332$ at index $5$.

$$
(8 + 3 + 3 + 3) \bmod 7 = 3
$$

Try to insert $8333$ at index $3$. The position is occupied, but the occupant is not the target! Linear probing will take us to index $4$ and then index $5$ and finally index $6$ where the element can be inserted. Therefore, insert $8333$ at index $6$.

$$
(2 + 3 + 3 + 2) \bmod 7 = 3
$$

Lookup $2332$ at index $3$. The position is occupied, but the occupant is not the target! Linear probing will take us to index $4$ and then index $5$ where the element can be found. 

$$
(7 + 0 + 0) \bmod 7 = 0
$$

Try to insert $700$ at index $0$. The position is occupied. Linear probing will take us to index $1$ where the element can be inserted. Therefore, insert $700$ at index $1$.

</details>