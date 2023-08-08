# Type Substitution 

<div id="outcomes"><details><summary></summary>

- Define type substitution. 
- Identify type substitution in code.

</details></div>

Assume `Student` and `GradStudent` were not linked through inheritance (i.e., they were two independent data types). To allow both grad and non-grad students to take the same course, we must update the `Roster` class as follows, essentially duplicating every field and method to accommodate _two types of_ students.

```java
public class Roster {
  private Student[] students;
  private int numStudents;
  private GradStudent[] gradStudents;
  private int numGradStudents;

  public Roster(int size) {
    students = new Student[size];
    gradStudents = new GradStudent[size];
    numStudents = 0;
    numGradStudents = 0;
  }

  public void add(Student s) { ... }
  public void remove(Student s) { ... }
  public Student find(String email) { ... }
  public void addGrad(GradStudent s) { ... }
  public void removeGrad(GradStudent s) { ... }
  public GradStudent findGrad(String email) { ... }
}
```

Suppose `GradStudent` is declared as a subtype of `Student`. In that case, the (original) `Roster` class (as defined in the previous chapter) needs no changes at all. You will be able to add/remove grad students by leveraging **type substitution**.

<div class="note">

**Type substitution**

A given type variable may be assigned a value of any subtype, and a method with a parameter of a given type may be invoked with an argument of any subtype of that type.

</div>

So, since we can _substitute_ `GradStudent` for `Student`, we can
* have one student array of type `Student` and store both objects of `Student` and `GradStudent` in it;
* have one pair of `add`/`remove` methods that take a parameter of type `Student` and invoke it by passing either an object of `Student` or `GradStudent`;
* have one `find` method that returns an object of type `Student`, and use it to search both grad and non-grad students.

<span class="tag">Exercise</span> Can we redefine `Roster` and use `GradStudent` in place of `Student` (in declaration of fields/parameters data types) to achieve the same effect?

<details class="solution" data-release="Jan 37, 2023 17:00:00">
<summary>Solution</summary>

Since inheritance is not symmetric, we would not be able to achieve the same effect if we were to define `Roster` and use `GradStudent` in place of `Student` (in the declaration of fields/parameters data types).

</details>


 