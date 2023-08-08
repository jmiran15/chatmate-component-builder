# Robust Methods: Programs with Exceptions 

<div id="outcomes"><details><summary></summary>

* Design robust methods with Exceptions.

</details></div>

Consider the specification of the `IndexedList.get` method:

```java
/**
 * Retrieve the value stored at the given index.
 *
 * @param index representing a position in this list.
 *              Pre: 0 <= index < length
 * @return value at the given index.
 */
T get(int index);
```

A client of `get` (any method that calls it) is <u>responsible</u> to ensure the _pre-condition_ is met. The `get` method can check the validity of its input too. (It is not always the case that a method will be able to check and ensure its pre-conditions are met.)

<div class="note">

A **robust** method is one that handles bad (invalid or absurd) inputs _reasonably_.

</div>

Java's exception handling mechanism supports the construction of robust methods. 

Let's update the specification/declaration of `IndexedList.get` to make it robust.

```java
/**
 * Retrieve the value stored at the given index.
 *
 * @param index representing a position in this list.
 * @return value at the given index.
 * @throws IndexOutOfBoundsException when index < 0 or index >= length.
 */
T get(int index) throws IndexOutOfBoundsException;
```

Notice we have removed the _pre-condition_. Instead, the method throws `IndexOutOfBoundsException` when `index` is out of range.

<details class="resource">
<summary>Resources</summary>

Here are some resources on robust coding:

* [Designing Robust Java Programs with Exceptions](https://www.cs.ubc.ca/labs/spl/papers/2000/fse00-exceptions.pdf)
* [Robust Programming](http://nob.cs.ucdavis.edu/bishop/secprog/robust.html)
* [Robust Definition](http://www.linfo.org/robust.html)

[Defensive programming](https://en.wikipedia.org/wiki/Defensive_programming) is a closely related concept. 

</details>


