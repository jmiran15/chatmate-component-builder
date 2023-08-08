# Generic Array

<div id="outcomes"><details><summary></summary>

* Create an array of generic types in Java with a fixed size.

</details></div>

The constructor of `ArrayIndexedList` must instantiate and initialize `data`, the generic array. In a perfect world, this would be identical to using any other (primitive or reference) type:

```java
public ArrayIndexedList(int size, T defaultValue) {
  data = new T[size];
  for (int i = 0; i < size; i++) {
    data[i] = defaultValue;
  }
}
```

But the statement `new T[size]` <u>will not work!</u> It results in a compiler error. You must instead do this:

```java
data = (T[]) new Object[size];
```

So, you must create an array of `Object` and then cast it to a generic array. This latter strategy is a _workaround_ to create generic arrays. However, it results in a compilation warning (Unchecked cast: `java.lang.Object[]` to `T[]`), which you may ignore.

The reasons why Java cannot create a generic array (as in `new T[size]`) is irrelevant to the study of data structures. (It has to do with how Java's compiler works). 

**Aside:** Here is another syntax for creating generic arrays:

```java
data = (T[]) Array.newInstance(Object.class, size);
```

There is no preference in using either syntax. The `Array.newInstance` under the hood does the same thing as the syntax presented earlier.  

<details class="resource">
<summary>Resources</summary>

So, why do we instantiate a generic array as `(T[]) new Object[size]`? It has to do with how **erasure** and **reification** are implemented in Java's compiler. These are, as mentioned before, irrelevant to the study of data structures. I know, for many of you, your curiosity is not satisfied until you understand these. Here are some resources if you are interested to learn more:

* [Baeldung article on "Java Generics"](https://www.baeldung.com/java-generics)
* [TutorialsPoint definition of "Type Erasure"](https://www.tutorialspoint.com/java_generics/java_generics_type_erasure.htm)
* [GeeksForGeeks article on "Type Erasure in Java"](https://www.geeksforgeeks.org/type-erasure-java/)
* [David Merrick's short post on "Reification vs Erasure in Java Collections"](https://www.david-merrick.com/2015/07/19/reification-vs-erasure-in-java-collections/)

This is the book that helped me to understand it:

> Naftalin, Maurice, and Philip Wadler. [Java generics and collections](https://www.oreilly.com/library/view/java-generics-and/0596527756/). Sebastopol, Calif: O'Reilly, 2006. Print.

Reading the first four chapters is enough to understand how type _erasure_ and _reification_ work in Java.

</details>
