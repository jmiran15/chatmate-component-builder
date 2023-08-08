# Interface Nuances

<div id="outcomes"><details><summary></summary>

- Contrast the utility of abstract classes and interfaces.
- Identify the syntax of Java Abstract Classes and contrast it with the syntax of Java Interfaces.

</details></div>


Recall in Java we cannot have _multiple_ inheritance. In other words, a class (regular or abstract) cannot be a direct child of more than one (regular or abstract) class.

On the other hand, <span class="highlight">a class may implement more than one interface.</span> 

```java
public class SomeClass implements InterfaceA, InterfaceB {

}
```

The example above shows that the syntax involves a comma-separated list of interfaces that the respective class implements. This construct is the closest thing Java has to Multiple Inheritance. 

A class can extend another (regular or abstract) class and implement one or more interfaces:

```java
public class SomeClass extends OtherClass implements InterfaceA, InterfaceB {

}
```

When a class implements an interface, it must implement all its methods unless it is an abstract class. In this case, it can defer the implementation of those methods to its sub-classes. 

An interface itself can be a subtype of another interface in which case it is said that it _extends_ the other interface:

```java
public interface SomeInterface extends OtherInterface {

}
```