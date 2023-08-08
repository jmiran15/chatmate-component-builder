# Graph Interface: Removals

<div id="outcomes"><details><summary></summary>

* Identify the operations of Graph ADT

</details></div>

There are two `remove` methods in the Graph interface: removing a vertex and removing an edge.

```java
/**
 * Remove a vertex.
 *
 * @param v Vertex position to remove.
 * @return Element that was stored in the removed vertex.
 * @throws PositionException If vertex position is invalid.
 * @throws RemovalException  If vertex still has incident edges.
 */
V remove(Vertex<V> v) throws PositionException, RemovalException;
```

```java
/**
 * Remove an edge.
 *
 * @param e Edge position to remove.
 * @return Element that was stored in the removed edge.
 * @throws PositionException If edge position is invalid.
 */
E remove(Edge<E> e) throws PositionException;
```

By convention, we return the data stored in a vertex or an edge when we remove it. 

<div class="note">

Note that you may **not** remove a vertex that still has incident edges. 

</div>

In other words, before removing a vertex, you must remove the incoming and outgoing edges incident to it. 

**Aside:** The `remove` method is overloaded. The Java compiler allows overloading based on subtypes. (The compiler does not consider return type when differentiating methods; return type is not part of the method signature.) A motivation behind using Vertex and Edge interfaces as positions (instead of only Position) is that we can overload method names to keep down interface complexity. We also get some degree of static type safety: clients who confuse vertex and edge positions will notice at compile-time.