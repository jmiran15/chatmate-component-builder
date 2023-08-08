# The `Object` class

<div id="outcomes"><details><summary></summary>

* Explain how every object in Java has a toString method.

</details></div>

Every class in Java is descended from [the `Object` class](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html). This is an implicit inheritance (i.e., it happens without appending `extends Object` to your class declarations). And since the `Object` class contains a `toString()` method, we can call `toString()` on any programmer-defined type and get its string representation.

```java
Student john = new Student("John Doe", "john@e.mail");

System.out.println(john.toString()); // toString() inherited from the Object class
//-> it will print something like Student@1ee0005

System.out.println(john); // automatically calls john.toString()
//-> Student@1ee0005
```

By default, the `toString` method returns a string consisting of the name of the class and the (unsigned) hexadecimal representation of an object's hash code. 

<div class="note">

**Aside:** here is the default implementation of `toString()`:

```java
getClass().getName() + '@' + Integer.toHexString(hashCode())
```

The `hashCode()` returns an integer representation of the object. That integer, by default, is derived from the memory address of the object.

</div>

The default behavior of `toString` is not that useful. You can _override_ it to return a different string representation of your object. It is common to make a string representation from the (value of) fields. For instance, for students, we can use their name followed by their email:

```java
Student john = new Student("John Doe", "john@email.com");
System.out.println(john); 
//-> John Doe (john@email.com)
```

Here is the code to produce the desired effect:

```java
public class Student {
   // fields and methods not shown for brevity

   @Override
   public String toString() {
      return name + " (" + email + ")";
   }
}
```

IntelliJ can automatically generate `toString` methods for you. Refer to [JetBrain's Help documentation](https://www.jetbrains.com/help/idea/generating-code.html#generate-tostring).

<div class="note">

The `Object` class has several other methods, namely `equals` and `hashCode`, which we will learn to override in future chapters.

</div>

<details class="resource">
<summary>Resources</summary>

* JavaPractices [Implementing toString](http://www.javapractices.com/topic/TopicAction.do?Id=55).

</details>