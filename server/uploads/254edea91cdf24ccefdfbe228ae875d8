# Is-a Relationship

<div id="outcomes"><details><summary></summary>

- Recognize inheritance should be used to implement is-a relationship. 
- Distinguish between is-a and has-a relationships. 
- Arrange classes in a simple class diagram based on is-a/has-a relationships.

</details></div>

We have explored code reuse via inheritance. It is important to stress here the semantics of inheritance. Aside from reusing the implementation of the `Student` class, we've created a well-defined "is-a" relationship between the base type `Student` and the subtype `GradStudent`.

<div class="note">

Inheritance should be used to model "is-a" relationships. Code reuse is an added advantage. 

</div>

It's all too easy to misuse inheritance merely for code reuse. Inheritance is intended for creating type hierarchies. Before employing it, you must put it to "is-a" test. For example, replace `GradStudent` and `Student` with your subtype and base type in the following sentence. If the sentence makes sense, then inheritance is the way to go.

> `GradStudent` is a `Student` with added attributes and/or behaviors.

## Has-a relationship 

The is-a relationship (Inheritance) can be contrasted with the has-a relationship (Composition) between types (classes).

<div class="note">

**Composition**

Composition is observed when one type is made up of other types. It can be used to achieve code reuse and polymorphism. 

</div>

For example, the roster is made up of students: `Roster` has-a `Student`. (The has-a relationship does not imply a multiplicity of one; a `Roster` has zero or more `Student`).

<div class="center">
<img src="/img/02/is_a_01.png" width="65%">
</div>

<span class="tag">Exercise</span> We are building a software solution for an automobile repair company. So far, we have the following classes: `Car`, `AutomaticCar`, `Transmission`, `AutomaticTransmission`. Can you arrange these classes into the following _class diagram_?

<div class="center">
<img src="/img/02/is_a_02.png" width="75%">
</div>

<details class="solution" data-release="Jan 26, 2021 17:00:00">
<summary>Solution</summary>

<div class="center">
<img src="/img/02/is_a_03.png" width="75%">
</div>

</details>

