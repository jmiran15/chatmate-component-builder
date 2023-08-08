# Implementing Interfaces

<div id="outcomes"><details><summary></summary>

* Distinguish between interfaces and implementations.

</details></div>

Interfaces can be used in type hierarchy just like abstract classes. However, the syntax is slightly different: <span class="highlight">a class **implements** an interface whereas it **extends** another (regular or abstract) class.</span> 

For example, here `MoocRoster` *implements* the `Roster` interface:

```java
public class MoocRoster implements Roster {
  private Student[] students;
  private int numStudents;

  public MoocRoster(int size) {
    students = new Student[size];
    numStudents = 0;
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

* The use of keyword `implements` (instead of `extends`).
  
* `MoocRoster` declares its fields (since the `Roster` interface does not include fields) and initializes them in its constructor (no `super` keyword). 

