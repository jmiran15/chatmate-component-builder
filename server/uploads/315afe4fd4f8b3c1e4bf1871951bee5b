# Custom Exceptions

<div id="outcomes"><details><summary></summary>

* Extend Java's built-in exceptions to create custom exceptions.

</details></div>

Java comes with many built-in exceptions (see a list of most used exceptions and their description [here](https://www.baeldung.com/java-common-exceptions)) such as the `IndexOutOfBoundsException`. These exceptions cover most situations that are bound to happen in programs where there is a need to throw an exception. However, there will be times we need to supplement these built-in exceptions with our own. 

<div class="note">

Creating custom exceptions can be as simple as extending an existing built-in exception. 

</div>

To learn the process, we make our own version of `IndexOutOfBoundsException`. We call ours `IndexException`.

* Create a Java class `IndexException` with the following content:
  ```java
  public class IndexException extends RuntimeException {

  }
  ```
* Update `IndexedList`, `IndexedListTest` and `ArrayIndexedList`: replace any usage of `IndexOutOfBoundsException` with `IndexException`.

All built-in exceptions have a default constructor and an overloaded constructor that takes a `String` (`message`) as a parameter. It is considered good practice to provide a similar overloaded constructor for your custom exceptions.

```java
/**
 * Exception for invalid index. Data structures using (integer) indices
 * throw IndexException if a given index is out of range.
 */
public class IndexException extends RuntimeException {

  /**
   * Constructs a new IndexException.
   */
  public IndexException() {
  }

  /**
   * Constructs a new IndexException with the specified detail message.
   *
   * @param message the detail message. The detail message is saved for
   *                later retrieval by the getMessage() method.
   */
  public IndexException(String message) {
    super(message);
  }
}
```

<details class="resource">
<summary>Resource</summary>

[Create a Custom Exception in Java](https://www.baeldung.com/java-new-custom-exception) by Baeldung is a good read.

</details>

