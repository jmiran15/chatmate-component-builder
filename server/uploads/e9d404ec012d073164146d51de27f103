# Position ADT

<div id="outcomes"><details><summary></summary>

* Describe the role of Position abstraction.

</details></div>


Let's revisit the `Position` interface:

```java
/**
 * Generic position interface.
 *
 * @param <T> the element type.
 */
public interface Position<T> {

  /**
   * Read element from this position.
   *
   * @return element at this position.
   */
  T get();
}
```

Recall we have created this abstraction to _protect_ the `Node` class. 
All operations of the List ADT receive/return Position, but internally, a position is _cast_ into a node.