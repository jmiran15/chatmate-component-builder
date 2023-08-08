# Test an Iterable ADTs

<div id="outcomes"><details><summary></summary>

* Test an Iterable ADTs.

</details></div>

Let's add a simple test to the `IndexedListTest` to test the (inherited) `IndexedList.iterator` method:

```java
@Test
@DisplayName("test iterator after IndexedList is instantiated.")
void testEnhancedLoopAfterConstruction() {
  int counter = 0;
  for(int element: numbers) {
    assertEquals(defaultValue, element);
    counter++;
  }
  assertEquals(size, counter);
}
```