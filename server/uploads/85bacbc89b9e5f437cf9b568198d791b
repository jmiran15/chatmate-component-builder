# Linear Probing: Exercise II

<div id="outcomes"><details><summary></summary>

* Describe "Open Addressing with Linear Probing" as a collision resolution.

</details></div>

Consider the state of the hash table at the end of the previous exercise; we want to perform two more operations:

|                | [ 0 ] | [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ] | [ 5 ] | [ 6 ] | Output |
| -------------- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :----: |
| Current State  | 86    | 700   |       | 5005  | 1111  | 2332  | 8333  | |
| `remove(2332)` |       |       |       |       |       |       |       | |
| `find(8333)`   |       |       |       |       |       |       |       | |

<span class="tag">Exercise</span> Complete the table above as you carry out the operations. Do you see any (potential) issues with the `remove` operation?

<details class="solution" data-release="Apr 5, 2023 17:00:00">
<summary>Solution</summary>

|                | [ 0 ] | [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ] | [ 5 ] | [ 6 ] | Output |
| -------------- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :----: |
| Current State  | 86    | 700   |       | 5005  | 1111  | 2332  | 8333  | |
| `remove(2332)` | 86    | 700   |       | 5005  | 1111  |       | 8333  | |
| `find(8333)`   | 86    | 700   |       | 5005  | 1111  |       | 8333  | 3,4,5: NF |


$$
(2 + 3 + 3 + 2) \bmod 7 = 3
$$

Lookup $2332$ at index $3$. The position is occupied, but the occupant is not the target! Linear probing will take us to index $4$ and then index $5$ where the element will be found. We can now remove (delete) the element.

$$
(8 + 3 + 3 + 3) \bmod 7 = 3
$$

Lookup $8333$ at index $3$. The position is occupied, but the occupant is not the target! Linear probing will take us to index $4$ and then index $5$, which is empty. At this point, the algorithm will assume $8333$ is not in the Hash Table because if it were, it would have been inserted at index $5$. Therefore, it will return `NOT_FOUND`.

<div class="note">

Removing an item may lead to not being able to find previously inserted items that collided with it.

</div>

</details>


