# Two Types of Roster!

<div id="outcomes"><details><summary></summary>

* Criticize design decisions for a simple type hierarchy in Java made by employing the inheritance mechanism.

</details></div>


<details>
<summary> Recall the <code>Roster</code> class from previous chapters!</summary>

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

  public Student find(String email) {
    return null; //stub
  }
}
```

</details>

Consider the following scenarios:

1. For courses at JHU, we search more frequently than we add/remove students. Therefore, we define `JhuRoster` such that its `find` implements binary search. The `add` and `remove` methods shall keep the underlying (students) data sorted to facilitate the binary search process.
   
2. For MOOCs (Massive Online Open Courses) offered by "JHU Engineering for Professionals," we add/remove students much more frequently than we perform searching. Therefore, we define `MoocRoster` such that its `find` method implements linear search. Furthermore, the `add` and `remove` methods do not bother keeping the underlying (students) data sorted.

We asked students to implement `JhuRoster` and `MoocRoster`, and here are some of the design decisions they have made:

1. `MoocRoster` extends `JhuRoster` (or the other way around)
2. `JhuRoster` and `MoocRoster` are entirely different data types (or "data structures" if you like). 
3. There is a `Roster` class where both `MoocRoster` and `JhuRoster` extend.

We will critique each design in the following section. 