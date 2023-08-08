# Extending an Abstract Class

<div id="outcomes"><details><summary></summary>

- Identify the syntax of Java Abstract Classes and contrast it with the syntax of Java Interfaces
- Distinguish between interfaces and implementations

</details></div>


Here is the abstract `Roster` class for your reference:

<details>
<summary>Roster</summary>

```java
public abstract class Roster {
  protected Student[] students;
  protected int numStudents;

  public Roster(int size) {
    students = new Student[size];
    numStudents = 0;
  }

  public abstract void add(Student s);

  public abstract void remove(Student s);

  public abstract Student find(String email);
}
```

</details>

Here is how `MoocRoster` extends `Roster`:

```java
public class MoocRoster extends Roster {

  public MoocRoster(int size) {
    super(size);
  }

  @Override
  public void add(Student s) {
    // Implementation omitted to save space
  }

  @Override
  public void remove(Student s) {
    // Implementation omitted to save space
  }

  @Override
  public Student find(String email) {
    // Implementation omitted to save space
  }
}
```

Notice:

* There is no `abstract` keyword in the declaration of `MoocRoster`. 
  
* There is no `abstract` keyword in the method declarations within the `MoocRoster` class; instead, there is `@Override` annotation.
  
* `MoocRoster` has access to `students` and `numStudents` in `Roster` since those fields were defined as `protected`.
  
* `MoocRoster`'s constructor invokes the constructor of `Roster` (using `super(size)`), which constructs the `students` array and initializes the `numStudents` attribute. 