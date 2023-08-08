# More Abstractions: Vertex and Edge

<div id="outcomes"><details><summary></summary>

* Describe the relationship between the Position abstraction and Vertex and Edge.

</details></div>

We define abstractions for `Vertex` and `Edge`.

```java
/**
 * Edge position for graph.
 * @param <E> Element type.
 */
public interface Edge<E> extends Position<E> {
}
```

```java
/**
 * Vertex position for graph.
 * @param <V> Element type.
 */
public interface Vertex<V> extends Position<V> {
}
```

In these simple abstractions, a Vertex and an Edge are just Positions.

```java
/**
 * Generic position interface.
 * @param <T> the element type.
 */
public interface Position<T> {

  /**
   * Read element from this position.
   * @return element at this position.
   */
  T get();
}
```

The `Graph` interface uses `Vertex` and `Edge` abstractions similar to how the `List` interface used `Position`.

<br>

<div class="center">
<img src="/img/26/graph03.png" width="90%">
</div>
