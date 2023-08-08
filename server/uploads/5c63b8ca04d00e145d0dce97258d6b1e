# Hash Function

<div id="outcomes"><details><summary></summary>

- Identify the steps of **hashing** (i.e., convert to hash code and compression).
- Enumerate the properties of a _good_ hash function.

</details></div>

Imagine the array where we store the keys has the capacity $M$. The job of the mystery function is to map "keys" to "indices" in the range $[0, M-1]$.

<div class="note">

The process of mapping the keys to array indices is called **hashing**.

</div>

The mystery function is a **hash function**.

<div class="center">
<img src="/img/22/hash01.png" width="80%">
</div>

A hash function performs the following two steps:

1. convert a key to an integer (**hash code**) in a range like $[0, N)$.

2. map the hash code into the smaller range $[0, M - 1]$ where $M \ll N$.

A **good** hash function is

* <u>Uniform</u>: maps keys to array indices as evenly as possible (ideally with equal likelihood of generating each index value).
  
* <u>Deterministic</u>: a given key is always mapped to the same index (so we can look it up after insertion).
  
* <u>Cheap</u>: a constant-time operation that is simple and fast to compute.

<details class="resource">
<summary>Aside: What is "hashing," again?!</summary>

A speaker may use the word "hashing" to only mean "generating hash code for any given key," or to the "design of hash functions," or to refer to "hash tables" (the entire process of building these data structures with collision resolution, etc.)! **Case in point:** when you speak with "others," do not assume they have the same definition of "hashing" as what is described above here.

</details>
  
<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [Hash Functions](https://en.wikipedia.org/wiki/Hash_function).

</details>
