# Implement the Iterator Pattern 

<div id="outcomes"><details><summary></summary>

* Write a Java class that implements the `Iterator` interface.

</details></div>

## Part I

We are going to implement our _iterator_ for `ArrayIndexedList` (instead of using the `Arrays.stream(data).iterator`). 

* Add a new class `ArrayIndexedListIterator`:

  ```java
  public class ArrayIndexedListIterator<T> {

  } 
  ```

* `ArrayIndexedListIterator` must implement the `Iterator` interface:
  
  ```java
  public class ArrayIndexedListIterator<T> implements Iterator<T> {

  } 
  ```

* The following operations from the `Iterator` interface are inherited (and need to be implemented): 
  
  ```java
  public class ArrayIndexedListIterator<T> implements Iterator<T> {

    @Override
    public boolean hasNext() {
      return false;
    }

    @Override
    public T next() {
      return null;
    }
  } 
  ```

Let us understand these methods first! 

When we use the enhanced for loop, we are using [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar):

```java
Iterator<MyType> it = myCollection.iterator();
while (it.hasNext()) {
  MyType element = it.next();
  // do something with element
}

// the loop above is the same as the one below
for(MyType element : myCollection) {
  // do something with element
}
```

From the `while` loop, it is clear the `next` method returns the _next element_ in the collection. And, `hasNext` returns true if there is an element we have not iterated over.