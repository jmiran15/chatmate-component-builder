# The syntax of Generics in Java

<div id="outcomes"><details><summary></summary>

- Translate the IndexedList ADT into a generic interface.
- Identify the syntax of Java Generics.

</details></div>


Generics are simple to start with; here is `IndexedList` ADT with generic base type

```java
public interface IndexedList<T> {

  void put(int index, T value);

  T get(int index);

  int length();
}
```

Note the three changes:

* The interface name is appended with `<T>` (notice the angle brackets).
* The data type of `value` is changed to `T`.
* The return type of `get` is changed to `T`.

The `T` is a placeholder for any type for which a user might want to use `IndexedList`. There is no significance in calling it `T`. You can rename it to anything you want (subject to rules of variable naming in Java). However, in most resources, either `T` or `E` is used to declare a generic type. 

When declaring `IndexedList`, <u>you must specify the intended base type</u>:

```java
IndexedList<Integer> numbers;
IndexedList<Apple> apples;
```

Notice the use of angle brackets `<>` in the above statements.

When you declare `numbers` as `IndexedList<Integer>`, you signal your intention to the compiler. All values stored in `numbers` must be of type `Integer`. In turn, the compiler will 

1. ensure that (providing _type safety_), so attempting to store, e.g., a string in `numbers` will result in a compile-time error.
2. not bother you to (down) cast a value retrieved from the ADT (e.g., through using the `get` method here). 

### A note on documenting generics

Generic variables must be documented similar to method parameters.

```java
/**
 * IndexedList ADT.
 * @param <T> the base type of the items in the IndexedList.
 */
public interface IndexedList<T> {

}
```

In a way, generics enable types (classes and interfaces) to have parameters.

<div class="note">

Generic parameters provide a way for you to re-use the same code with different types. 

</div> 

<details class="resource">
<summary>Resources</summary>

You may find the following resources useful:

* [TutorialsPoint Java Generic Classes](https://www.tutorialspoint.com/java_generics/java_generics_classes.htm)
* [TutorialsPoint Java Generic Type Parameters](https://www.tutorialspoint.com/java_generics/java_generics_type_parameters.htm)
* [Oracles Java Tutorial on Generics](https://docs.oracle.com/javase/tutorial/java/generics/index.html)

</details>
