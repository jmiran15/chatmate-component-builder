# Array-based Implementation

<div id="outcomes"><details><summary></summary>

* Implement Map using an ArrayList internally.

</details></div>

Open `ArrayMap` in the starter code. This implementation uses Java's ArrayList internally. It is inefficient; all operations take $\Omicron(n)$ time. The `iterator()` method makes a copy of all keys, so it takes $\Omicron(n)$ extra time and space to initiate the iteration (although `next` and `hasNext` are $\Omicron(1)$). 

Notice the `ArrayMap` class uses the following structure:

```java
// Entry to store a key and a value pair.
private static class Entry<K, V> {
  K key;
  V value;

  Entry(K k, V v) {
    this.key = k;
    this.value = v;
  }
}
```

We could have used two arrays in parallel and manage insert/remove ourselves (instead of delegating it to ArrayList). 

```java
private K[] keys;
private V[] values;
```

You should probably think about this alternative implementation as it makes for a great exam question! 

Use `ArrayMapTest` to test any alternative implementation of `ArrayMap`. The `ArrayMapTest` extends `MapTest`. Take a moment and review the tests which we have provided in the starter code.

<div class="note">

Efficient implementations of Map are done either as a "*hash table*" or a "*search tree*." 

</div>

We will explore these implementations in the several following chapters. 