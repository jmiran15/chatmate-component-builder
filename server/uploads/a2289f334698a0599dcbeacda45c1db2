# Selective Inheritance?

<div id="outcomes"><details><summary></summary>

* Discuss why the further down in the hierarchy a class appears, the more specialized its behavior is.

</details></div>

<div class="note">

In Java, it is not possible to select a subset of fields/methods to be inherited. 

</div>

Moreover, it is not possible to change the visibility of inherited fields/methods from `public` to `private`.

There is the possibility to _override_ the unwanted operations and change their behavior to, e.g., display an error message or throw an exception to indicate that the operation is not supported. 

For example, following the previous exercise, we can define `Student` to extend `GradStudent` yet not support the operations related to the `advisor` attribute.

```java
public class Student extends GradStudent {
    public Student(String name, String email) {
        super(name, email);
    }

    @Override
    public void setAdvisor(String advisor) {
        throw new UnsupportedOperationException();
    }

    @Override
    public String getAdvisor() {
        throw new UnsupportedOperationException();
    }
}
```

<div class="note">

This strategy is not considered a good practice and must be avoided when possible.

</div>
