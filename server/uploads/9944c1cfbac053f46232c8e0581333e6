# Unit Tests: Easier said than done!

<div id="outcomes"><details><summary></summary>

* Express best practices of unit testing.

</details></div>

Here is our unit test:

```java
@Test
void length() {
  IndexedList<Integer> numbers = new ArrayIndexedList<>(5, 10);
  assertEquals(5, numbers.length());
}
```

This test is also (partially) testing the constructor of `ArrayIndexedList` (that it does its job of constructing a list with the given size). In fact, since the job of `length` is to simply return the size, it may be more appropriate to consider this test a unit test for the constructor of the `ArrayIndexedList`!

Note that in unit testing, the goal is to isolate each method (unit) and test it without involving any other method. Of course, this is easier said than done. There is no way, for example, to test any of the methods `put`, `get`, and `length`, before constructing an object of the type `IndexedList`. Nonetheless, we shall strive to write unit tests with minimal dependencies on units other than the one being tested. 

<div class="note">

Keep tests focused and targeted so that when they fail, you know exactly what went wrong!

</div>