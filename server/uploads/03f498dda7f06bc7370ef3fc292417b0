# Quadratic Probing

<div id="outcomes"><details><summary></summary>

* Describe other probing strategies (quadratic, double hashing, ... for open address hash table.

</details></div>

In quadratic probing, unlike in linear probing where the strides are constant size, the strides are increments form a quadratic series ($1^2, 2^2, 3^2, \dots$). Thus, the next value of index is calculated as:

```java
int index = getIndex(key);
// if table[index] is occupied, then
for(int i = 0; i < M; i++) { 
  index = (getIndex(key) + i * i) % M; 
  // stop the loop when table[index] is available!
} 
```

This probing creates larger and larger gaps in the search sequence and avoids primary clustering.

<div class="center">
<img src="/img/22/hash13.png" width="50%">
</div>

A potential issue with quadratic probing is that not all positions are examined, so it is possible that an item can't be inserted even when the table is not full. 

<details class="resource">
<summary>Secondary clustering effect</summary>

If a key is mapped to the same index as another key, the second key's prob sequence will follow the first one's footsteps. If this happens repeatedly (for example, due to a poorly implemented hash function), long chains will still form and cause performance to degrade. The phenomenon is called secondary clustering.

</details>