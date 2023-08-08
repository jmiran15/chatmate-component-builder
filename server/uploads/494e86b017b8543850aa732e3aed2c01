# Method Overriding

<div id="outcomes"><details><summary></summary>

- Express rules of method overriding in Java.
- Explain why using `@Override` annotation is a good programming practice. 
- Distinguish method overloading from method overriding. 
- Relate polymorphism to method overriding and overloading. 

</details></div>

When you override a method in a sub-class, 

* The overriding method must have the same _signature_ (name and parameters) as the overridden one in the super-class. 

* In addition, it must have the same return type as the overridden one. Although, it could return a subtype of what is returned by the overridden method in the super-class. 

* Finally, it must be at least as visible as the overridden method. It is possible (yet strongly discouraged) to take a `private` or `protected` method and override it to a `public` one in a sub-class. The reverse is not possible; you can't override a `public` method to a `protected` or `private` one.

## `@Override` annotation

When we override a method in a sub-class, we _annotate_ it with `@Override` annotation. 

<div class="note">

Annotations in Java are _meta data_: they provide data about a program, but they are not part of the program itself.  

</div>

Annotations have no direct effect on the operation of the code they annotate. That said, using `@Override` annotation is considered a good programming practice, and you must follow it (at least in this course) because of the following advantages:

* It improves the readability of the code; it indicates that a method declaration is intended to override a method in a super-class.

* If the annotation is used, the Java compiler will double-check the method signature and report an error if there is any mismatch. This feature prevents unintended mistakes such as misspelling the method name, wrong ordering of parameters' types, etc.

You can learn more about Java annotations at [Oracle's Java Tutorial: Annotations](https://docs.oracle.com/javase/tutorial/java/annotations/). However, we only use a few of these (primarily for unit testing) in this course.

<details class="resource">
<summary>Resources</summary>

* JavaPractices [Overridable methods need special care](http://www.javapractices.com/topic/TopicAction.do?Id=89).
* JavaPractices [Use @Override liberally](http://www.javapractices.com/topic/TopicAction.do?Id=223).

</details>