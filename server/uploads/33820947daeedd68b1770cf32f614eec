# Java Interfaces

<div id="outcomes"><details><summary></summary>

- Identify the syntax of Java Abstract Classes and contrast it with the syntax of Java Interfaces.
- Contrast the utility of abstract classes and interfaces.

</details></div>


Java has a construct called **Interface** which is closely related to abstract classes. 

<div class="note">

In a nutshell, an interface is an abstract class that contains nothing but abstract methods.

</div>

You can think of an interface as another level of abstraction that is even more abstract than an abstract class!

Consider the following modified abstract `Roster` class where the fields and the constructors are removed. 

```java
public abstract class Roster {

  public abstract void add(Student s);

  public abstract void remove(Student s);

  public abstract Student find(String email);
}
```

The above can be rewritten as follows, which is arguably a more compact and cleaner representation of the Roster ADT.

```java
public interface Roster {

  void add(Student s);

  void remove(Student s);

  Student find(String email);
}
```

Notice the syntax of Java interface:

* We declare it with the keyword `interface` (instead of `class` or `abstract class`)
  
* It does not contain fields or constructors.

* Since all methods are _public_ and _abstract_, there is no need to include those keywords in their declaration.

<div class="note">

**Aside:**  In recent versions of Java, an interface can technically contain constants, _default_ methods, _static_ methods, and nested types. 
<span class="highlight">In this course, however, we use Java's interface as an abstract class that has nothing but abstract methods.</span>

</div>

Java interfaces, like abstract classes, can be used to declare objects but not to instantiate them. 

<details class="resource">
<summary>Resources</summary>

An article on Medium claims to be the [Easiest explanation of Abstract class and Interface](https://medium.com/@alifabdullah/easiest-explanation-of-abstract-class-and-interface-280741bc2daf)!

</details>
