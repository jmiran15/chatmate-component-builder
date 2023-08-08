# Code reuse through Inheritance

<div id="outcomes"><details><summary></summary>

- Define inheritance.
- Detect inheritance in Java class declaration.

</details></div>

Here is the `GradStudent` class declared as a **sub-class** of `Student`:

```java
public class GradStudent extends Student {
  private String advisor;

  public GradStudent(String name, String email) {
    super(name, email);
  }

  public void setAdvisor(String advisor) {
      this.advisor = advisor;
  }

  public String getAdvisor() {
      return advisor;
  }
}
```

The declaration of `GradStudent` contains what was _specific_ to it; all the shared attributes and operations are now **inherited** from the `Student` class. 

<div class="note">

Inheritance is a mechanism that allows classes to be _derived_ from other classes, with the _child_ classes inheriting fields and methods from the _parent_ classes.

</div>

Another name for "child class" is sub-class or derived class. The "parent class" is also called the super-class or base class.

<div class="note">

In addition to the properties inherited from the super-class, the sub-class can define its fields and methods.

</div>

Note that in the example of the `GradStudent` and `Student` classes, the `Student` class is the parent class, while the `GradStudent` class is the child class since it inherits properties from the super-class and defines fields and methods of its own.

<div class="note">

Inheritance is a one-way relationship! Therefore, the parent class does not have access to the (additional) attributes/methods declared in a child class.

</div>


<details class="resource">
<summary>Resources</summary>

* BeginnersBook [Inheritance in Java Programming with examples](https://beginnersbook.com/2013/03/inheritance-in-java/).
* LearnJavaOnline [Inheritance](https://www.learnjavaonline.org/en/Inheritance).

</details>
