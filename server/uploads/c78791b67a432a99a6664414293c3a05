# Inheritance syntax in Java

<div id="outcomes"><details><summary></summary>

- Detect inheritance in Java class declaration.
- Make use of the super keyword.

</details></div>

Here is the `GradStudent` class again:

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

Make a note of the following:

* To inherit from a class, use the `extends` keyword as in `GradStudent extends Student { ... }`.
  
* The sub-class must not redefine the fields/methods of the super-class (unless for _overriding_, which will be discussed later).
  
* The constructors of a super-class, unlike fields and methods, are not inherited by a sub-class. You must define _non-default_ constructors of a sub-class. The constructors of the sub-class can invoke the constructors of the super-class using the `super` keyword. 
  
    ```java
    public GradStudent(String name, String email) {
      super(name, email);
    }
    ```
    
    The keyword `super` is similar to the `this` keyword, but it points to the parent class. Therefore, it can be used to access fields and methods of the parent class.

    <div class="note"> 
    
    Call to `super()` must be the first statement in the sub-class constructor.
    
    </div> 

    We could update (or overload) the constructor of `GradStudent` to take an initial value for advisor:

    ```java
    public GradStudent(String name, String email, String advisor) {
      super(name, email);
      this.advisor = advisor;
    }
    ```

<details class="resource">
<summary>Resources</summary>

* Oracle's Java Tutorial [Providing Constructors for Your Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html) - read on default vs. non-default constructors.
* Oracle's Java Tutorial [Using the Keyword super](https://docs.oracle.com/javase/tutorial/java/IandI/super.html).
* Oracle's Java Tutorial [Hiding Fields](https://docs.oracle.com/javase/tutorial/java/IandI/hidevariables.html).

</details>
