# Linked List: A Dynamic Data Structure

<div id="outcomes"><details><summary></summary>

* Define what a linked list is.

</details></div>

A linked list is a linear data structure where each element is a separate object made of at least two items: <u>the data</u> and <u>a <b>reference</b> to the next element</u>. Conventionally, each element of a Linked List is called a **node**.

```java
public class Node<E> {
  private E data;
  private Node<E> next;
  
  // we can have constructors, setters, getters, etc.
}
```
Here is a minimal implementation for a Linked List:

```java
public class LinkedList<T> {
  private Node<T> head;
  
  // we can have constructors, methods to add/remove nodes, etc.
}
```

<div class="center">
<img src="../../img/07/image-20200915223617708.png" width="95%">
</div>

* The entry point into a linked list is called the `head` of the list. 
* The `head` is not a separate node but a reference to the first node. 
* The last node has a reference to `null`.
* If the list is empty, then the `head` is a `null` reference.

<details class="resource">
<summary><b>Aside:</b> Java Reference vs. C/C++ Pointer</summary>

If you are here from Intermediate Programming, you may be wondering about C++ pointers. Java's reference variable plays a similar role to the C++ pointer. A Java variable of object type stores a reference to an object, which is just a pointer giving the address of that object in memory. When you use an object variable in a Java program, it automatically follows the pointer stored in that variable to find the actual object in memory. All this happens automatically, behind the scenes.

<!--
http://math.hws.edu/eck/cs124/javanotes3/java2cpp/s2.html
-->

</details>

<details class="resource">
<summary>Resource</summary>

* Wikipedia's [entry on Linked List](https://en.wikipedia.org/wiki/Linked_list) is great!
* [Java References vs C++ Pointers and References](https://programming.guide/java-references-vs-c-pointers-and-references.html).
* [Why pointer concept not use in java?](http://net-informations.com/java/cjava/pointers.htm)
* [Differences between pointers and references in C++](https://www.educative.io/edpresso/differences-between-pointers-and-references-in-cpp).

</details>