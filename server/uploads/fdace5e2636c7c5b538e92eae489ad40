# Other Restricted Data Structures!

<div id="outcomes"><details><summary></summary>

* Define Steque, Quack, and Deque ADT.

</details></div>

We can mix and match the operations of Stack and Queue to build up new data structures! Here are a few that you may come by in various references. 

<details class="resource">
<summary>Steque ADT</summary>

A stack-ended queue or _steque_ is a data structure that supports `push`, `pop`, and `enqueue`. Here is an example interface:

```java
// A stack-ended queue.
public interface Steque<T> {
  // is empty?
  boolean empty();

  // adds a new element to top of Steque.
  void push(T value);

  // removes and returns top element.
  T pop() throws EmptyException;

  // adds a new element to bottom of Steque.
  void enqueue(T value);
}
```

So, <span class="highlight">you add from both ends but remove from one end.</span> To better understand this ADT, consider the following sequence of operations and the schematic representation of steque after each operation (top of the steque is to the left):

```java
steque.push(1);     // [1]
steque.push(2);     // [2, 1]
steque.enqueue(3);  // [2, 1, 3]
steque.enqueue(4);  // [2, 1, 3, 4]
steque.pop();       // [1, 3, 4]
```

</details>


<details class="resource">

  <summary>Quack ADT</summary>

A queue-ended stack or _quack_ is a data structure that supports `push`, `pop`, and `dequeue`. Here is an example interface:

```java
// A queue-ended stack.
public interface Quack<T> {
  // is empty?
  boolean empty();

  // adds a new element to the top of Quack.
  void push(T value);

  // removes and returns top element.
  T pop() throws EmptyException;

  // removes and returns bottom element.
  T dequeue() throws EmptyException;;
}
```

So, <span class="highlight">you add from one end but remove from both ends.</span> To better understand this ADT, consider the following sequence of operations and the schematic representation of quack after each operation (top of the quack is to the left):

```java
quack.push(1);   // [1]
quack.push(2);   // [2, 1]
quack.push(3);   // [3, 2, 1]
quack.push(4);   // [4, 3, 2, 1]
quack.pop();     // [3, 2, 1]
quack.dequeue(); // [3, 2]
```

</details>


<details class="resource">
<summary>Deque ADT</summary>

Double Ended Queue (Deque) is a limited access data structure that allows insertion/removal at either end in $\Omicron(1)$.

<div class="center">
<img src="../../img/13/2020-10-05-11-03-03.png" width="80%">
</div>

<div class="note">

* Deque is a stack if you always add/remove at one end.
* Deque is a queue if you always add to one end and remove from other.

</div>

Here is an example interface:

```java
// A double-ended queue.
public interface Deque<T> {
    boolean empty();
    T front() throws EmptyException;
    T back() throws EmptyException;
    void insertFront(T t);
    void insertBack(T t);
    void removeFront() throws EmptyException;
    void removeBack() throws EmptyException;
}
```

</details>

The data structures above are not as widely used as Stack and Queue (especially the first two). However, many programming languages include an implementation of Deque as it can operate as a Stack or a Queue. We leave it to you as an (unsolved) exercise to implement their operations.