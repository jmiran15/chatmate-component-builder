# Graph Interface: Insertion Exception

<div id="outcomes"><details><summary></summary>

* Identify the operations of Graph ADT.

</details></div>

Our Graph interface is a representation for directed <u>simple</u> graph. Notice the exceptions thrown by the insert method:

```java
/**
 * Insert a new edge.
 *
 * @param from Vertex position where the edge starts.
 * @param to   Vertex position where the edge ends.
 * @param e    Element to insert.
 * @return Edge position created to hold element.
 * @throws PositionException  If either vertex position is invalid.
 * @throws InsertionException If insertion would create a self-loop or
 *                            duplicate edge.
 */
Edge<E> insert(Vertex<V> from, Vertex<V> to, E e)
    throws PositionException, InsertionException;
```

We don't allow loops or multiple edges. On the other hand, there is no exception for when the data `e` is `null`.