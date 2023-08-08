# Graph Interface: Incident Edges

<div id="outcomes"><details><summary></summary>

* Identify the operations of Graph ADT

</details></div>

We have the following operations in the Graph interface, which return an iterable over the *outgoing* and *incoming* edges of a given vertex.

```java
/**
 * Outgoing edges of a vertex.
 *
 * @param v Vertex position to explore.
 * @return Iterable over outgoing edges of the given vertex
 *         (in no specific order).
 * @throws PositionException If vertex position is invalid.
 */
Iterable<Edge<E>> outgoing(Vertex<V> v) throws PositionException;
```

```java
/**
 * Incoming edges of a vertex.
 *
 * @param v Vertex position to explore.
 * @return Iterable over incoming edges of the given vertex
 *         (in no specific order).
 * @throws PositionException If vertex position is invalid.
 */
Iterable<Edge<E>> incoming(Vertex<V> v) throws PositionException;
```