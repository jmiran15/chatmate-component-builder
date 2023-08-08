# Unit Tests

<div id="outcomes"><details><summary></summary>

* Write simple unit tests using the JUnit framework.

</details></div>

Let's add a unit test for the `length` method. 

```java
@Test
void length() {
  IndexedList<Integer> numbers = new ArrayIndexedList<>(5, 10);
  assertEquals(5, numbers.length());
}
```

In the test above, I've created an IndexedList with a size of 5 and a default value of 10. Then, I _asserted_ the `length()` method returns the value 5, the size which was provided earlier.

Notes: 

* `IndexedList` cannot be instantiated (because it is an interface) so we must use a concrete implementation of it (e.g. `ArrayIndexedList`). Therefore, the test is actually testing an implementation of `length`.
   
* `assertEquals` is one of the many utility methods provided by JUnit. It ensures its two arguments are equal. If not, it will signal to "fail" the test. To use `assertEquals` you must _import_ it:
  ```java
  import static org.junit.jupiter.api.Assertions.assertEquals;
  ``` 

