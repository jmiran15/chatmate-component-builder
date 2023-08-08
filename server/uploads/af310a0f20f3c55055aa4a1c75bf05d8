# Graph Interface: Labeling

<div id="outcomes"><details><summary></summary>

* Identify the operations of Graph ADT.

</details></div>

There are several operations in the Graph interface about labeling.

Here are four overloaded `label` methods:

```java
/**
 * Label vertex with an object.
 *
 * @param v Vertex position to label.
 * @param l Label object.
 * @throws PositionException If vertex position is invalid.
 */
void label(Vertex<V> v, Object l) throws PositionException;
```

```java
/**
 * Label edge with an object.
 *
 * @param e Edge position to label.
 * @param l Label object.
 * @throws PositionException If edge position is invalid.
 */
void label(Edge<E> e, Object l) throws PositionException;
```

```java
/**
 * Vertex label.
 *
 * @param v Vertex position to query.
 * @return Label object (or null if none).
 * @throws PositionException If vertex position is invalid.
 */
Object label(Vertex<V> v) throws PositionException;
```

```java
/**
 * Edge label.
 *
 * @param e Edge position to query.
 * @return Label object (or null if none).
 * @throws PositionException If edge position is invalid.
 */
Object label(Edge<E> e) throws PositionException;
```

And here is a method that clears all the labels:

```java
/**
 * Clear all labels.
 * All labels are null after this.
 */
void clearLabels();
```

Notice the label type is `Object`. This means there is no requirement for all labels to have the same data type. Moreover, there is no exception thrown when the label value is `null`.