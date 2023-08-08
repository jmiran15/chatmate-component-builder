# Big-Oh Notation

<div id="outcomes"><details><summary></summary>

* Use Big-Oh notation to describe the asymptotic running time of a program given its precise running time as a function of input size.

</details></div>


Suppose you have counted the number of steps a program takes and described the worst-case runtime as follows:

$$
T(n) = 12754n^{2} + 4353n + 834\lg n + 13546
$$

We can describe the runtime of this program simply as $\Omicron(n^2)$ (read it "big O of $n$ squared"). 

<div class="note">

$T(n)$ is the **precise** running time whereas $\Omicron(n^2)$ is the program's **asymptotic** running time.

</div>

**How do we go from $T(n)$ to $\Omicron(n^2)$?**

We suppress the constant factors (set them to $1$, resulting in $n^{2} + n + \lg n + 1$) and drop (ignore) the lower-order terms (resulting in $n^{2}$).

This simplification may seem excessively imprecise. In particular, we put so much effort into calculating the running time under the RAM model in the previous chapter! But, it turns out this _approximation_ is sufficient to compare the efficiency of algorithms. 