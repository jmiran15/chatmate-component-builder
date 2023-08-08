# Abstract Classes

<div id="outcomes"><details><summary></summary>

- Recognize the use of abstract classes and abstract methods to provide code reuse as well as a common interface among subtypes.
- Identify the syntax of Java Abstract Classes.

</details></div>


An abstract class is just like a regular (non-abstract) class except that:

1. It contains the keyword `abstract` in its declaration, and 
2. It cannot be instantiated.

So, in the code snippet below, the last statement will cause a compiler error:

```java
Roster cs226 = new JhuRoster(100);   // fine
Roster ep202 = new MoocRoster(1000); // fine
Roster myRoster = new Roster(50);    // compiler error
```

In other words, while <span class="highlight">an abstract class can be used as the apparent type of an object, it cannot be used as its actual type</span>. 

An abstract class may contain fields, constructors, and fully implemented methods, just like a regular class. 

An abstract class usually contains abstract methods, but it does not have to! On the other hand, a regular class cannot include abstract methods. So if you have an abstract method, it must be inside of an abstract class. 

An abstract class can be used as a parent class or extend another (regular or abstract) class. 

<div class="note">

In programming languages that support object-oriented paradigm, there almost always is a construct similar to Java's abstract class (see [Abstract type on Wikipedia](https://en.wikipedia.org/wiki/Abstract_type)).

</div>

In C++, for instance, an abstract class is one that has one or more _pure virtual_ functions (the same idea as abstract methods in Java). 