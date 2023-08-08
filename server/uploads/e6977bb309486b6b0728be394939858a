# The Challenge

<div id="outcomes"><details><summary></summary>

* Explain what **collision** (in the context of hashing) is and when it happens.

</details></div>


The Set/Map ADT can be (efficiently) implemented using a **Hash Table**.


* `has`/`get(key)`: compute `getIndex(key)`, check the corresponding array element for an entry with a matching key.

* `insert`/`put(key, value)`: compute `getIndex(key)`, add or update the corresponding array element with the entry for the matching key.

* `remove(key)`: compute `getIndex(key)`, find the entry with a matching key in the corresponding array collection.

The performance of a hash table depends on how _good_ the hashing procedure is and how efficiently and effectively the **collisions** are handled.

> A *collision* occurs when two different keys $x$ and $y$ map to the same position (array index) in the hash table, i.e., `getIndex(x) == getIndex(y)`.