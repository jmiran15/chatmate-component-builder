# Graph Interface: Getting the Endpoints

<div id="outcomes"><details><summary></summary>

* Identify the operations of Graph ADT.

</details></div>

There are two utility methods in the Graph interface where given an Edge, you can ask the abstraction to return the start or end vertex of that edge. 

```java
/**
  * Start vertex of the edge.
  *
  * @param e Edge position to explore.
  * @return Vertex position edge starts at.
  * @throws PositionException If edge position is invalid.
  */
Vertex<V> from(Edge<E> e) throws PositionException;
```

```java
/**
  * End vertex of the edge.
  *
  * @param e Edge position to explore.
  * @return Vertex position edge leads to.
  * @throws PositionException If edge position is invalid.
  */
Vertex<V> to(Edge<E> e) throws PositionException;
```

When you insert an edge, and Graph ADT gives you an Edge object, that Edge abstraction is like a receipt that you can give back to the Graph and ask for more information about the edge. However, the client is not able, on their own, to get data such as the endpoints of an Edge because the Edge abstraction is just a Position. All it provides is a getter to get the data stored in it.
