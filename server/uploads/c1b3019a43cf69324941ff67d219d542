# Runtime under RAM

<div id="outcomes"><details><summary></summary>

- Identify what counts as a "step" in an algorithm.
- Explain how algorithm run time is calculated under the RAM model of computation.

</details></div>


Under the RAM model of computation:

* **We assume we have unlimited memory.** (So we can assume the program input gets arbitrarily large). 

* **Memory access is free!** Examples include a variable declaration, looking up the value of a variable in memory, accessing an array element, accessing an object instance variable, invoking an instance method or function (just the process of method dispatch, not what the method actually does), etc. It does not matter where the item is stored (i.e., register, stack, heap, disk, or over the network).

* **Each simple operation takes exactly one time step**. Simple operations include:
  * assignment statement (`=`)
  * arithmetic operations (`+`, `-`, `*`, `/`, `%`)
  * increment/decrement operations (`++`, `--`)
  * combined assignment (`+=`, `*=`, etc), 
  * comparison/relational operations (`==`, `!=`, `<`, `<=`, etc), 
  * logical operations (`!`, `&&`, `||`) operations
  * jump operations (`return`, `break`, `continue`, etc), 
  * branch operations (`if`, `case`, etc)
  * user input, program output (print statements). 

* **Loops are not considered simple operation**. Instead, they are the composition of many single-step (simple) operations. 
  
* While calling a function/method is a free operation, the algorithm's runtime is affected by the function/method's time steps.

<div class="note">

We measure algorithm runtime by counting the number of steps it takes on a given problem instance under the RAM model of computation.

</div>

If we assume each time step under RAM takes constant time to run on an actual computer, we can count the number of steps an algorithm takes and convert that to real time. 