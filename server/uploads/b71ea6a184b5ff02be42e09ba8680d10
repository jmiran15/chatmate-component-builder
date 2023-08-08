# Linear Probing

<div id="outcomes"><details><summary></summary>

* Describe "Open Addressing with Linear Probing" as a collision resolution.

</details></div>

Suppose the calculated index for an item's key points to a position occupied by another item. In that case, we increment the index by a constant step size (usually $1$). Then, we keep incrementing the index (modulo the table length to allow for table wraparound) until we find an empty position to insert the key.

```java
int index = getIndex(key);
// if table[index] is occupied, then
for(int i = 0; i < M; i++) { 
  index = (getIndex(key) + i) % M; 
  // stop the loop when table[index] is available!
}
// if we get here and haven't inserted the key, the table is full! 
```

<details class="demo">
<summary>Example</summary>
<div class="pdf" file="linear_prob.pdf"></div>
</details>
