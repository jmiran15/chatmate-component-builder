# Set-theoretical Operations

<div id="outcomes"><details><summary></summary>

* Describe set-theoretical operations union, intersection, and set difference.

</details></div>

In Mathematics, two sets can be "added" together. Thus, for example, the **union** of $A$ and $B$, denoted by $A \cup B$, is the set of all elements of either $A$ or $B$.

We can include this operation in the Set ADT:

```java
/**
 * Constructing a new set with elements that are in this set or
 * in the other set.
 *
 * @param other set.
 * @return all elements that are in this set or the other set.
 */
Set<T> union(Set<T> other);
```

The **intersection** of $A$ and $B$, denoted by $A \cap B$, is the set of elements that are members of both $A$ and $B$. 


```java
/**
 * Constructing a new set with elements that are in this set and
 * in the other set.
 *
 * @param other set.
 * @return the elements this set and other set have in common.
 */
Set<T> intersect(Set<T> other);
```

The **set difference** of $A$ and $B$, denoted by $A - B$, is the set of all elements that are in $A$ but not in $B$. 

```java
/**
 * Constructing a new set with elements that are in this set but not
 * in the other set.
 *
 * @param other set.
 * @return the elements in this set but not in the other set.
 */
Set<T> subtract(Set<T> other);
``` 

These operations can be defined for OrderedSet ADT as well:

```java
OrderedSet<T> union(OrderedSet<T> other); 
OrderedSet<T> intersect(OrderedSet<T> other);  
OrderedSet<T> subtract(OrderedSet<T> other);  
```

We leave it to you as a *challenge* exercise to implement these operations _efficiently_.

<!-- 
Unordered set
* union: O(MN) – make a copy of this set O(N), then insert M elements into the copy MxO(N)
* intersection: O(MN)
* subtract: O(MN)

Ordered set
* modified merge algorithm to implement union, intersection and difference methods
* O(M+N) for each operation (linearly search the two lists)
* need an iterator for the set to go over each element
* The idea is close to Disjoint-set/Union-find data structures.
-->