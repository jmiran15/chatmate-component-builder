# Throw an Exception!

<div id="outcomes"><details><summary></summary>

* Write Java code utilizing Java Exceptions.

</details></div>

Let's update `ArrayIndexedList.get` to throw the `IndexOutOfBoundsException`:

```java
@Override
public T get(int index) throws IndexOutOfBoundsException {
  if (index >= 0 && index < length()) {
    return data[index];
  } else {
    throw new IndexOutOfBoundsException();
  }
}
```

Make a note of the syntax; in particular, be careful with `throw` v.s. `throws` keywords.

Run `IndexedListTest` and see that all tests pass.