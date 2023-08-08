# OrderedMap ADT: The Interface

<div id="outcomes"><details><summary></summary>

* Explain and trace the core operations of OrderedMap ADT.

</details></div>

A binary search tree implementation of Map uses the "keys" to organize the entries in a tree structure. Therefore, the "keys" must be **comparable**. Like Set and OrderedSet, we define the OrderedMap ADT along with the Map ADT.


```java
/**
 * OrderedMpp ADT.
 *
 * @param <K> Type for keys.
 * @param <V> Type for values.
 */
public interface OrderedMap<K extends Comparable<K>, V>
    extends Map<K, V> {
}
```

In an OrderedMap, its iterator is expected to go over the keys *in order* (according to the keys' natural ordering). This expectation is specified in `OrderedMapTest` (see the starter code).