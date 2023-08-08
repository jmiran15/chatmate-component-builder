# Casting of Types

<div id="outcomes"><details><summary></summary>

- Choose available object behaviors based on declared type.
- Express how type casting works for objects.
- Differentiate between Upcasting and Downcasting. 

</details></div>

<div class="note">

The advantage of building type hierarchies lies in the power of type substitution. 

</div>

Does that mean we should strive to declare objects using more generalized base types? In other words, is one of the following statements preferred to the other?

```java
Student jane = new GradStudent("Jane Doe", "jane@email.com");
GradStudent matt = new GradStudent("Matt Doe", "matt@email.com");
```

The answer is: it depends (as it usually does) on the problem you are trying to solve. 

Before I elaborate more on the answer, let's notice the declaration of `jane` is similar to the case where we have an array of students and add objects of type `GradeStudent` to it:

```java
Student[] students = new Student[10];
students[0] = new GradStudent("Jane Doe", "jane@email.com");
```

This example is a contrived one. However, using the base type `Student` as in the example above to declare an array could be advantageous, as you have seen in designing the `Roster` class. On the other hand, there could be disadvantageous to declare objects to their base type. For example, if we need to access the advisors of graduate students, we would have difficulty with `jane`:

```java
matt.getAdvisor(); // works fine
jane.getAdvisor(); // Compiler error: Cannot resolve method 'getAdvisor' in 'Student'
```

Since `jane` (the object) is _declared_ as a `Student` (and not a `GradStudent`), its behavior (i.e., what it does, what operations/methods can be invoked on it) is limited to those declared in the `Student` class. 

It is noteworthy to point out `jane` has `advisor` (since she is a `GradStudent`); you can get that information "out of `jane`" by *casting* types:

```java
// Assumption: s is instantiated as GradStudent
private static String greetAdvisor(Student s) {
  // Cast object of Student to GradStudent
  GradStudent gs = (GradStudent) s;
  // Call getAdvisor() on the casted object
  return "Hi, " + gs.getAdvisor();
}
```

<details>
<summary><b>Aside:</b> Which class the <code>greetAdvisor</code> method is being defined in?</summary>

It doesn't matter! The `greetAdvisor` is not defined in `Student` nor `GradStudent`; it is defined in other classes. The point is that `greetAdvisor` uses `Student` (and `GradStudent`).

</details>


You can send `jane` or `matt` to the `greetAdvisor` method. However, suppose the argument provided to `greetAdvisor` was not instantiated as `GradStudent`. In that case, the method  will break during its runtime (it will throw `ClassCastException` to indicate that the code has attempted to cast an object to a sub-class of which it is not an instance of.) To guard against this scenario, you can rewrite `greetAdvisor` as follows:

```java
private static String greetAdvisor(Student s) {
  // Use instanceof operator to check 
  // if the object belongs to a specific type
  if (s instanceof GradStudent) {
    GradStudent gs = (GradStudent) s;
    return "Hi, " + gs.getAdvisor();
  } else {
    return "This student has no advisor!";
  }
}
```

<div class="note">

Casting from `Student` to `GradStudent` is known as **Downcasting**, the typecasting of a parent object to a child object.

</div>

When an object of type `GradStudent` is passed as an argument to `greetAdvisor`, the compiler implicitly casts it to `Student`. The typecasting of a child object to a parent object is known as **Upcasting**.

<details class="resource">
<summary>Resources</summary>

* [Java `instanceof` Operator.](https://www.baeldung.com/java-instanceof)
* [Difference between `instanceof` and `getClass()`.](https://www.javapedia.net/Object,-Class-and-Package/2333)

</details>
