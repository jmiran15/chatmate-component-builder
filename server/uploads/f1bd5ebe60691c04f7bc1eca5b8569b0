# Code Contracts Using Documentation Comments

<div id="outcomes"><details><summary></summary>

- Declare an ADT using a Java interface, with complete JavaDoc comments.
- Understand the importance and use of pre- and post-conditions for methods documentation.

</details></div>

Here is the `IndexedList` **documented** using Java Documentation Comments (or simply _Javadoc_): 

```java
/**
 * IndexedList ADT.
 */
public interface IndexedList {

  /**
   * Change the value at the given index.
   *
   * @param index representing a position in this list.
   *              Pre: 0 <= index < length
   * @param value to be written at the given index.
   *              Post: this.get(index) == value
   */
  void put(int index, int value);

  /**
   * Retrieve the value stored at the given index.
   *
   * @param index representing a position in this list.
   *              Pre: 0 <= index < length
   * @return value at the given index.
   */
  int get(int index);

  /**
   * Get the declared capacity of this list.
   *
   * @return the length
   *         Inv: length() >= 0
   */
  int length();
}
```

<span class="highlight">Documentation comments are considered part of the specification of an ADT, as well as a general good programming practice.</span>You are expected to follow this practice in this course.

<div class="note">

Documentation comments provide **code contract**: a way to specify the behavior of your ADT as well as _preconditions_, _post-conditions_, _invariants_, etc.

</div>

* **Preconditions** are requirements that must be met when entering a method. For example, the `get` method specifies `Pre: 0 <= index < length()`, which means the value for the `index` parameter must be non-negative and smaller than the length of the list. If a client violates this condition, they cannot expect the `get` method to behave as specified. 

* **Postconditions** describe expectations at the time the method exits. For example, the `put` method specifies `Post: this.get(index) == value` which means once the method is successfully executed, you can call `get(index)` and expect it to return the `value`.

* **Invariants** describe the expected state for all objects of a class. For example, the `length` method specifies `Inv: length() >= 0` which means the length is always a non-negative value.

<details class="resource">
<summary>Resources</summary>

Here are two articles to help you get up to speed with Java Documentation Comments:

* [TutorialsPoint Guide to Java Documentation](https://www.tutorialspoint.com/java/java_documentation.htm).
* [Introduction to Javadoc by baeldung](https://www.baeldung.com/javadoc).

You can add a Javadoc using automatic comments in IntelliJ. See [this guideline](https://www.jetbrains.com/help/idea/working-with-code-documentation.html#add-new-comment) for more details. 

</details>
