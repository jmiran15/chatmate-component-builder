# Composite Data Types

<div id="outcomes"><details><summary></summary>

* Identify selected object-oriented concepts in action

</details></div>


A composite data type is a type that is made up of other types. For example, here is a `Roster` class that holds an array of `Student` objects:

```java
public class Roster {
  private Student[] students;
  private int numStudents;

  public Roster(int size) {
    students = new Student[size];
    numStudents = 0;
  }

  public void add(Student s) {
    // stub
  }

  public void remove(Student s) {
    // stub
  }

  // Assumption: students' emails are unique.
  public Student find(String email) {
    return null; // stub
  }
}
```

<details class="resource">
<summary>What is a method stub?</summary>

A [stub](https://en.wikipedia.org/wiki/Method_stub) is a method that doesn't actually do anything other than declaring itself and the parameters it accepts (and returning something _valid_, so the compiler is happy). Stubs are commonly used as placeholders for implementation.

</details>


`Roster` is a class, so it too is an _abstraction_ and a _data type_. However, it is different from the `Student` class; the latter is to model a student in our problem domain, the former represents a **collection** of students. Sometimes this distinction is interesting, so to highlight it, we call a class like `Roster` a **container** class or an **aggregate** class.

<div class="note">

Object-Oriented programming paradigm is a powerful tool for modeling because it allows you to create **composite** data types (as well as a hierarchy of data types but more on these later).

</div>