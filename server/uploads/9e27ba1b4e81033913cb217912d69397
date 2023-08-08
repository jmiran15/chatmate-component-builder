# Code duplication is undesirable!

<div id="outcomes"><details><summary></summary>

* Recognize inheritance can provide code reuse.

</details></div>

Here is the `Student` class from the previous chapter:

<details>
<summary>Student class</summary>

```java
public class Student {
  private String name;
  private String email;

  public Student(String name, String email) {
    this.name = name;
    this.email = email;
  }

  public String getName() {
    return name;
  }

  public String getEmail() {
    return email;
  }
}
```

</details>

Let's define a new class `GradStudent`:

```java
public class GradStudent {
  private String name;
  private String email;
  private String advisor;

  public GradStudent(String name, String email) {
    this.name = name;
    this.email = email;
  }

  public void setAdvisor(String advisor) {
    this.advisor = advisor;
  }

  public String getName() {
    return name;
  }

  public String getEmail() {
    return email;
  }

  public String getAdvisor() {
      return advisor;
  }
}
```

<span class="tag">Exercise</span> what are the similarities and differences between the `GradStudent` and `Student` classes?

<details class="solution" data-release="Sep 2, 2022 17:00:00">
<summary>Solution</summary>

* Both have `name` and `email` attributes with corresponding getter methods.
* The `GradStudent` also has an `advisor` attribute with corresponding setter and getter methods.

</details>

Notice there is considerable overlap (code duplication) between `Student` and `GradStudent` classes (which is expected since a grad student is a [specific kind of] student). 
Duplicate code is generally considered undesirable.

How can we **reuse** code from `Student` class in `GradStudent`? One of the ways we can achieve code reuse is through the **inheritance** mechanism in object-oriented programming. We will explore inheritance in detail in this chapter. 

<details class="resource">
<summary>Resources</summary>

* Wikipedia entry on [duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
* Refactoring Guru article on [duplicate code](https://refactoring.guru/smells/duplicate-code)

</details>
