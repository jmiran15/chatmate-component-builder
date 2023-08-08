# Two Types of Exceptions

<div id="outcomes"><details><summary></summary>

* Distinguish checked vs. unchecked exceptions.

</details></div>

There are two kinds of exceptions in Java: checked exceptions and unchecked exceptions. In this lesson, I'll provide some examples to understand the distinction.

## Checked Exceptions

Consider this code:

```java
public void doSomething() {
	doThisFirst();
	// more code here!
}
```

If `doThisFirst` method *throws* a **checked exception**, the **compiler** will not let you simply call it! You must handle the exception by either of these techniques:

1. Using `try`/`catch` block

```java
public void doSomething()  {
  try { 
    doThisFirst();
  } catch (SomeCheckedException e) {
    // Deal with the exception.
  }
  // more code here!
}
```

2. Allow the `doSomething` method to throw the exception raised by `doThisFirst`  

```java
public void doSomething() throws SomeCheckedException {
  doThisFirst();
  // more code here!
}
```
<div class="note">

A method that throws a checked exception must include a `throws` clause in its declaration.

</div>

Java verifies checked exceptions at compile-time and forces you to provide a handling mechanism for it.

## Unchecked Exceptions

All Java exceptions are _checked_ unless they subtype the `Error` class or the `RuntimeException` class.

<div class="center">
<img src="../../img/05/javaExceptions.png" width="90%">
</div>


The compiler does not force you to handle unchecked exceptions. For instance, the compiler will let you simply call the `doThisFirst()` if it (may potentially) throws an unchecked exception:  

```java
public void doSomething() {
	doThisFirst();
	// more code here!
}
```

<div class="note">

A method that throws an unchecked exception does not need to include a `throws` clause in its declaration.

</div>


## Why two types of Exceptions?

The distinction between checked v.s. unchecked exception is specific to Java.  In `C++`, for instance, all exceptions are unchecked, so it is up to the programmer to handle them or not.

Read [Unchecked Exceptions — The Controversy](https://docs.oracle.com/javase/tutorial/essential/exceptions/runtime.html) on Oracle's website for more information. In a nutshell, Java believes it must force programmers to handle exceptions. But, on the other hand, it makes allowance to declare errors that could happen, but rarely do, as unchecked exceptions. So, the programmer is not frustrated to, e.g., have to write try/catch every time they use division in a program even though division by zero causes `ArithmeticException`.

<details class="resource">
<summary>Resources</summary>

[Checked and Unchecked Exceptions in Java](https://www.baeldung.com/java-checked-unchecked-exceptions) by Baeldung is a good read.

</details>