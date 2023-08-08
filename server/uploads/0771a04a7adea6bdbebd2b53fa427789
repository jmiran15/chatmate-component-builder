# Collisions

<div id="outcomes"><details><summary></summary>

* Explain what **collision** (in the context of hashing) is and when it happens.

</details></div>

A *collision* occurs when more than one key is mapped to the same array index.

 
<div class="center">
<img src="/img/22/hash08.png" width="85%">
</div>

Collisions are rare events if they are the results of a well-designed hash function. But, they are inevitable as the set of possible keys is usually vastly larger than the capacity of the hash table (range of array indices). 

<div class="center">
<img src="/img/22/hash07.png" width="70%">
</div>

<details class="demo">
<summary>Example</summary>
<div class="pdf" file="colision.pdf"></div>
</details>

<div class="note">

There are two main collision handling techniques:

* **Open addressing** – locate the next available (open) position.
* **Chaining** – store multiple entries in each position.

</div>

<details class="resource">
<summary>Resources</summary>

To understand why collisions are inevitable, consult these references:

* [Counting hash collisions with the birthday paradox](http://matt.might.net/articles/counting-hash-collisions/) by Matt Might.
* [The Pigeonhole Principle: how do pigeons and pigeonholes relate to cryptographic hashing functions and the number of hairs on people's heads?](https://steemit.com/technology/@jiansoo/the-pigeonhole-principle-how-do-pigeons-and-pigeonholes-relate-to-cryptographic-hashing-functions-and-the-number-of-hairs-on) by SteemIt!
* [Hashtables, Pigeonholes, and Birthdays](https://blog.codinghorror.com/hashtables-pigeonholes-and-birthdays/) by Coding Horror!

</details>


