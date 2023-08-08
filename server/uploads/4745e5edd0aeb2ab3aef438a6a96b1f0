# Inheritance Nuances

<div id="outcomes"><details><summary></summary>

* Distinguish accessibility from the inheritance of private properties.

</details></div>

Consider the following code snippet
   
```java
Student john = new Student("John Doe", "john@email.com");
GradStudent jane = new GradStudent("Jane Doe", "jane@email.com");
System.out.println(jane.getName() + " and " + john.getName());
```

<span class="tag">Exercise</span> What is printed out?

(a) Jane Doe and John Doe \
(b) Jane Doe and Jane Doe \
(c) null and John Doe \
(d) and John Doe 

<details class="solution" data-release="Sep 2, 2022 17:00:00">
<summary>Solution</summary>

The correct answer is (a). Note that: 
* The _private_ fields/methods are inherited, so `jane` indeed has a `name` field with the value "Jane Doe."
* `john` and `jane` are two separate objects - the use of the `super` keyword to invoke the constructor of `Student` in `GradStudent`'s constructor does not link the objects of these two classes to one another. 

</details>

Consider adding the following method to the `GradStudent` class, which raises the compilation error "name has private access in Student."
   
```java
public String toString() {
    return name + " " + email;
}
```

<span class="tag">Exercise</span> How can we resolve the compilation error? (There may be more than one correct answer!)

(a) you need to use `super.name` and `super.email` instead \
(b) you need to use `super(name)` and `super(email)` instead \
(c) private fields/methods are not inherited so you cannot access them \
(d) you need to use `getName()` and `getEmail()` instead  \
(e) you must change the visibility of `name` and `email` from `private` to `protected` or `public` in `Student` class

<details class="solution" data-release="Sep 2, 2022 17:00:00">
<summary>Solution</summary>

The correct answers are (d) and (e), with a preference for doing (d) over (e).

<div class="note">

**Are private fields/methods inherited?** Yes! A sub-class inherits everything from its super-class. However, the inherited fields (or methods) that are declared private in a super-class are not <u>directly</u> accessible in sub-classes.

</div> 

Declare a property with a visibility modifier of `protected` if you want to access it directly in derived classes. The `protected` modifier indicates that the property is visible to sub-classes but hidden from clients. Please use the `protected` modifier sparingly and only when it is needed. For fields, particularly, you don't need direct access in most cases. Therefore, you are better off using getters/setters to access them. 

</details>

<details class="resource">
<summary>Resources</summary>

* Baeldung has a great article on [Java Access Modifiers](https://www.baeldung.com/java-access-modifiers).
* Oracles Java Tutorials on [Controlling Access to Members of a Class](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)
* This [discussion on StackOverflow](https://stackoverflow.com/questions/2073159/is-it-better-use-getter-methods-or-to-access-private-fields-directly-when-overri) is interesting. 

</details>
