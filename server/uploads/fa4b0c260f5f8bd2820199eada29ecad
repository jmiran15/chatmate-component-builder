# Prioritizing Submissions

<div id="outcomes"><details><summary></summary>

* Motivate the need for overriding the natural ordering of types.

</details></div>

A submission that was made earlier will be graded earlier. This behavior is an example of a first-in-first-out situation. Therefore, a queue will be a natural choice to store submissions.

Imagine we want to *prioritize* the grading of submissions on AutoGrader. We want to consider the number of prior submissions by a student, in addition, or instead of, the order in which the submission was received. For the sake of this contrived example, assume the fewer prior submissions you've made, the higher the priority of your submission to get AutoGrader processing time.

Based on the number of prior submissions, we can sort (order) the submissions using `Collections.sort`, but we need to _overwrite_ the natural ordering of `Submission` objects. In Java, you can do this by providing a `Comparator` to the `Collections.sort`. An example is provided in the `Main.java` in the `demo` package of the starter code.

```java
List<String> students = getStudents();
List<Submission> submissions = getSubmissions(students);

System.out.print("Submission sorted (priority ordering):");
Collections.sort(submissions, new LessSubmissionHigherPriority());
System.out.println(submissions);
```

where `LessSubmissionHigherPriority` is defined as:

```java
private static class LessSubmissionHigherPriority 
  implements Comparator<Submission> {

  @Override
  public int compare(Submission s1, Submission s2) {
    return s1.getNumPriorSubmission() - s2.getNumPriorSubmission();
  }
}
```