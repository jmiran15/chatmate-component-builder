# The Big Picture

<div id="outcomes"><details><summary></summary>

* Describe the general idea behind the hash table.

</details></div>

<div class="note">

The fundamental idea behind Hash Table is to map each key (entry) to a position (an array index) <u>based on the key itself</u>.

</div>

Imagine I have this mystery function that can map keys to array indices:

<div class="center">
<img src="/img/22/hash01.png" width="80%">
</div>

So when I give it "cat," it would give me $1$, and when I give it "dam," it would give me $9$, $\dots$:

<div class="center">
<img src="/img/22/hash06.png" width="100%">
</div>

Using this mystery function, I know _exactly_ where to insert each element (and therefore where _exactly_ to look for it). <span class="highlight">The cost of insertion and search will essentially be the cost of running the mystery function.</span>

Note that we <u>access an entry based on its key (associative retrieval)</u>, not its location (so no need to, e.g., search for the key in a tree).

<details class="resource">
<summary>Resources</summary>

- Wikipedia's entry on [Hash Table](https://en.wikipedia.org/wiki/Hash_table).
- Robert Nystrom's book "Crafting Interpreter" has a chapter on [Hash Tables](https://www.craftinginterpreters.com/hash-tables.html).

</details>
