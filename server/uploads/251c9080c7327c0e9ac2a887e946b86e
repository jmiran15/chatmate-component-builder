# Java's `hashCode()`

<div id="outcomes"><details><summary></summary>

- Define what a hash table is.
- Describe the job of Java's `hashCode` method.

</details></div>

In this course, we are primarily interested in implementing hash tables but we take for granted that we already have a good hash function!

<div class="note">

A **Hash Table** is a data structure that organizes data using hash functions to support quick insertion/removal and search. 

</div>

The responsibility of a hash function is typically divided between the element and the data structure:

* The first step, which converts the key to an integer (hash code), is done by the element (key) itself.

* The second step, which reduces (compresses) the hash code to the range of array indices, is part of a general hash table implementation.

In Java, [every "type" inherits `hashCode()` method from the `Object` class](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--). The `hashCode` method returns a hash code value (an integer) for an object. 

* When using built-in types, you can simply call their `hashCode` method to get the hash code value. 

* When making your custom types, you must implement `hashCode` (override it). 

As noted earlier, in this class (i.e., when doing your homework) we take for granted that we can always ask for the hash code of an object by invoking the `hashCode` method on it.

Once we have the hash code for a given key, mapping that value to array indices can be as simple as follows:

```java
// Compress hashcode to index range [0, M-1]
index = key.hashCode() % M; 
```

<details class="resource">
<summary>Resources</summary>

* [What is hash code in Java](https://www.educative.io/edpresso/what-is-a-hash-code-in-java) by Educative.
* [Guide to hashCode() in Java](https://www.baeldung.com/java-hashcode) by Baeldung.
* [Java equals() and hashCode() Contracts](https://www.baeldung.com/java-equals-hashcode-contracts) by Baeldung.

</details>

