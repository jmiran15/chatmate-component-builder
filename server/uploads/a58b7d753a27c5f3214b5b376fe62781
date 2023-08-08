# Growth Rate

<div id="outcomes"><details><summary></summary>

* Understand Big-Oh notation groups functions into sets of functions that share a common characteristic about their rate of growth.

</details></div>

We have, so far, taken an informal approach to the application of the Big-Oh notion. If I tell you the runtime of a function is $T_1(n) = 3n + 5$ for instance, you know its running time is $\Omicron(n)$. You know this because you learned to suppress constant factors and ignore lower terms in $T_1(n)$. As such, you know the running times $T_2(n)=0.34n$ and $T_3(n) = 234234n$ are also $\Omicron(n)$.

<div class="note">

It seems that $\Omicron(n)$ describes <u>a group of functions</u> that all share a characteristic: they all exhibit a runtime that linearly _grows_ as the size of input increases.

</div>

The second algorithm ($T_2$) is obviously faster among the three, but the difference between them is negligible <u>in comparison to</u> another algorithm with, e.g., the runtime of $\Omicron(n^2)$. 

<div class="note">

The $g(n) = n^2$ function **grows much faster** than $f(n) = cn$ when **$n$ get arbitrarily large** for any constant $c > 0$ &mdash; constant means not a function of $n$.

</div>

<details class="demo">
<summary>
Why does $n^2$ grow faster than $n$?
</summary>

<div class="pdf" file="growth_rate.pdf"></div>

</details>

<details class="resource">
<summary>
Why are we analyzing runtime when the input <i>gets arbitrarily large</i>?!
</summary>

When it comes to computational problems, the input usually gets bigger. Think about it! Your social network app is likely to gain more users and more cat pictures as time goes on!! We are living in the era of "big data," after all!

</details>

We can, more formally, define Big-Oh notation as follows.

<div class="note">

$\Omicron(f(n))$ is a **set (or class) of functions** that grow _no faster than_ $f(n)$.

</div>

So when we say the running time of a program is in $\Omicron(n)$ for instance, we say its running time is a function, one of many in a _set_ of functions that all share a *linear rate of growth*. 

This also explains the use of set membershp operator $\in$. Indeed, we write $T_1(n) \in \Omicron(n)$. Although, many references write $T_1(n) = \Omicron(n)$ which (in this context) means the same thing.

<div class="note">

**Case in point!**

Big-Oh notation groups runtime functions. All functions in a particular group are considered to have the same (asymptotic) efficiency.

</div>

This means we consider $T_1(n)$, $T_2(n)$, and $T_3(n)$, all having the same _efficiency_!