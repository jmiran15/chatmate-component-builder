# From Definition to Abstraction

<div id="outcomes"><details><summary></summary>

* Connect the mathematical definition of Graph to its ADT.

</details></div>

A graph $G = (V, E)$ consists of a nonempty set $V$ of vertices (or nodes) and a collection $E$ of edges (or arcs).

<div class="center">
<img src="/img/26/graph02.png" width="95%">
</div>

<br>

Open the starter code and look at the `Graph.java`, which defines the Graph interface:

```java
/**
 * Graph ADT.
 *
 * @param <V> Vertex element type.
 * @param <E> Edge element type.
 */
public interface Graph<V, E> {
  // Operations not shown
}
```

The Graph interface declaration looks a lot like the Mathematical definition of Graph, but be careful, as `V` and `E` here are not _collection_ of vertices/edges. Instead, they are _generics_, placeholders for the datatype of what will be stored in a vertex or an edge. 