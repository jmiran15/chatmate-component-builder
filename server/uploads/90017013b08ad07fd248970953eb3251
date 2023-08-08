# Static Nested Class

<div id="outcomes"><details><summary></summary>

* Appreciate that members of a static nested class (Node for Linked List) can be accessed by the outer class, but not the other way around.

</details></div>

It is a common practice to nest the `Node` class inside the `LinkedList` class:

```java
public class LinkedList<T> {
  private Node<T> head;
  
  private static class Node<E> {
    E data;
    Node<E> next;
  }
  
  // we can have constructors, methods to add/remove nodes, etc.
}
```

Note the nested class is declared as `static`. 

<div class="note">

A static nested class does not have access to the instance members of the outer class. 

</div>

On the other hand, the outer class has access to the instance members of the static nested class objects. The `Node` does not need access to the members of `LinkedList`, but `LinkedList` can access `data` and `next` on objects of `Node`, eliminating the need for getters/setters.

<details class="resource">
<summary>Inner vs Static Nested Class</summary>

| Inner Class | Static Nested Class |
| ----------- | ------------------- |
| It is an instance member of the outer class (not static!) and has access to all the members of the outer class (private, static, etc.) | It is a static member of the outer class and does not have access to the instance members of the outer class. Instead, the outer class has access to the nested class members. |

[Here](https://repl.it/@amadooei/NestedClasses#Outer.java) is a toy example that showcases the use of inner vs. static nested classes.

</details>

<details class="resource">
<summary>Resources</summary>

* Oracle's Java Tutorial, [Nested Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/nested.html)
* Baeldung's article [Nested Classes in Java](https://www.baeldung.com/java-nested-classes)
* Beginner's Book entry on [Java's Inner Class](https://beginnersbook.com/2013/05/inner-class/)

</details>