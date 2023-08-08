# Graph Interface: Insert Vertices

<div id="outcomes"><details><summary></summary>

* Identify the operations of Graph ADT.

</details></div>

The Graph interface declares an operation that takes the data you want to store in a node. Then, it inserts it into the Graph by creating a Vertex. Finally, the operation returns the newly created Vertex to you. 

```java
/**
 * Insert a new vertex.
 *
 * @param v Element to insert.
 * @return Vertex position created to hold element.
 * @throws InsertionException If v is null or already in this Graph
 */
Vertex<V> insert(V v) throws InsertionException;
```

There is also an operation that returns an iterable over the vertices in the Graph.

```java
/**
  * Vertices of the graph.
  *
  * @return Iterable over all graph vertices (in no specific order).
  */
Iterable<Vertex<V>> vertices();
```

Here is an example for printing the values stored in the vertices of a graph:

```java
for (Vertex<V> v: graph.vertices()) {
    System.out.println(v.get());
}
```