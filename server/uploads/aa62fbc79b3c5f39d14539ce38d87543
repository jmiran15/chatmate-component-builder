# Lift the Limit with Java Generics!

<div id="outcomes"><details><summary></summary>

- Translate the IndexedList ADT into a generic interface.
- Identify the syntax of Java Generics.

</details></div>


Here is a plausible solution to make `IndexedList` ADT work for _all_ types: change the data type of _value_ from `int` to `Object` as in
   
```java
void put(int index, Object value);
Object get(int index);
```

The potential issues with this approach are twofold: 

1. when you retrieve a value from `get`, you must explicitly downcast it to its _actual_ type (unless you only need to use the methods defined in `Object`). (Note: Java automatically upcasts the argument to the `Object` type when using `put`.)
   
2. You can potentially store values of different types in an instance of `IndexedList`. However, this feature is generally undesirable. For example, suppose you have an `IndexedList` called `apples`. In this list, you want to store items of type `Apple` and its subtypes like `McIntoshRed` and `GoldenDelicious`. Indeed, you do not want to store items of type `Orange` in `apples`. 

Java, in 2004 within version J2SE 5.0, introduced **Generics** to address the shortcomings of the aforementioned strategy. According to [Java's Documentation](https://docs.oracle.com/javase/1.5.0/docs/guide/language/index.html):

<div class="note">

Generics extend Java's type system to allow "a type or method to operate on objects of various types while providing compile-time type safety."

</div>

Generic programming is not specific to Java. Many other programming languages support a similar construct. In C++, for example, generics are supported and called "templates."

