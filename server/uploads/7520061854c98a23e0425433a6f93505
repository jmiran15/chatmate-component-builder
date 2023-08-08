# Introduction to Doubly Linked List

<div id="outcomes"><details><summary></summary>

- Define what a Doubly Linked List is.
- Enumerate the advantages & disadvantages of a double linked list vs. a singly linked list.

</details></div>

The linked list data structure we have studied in earlier chapters is described in the literature as the **singly** linked list (SLL). It is called "singly" because the nodes are chained together in a *single* direction. Each node contains a pointer to the *next* node.

<div class="center">
<img src="/img/14/2020-10-04-20-01-22.png" width="70%">
<div class="caption">

Image is taken from Educative entry on "[What is a doubly linked list](https://www.educative.io/edpresso/what-is-a-doubly-linked-list)."

</div>
</div>

You can traverse a singly linked list in one direction (from "head" to "tail"). In contrast, there is the **doubly** linked list (DLL) data structure where you can traverse the list in opposite directions. In a DLL, each node contains a pointer to the next node and the previous node.

<div class="center">
<img src="/img/14/2020-10-04-20-20-18.png" width="100%">
<div class="caption">

Image is taken from Educative entry on "[What is a doubly linked list](https://www.educative.io/edpresso/what-is-a-doubly-linked-list)."

</div>
</div>

Here is a minimal scaffolding of a DLL data structure. 

```java
public class DoublyLinkedList<T> {
  private Node<T> head; 
  // we could have a tail pointer, too!

  private static class Node<E> {
    E data;
    Node<E> next;
    Node<E> prev;
  }

  // Methods are not shown to save space.
}
```

The advantage of DLL over SLL, in addition to bi-directional traversal, is that we can insert/remove **before** a *given node*. The disadvantages are that (1) we need more memory (to store the extra pointers) and (2) we must maintain and update the extra pointer as we perform various operations.  

<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [Doubly Linked List](https://en.wikipedia.org/wiki/Doubly_linked_list).

</details>
