# Use Descriptive Names!

<div id="outcomes"><details><summary></summary>

* Express best practices of unit testing.

</details></div>

Here is our unit test again:

```java
@Test
void length() {
  IndexedList<Integer> numbers = new ArrayIndexedList<>(5, 10);
  assertEquals(5, numbers.length());
}
```

I prefer to rename the test so that it better reflects what is being tested.

```java
@Test
void testLengthAfterConstruction() {
  IndexedList<Integer> numbers = new ArrayIndexedList<>(5, 10);
  assertEquals(5, numbers.length());
}
```

We can optionally use the `@DisplayName` annotation to provide a more elaborate description. 

```java
@Test
@DisplayName("length() returns the correct size after IndexedList is instantiated.")
void testLengthAfterConstruction() {
  IndexedList<Integer> numbers = new ArrayIndexedList<>(5, 10);
  assertEquals(5, numbers.length());
}
```

When you run the test, you must see the following in IntelliJ

<div class="center">
<img src="../../img/04/testresult.png" width="95%">
</div>

You are not required to use `@DisplayName` annotations. However, <u>your unit tests must be named descriptively</u>. Never, ever, name them generically as `test1`, `test2`, etc.
