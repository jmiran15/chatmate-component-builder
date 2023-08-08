# Lazy Deletion

<div id="outcomes"><details><summary></summary>

* Understand and apply the **tombstone mechanism** when removing an entry from a Hash Table with open addressing schemes.

</details></div>

We learned from the previous exercise that if we delete an item (i.e., set its table entry to `null`), then when might prematurely stop a search for another one. This could happen for a target item that had collided with the deleted one. We may incorrectly conclude that the target is not in the table (because we will have stopped our search prematurely.)

<details class="resource">
<summary>The issue with removal</summary>

Suppose we insert APPLE, BANANA, CAT, and ANT in the table below. Notice ANT must be inserted at index 0. However, it colides with APPLE. Linear probing will take ANT to index 3. 

Suppose further we delete CAT in the table below.

<div class="center">
<img src="/img/22/hash14.png" width="80%">
</div>

If we search for ANT now, we won't find it! We start the search at index 0 where APPLE is. However, we stop the search at index 2 as it is empty. 

</details>

The solution is **lazy deletion**: flag the item as deleted (instead of deleting it). This strategy is also known as placing a **tombstone** ⚰️ over the deleted item!

<div class="center">
<img src="/img/22/hash10.png" width="40%">
<div class="caption">

Source: [craftinginterpreters.com](https://www.craftinginterpreters.com/hash-tables.html)

</div>
</div>

<details class="resource">
<summary>Place a tombstone!</summary>

When an item is deleted, replace the deleted item with a tombstone (to mark it as "deleted").

<div class="center">
<img src="/img/22/hash15.png" width="80%">
</div>

By storing a tombstone (a sentinel value) where an item is deleted, we force the search algorithm to keep looking until either the target is found or a free cell is located.

</details>


<div class="note">

Future inserts can overwrite tombstones, but lookups treat them as collisions.

</div>

For the previous exercise, we insert a tombstone (`TS`) in place of the deleted entry:
 
|                | [ 0 ] | [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ] | [ 5 ] | [ 6 ] | Output |
| -------------- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :----: |
| Current State  | 86    | 700   |       | 5005  | 1111  | 2332  | 8333  | |
| `remove(2332)` | 86    | 700   |       | 5005  | 1111  |  TS   | 8333  | |
| `find(8333)`   | 86    | 700   |       | 5005  | 1111  |  TS   | 8333  | 3,4,5,6: F |

The `find(8333)` will go over the indices as follows:

```text
[3] --> [4] --> [5] (TOMBSTONE) --> [6] --> FOUND
```

Without inserting a tombstone in place of $2332$, `find(8333)` would not know to continue after finding an empty cell at index $5$.