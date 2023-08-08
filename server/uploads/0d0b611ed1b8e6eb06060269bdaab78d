# Position Exception

<div id="outcomes"><details><summary></summary>

* Describe the role of PositionException.

</details></div>

Data structures that work with `Position` throw `PositionException` for a variety of reasons:

* when a given position is `null`;
* when a given position refers to a different, unrelated instance, e.g., passing a position from List A into List B;
* when a given position refers to a different data structure, e.g., passing a Graph position to a List.

```java
/**
 * Exception for position-based data structures.
 *
 * Data structures that use Position interface throw PositionException
 * if the position provided to them is null or otherwise invalid.
 */
public class PositionException extends RuntimeException {
  /**
   * Constructs a new PositionException.
   */
  public PositionException() {

  }

  /**
   * Constructs a new PositionException with the specified detail message.
   *
   * @param message the detail message. The detail message is saved for
   *                later retrieval by the getMessage() method.
   */
  public PositionException(String message) {
    super(message);
  }
}
```