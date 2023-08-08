# Unit Testing Exceptions

<div id="outcomes"><details><summary></summary>

- Write JUnit tests to check whether exceptions are thrown when expected.
- Differentiate when to throw exceptions and when to try/catch the exceptions.

</details></div>

Let's update `IndexedListTest` to include tests to check that the `IndexOutOfBoundsException` is thrown when expected. 

```java
@Test
@DisplayName("get() throws exception if index is below the valid range.")
void testGetWithIndexBelowRangeThrowsException() {
  try {
    numbers.get(-1);
    fail("IndexOutOfBoundsException was not thrown for index < 0");
  } catch (IndexOutOfBoundsException ex) {
    return;
  }
}

@Test
@DisplayName("get() throws exception if index is above the valid range.")
void testGetWithIndexAboveRangeThrowsException() {
  try {
    numbers.get(size + 1);
    fail("IndexOutOfBoundsException was not thrown for index > length");
  } catch (IndexOutOfBoundsException ex) {
    return;
  }
}
```

Notice the approach to test that an exception is thrown when it is expected to be thrown:

```java
try {
  // call a method with an invalid input
  obj.someMethodThatThrowsException(badInput);
  // we expect the execution stops 
  //   and goes to the catch block as a result of an exception
  // if we get passed this point, exception was not thrown
  //   we must deliberately signal the test has failed!
  fail("The expected exception was not thrown!");
} catch (ExpectedException ex) {
  // if we are here, the expected exception is thrown;
  //   there is nothing to do, we can "return" 
  //   to indicate the test has successfully passed
  return;
}
```

The `fail` method is part of JUnit's `Assertions` library

```java
import static org.junit.jupiter.api.Assertions.fail;
```

Run the tests and see them fail! 

<details class="resource">
<summary>Resources</summary>

If you need a refresher on Java's Exception, please visit [Exceptions on Oracle's [online] Java Tutorial](https://docs.oracle.com/javase/tutorial/essential/exceptions/index.html). Alternatively, you can read [this article on Java Exceptions](https://www.baeldung.com/java-exceptions).

JUnit 5 includes `assertThrows()` method that provides a more elegant approach to check an exception is thrown. We will not use this alternative approach because it involves the use of [Java's Lambda expression](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html):

```java
assertThrows(IndexOutOfBoundsException.class, () -> {
  numbers.get(-1);
});
```

[This post](https://howtodoinjava.com/junit5/expected-exception-example/) provides a more detailed example on using `assertThrows()`. 

</details>

