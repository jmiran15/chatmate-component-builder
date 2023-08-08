# Graph Interface: Insert Edges

<div id="outcomes"><details><summary></summary>

* Identify the operations of Graph ADT.

</details></div>

The Graph interface has an operation to insert edges:

```java
/**
 * Insert a new edge.
 *
 * @param from Vertex position where the edge starts.
 * @param to   Vertex position where the edge ends.
 * @param e    Element to insert.
 * @return Edge position created to hold element.
 */
Edge<E> insert(Vertex<V> from, Vertex<V> to, E e);
```

When we add an edge, we specify the two vertices "from" and "to" and the data we may want to store in the edge.

Notice the `insert` method is **overloaded**: we've seen the insert method that created a vertex for us. 

Like the method `vertices`, we have an `edges` method that returns an iterable over edges.

```java
/**
 * Edges of graph.
 *
 * @return Iterable over all edges of the graph 
 *         (in no specific order).
 */
Iterable<Edge<E>> edges();
```
