# Enhanced For Loop

<div id="outcomes"><details><summary></summary>

* Recall enhanced for loop.

</details></div>


Here is a typical approach to stepping through all the elements of an array (in order):

```java
for (int i = 0; i < myArray.length; i++) {
  System.out.println(myArray[i]);
}
```

There is an alternative form, the so-called _enhanced_ for loop:

```java
// The colon in the syntax can be read as "in"
for (int element : myArray) {
  System.out.println(element);
}
```

The enhanced for loop was introduced in Java 5 as a simpler way to _iterate_ through all the elements of a _Collection_ (not just arrays but other data structures built into Java). It is important to note that not all data structures are "positional"; for example, there is no notion of position in a Set. So, the enhanced loop abstracts the idea of _traversing_ the data structure elements. 

In this chapter, we will provide the means to _iterate_ (use enhanced for loop) over instances of `IndexedList` ADT. At the moment, one can use the "standard" for loop:

```java
for (int i = 0; i < myIndexedList.length(); i++) {
  System.out.println(myIndexedList.get(i));
}
```

By the end of this chapter, we will be able to write:

```java
// Assume myIndexedList stores elements of type Integer
for (int element : myIndexedList) {
  System.out.println(element);
}
```