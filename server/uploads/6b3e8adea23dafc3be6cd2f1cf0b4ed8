# Dijkstra's Algorithm: Exercise

<div id="outcomes"><details><summary></summary>

* Trace Dijkstra's algorithm (shortest path in weighted graphs) by specifying the values in auxiliary data structures.

</details></div>

<span class="tag">Exercise</span> Find the weighted shortest path from vertex $3$ to vertex $5$ in the _digraph_ (directed graph) below. 

<div class="center">
<img src="/img/28/graph04.png" width="50%">
</div>

The following parts will guide you through the process.  

1. Fill out the table below with each vertex and its corresponding outgoing vertices.

| Vertex | Outgoing |              
| :----: | :------: | 
| 0      |          |
| 1      |          |
| 2      |          |
| 3      |          |
| 4      |          |
| 5      |          |

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

| Vertex | Outgoing |              
| :----: | :------: |
| 0      | 1, 2, 4, 5 |
| 1      | 4, 5     |
| 2      | 3, 4     |
| 3      | 2        |
| 4      | 0, 1, 5  |
| 5      | none     |

</details>


2. Start with the following default values in Table 1 below (fill out the answers from part-1 in the "Outgoing" column). How would these values change after exploring vertex $3$? Next, fill out Table 2 with your response. What is now the unexplored vertex with the smallest distance from vertex $3$?

<center><span class="caption">Table 1: Default values</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | | INFINITY | null | no |
| 1 | | INFINITY | null | no |
| 2 | | INFINITY | null | no |
| 3 | | INFINITY | null | no |
| 4 | | INFINITY | null | no |
| 5 | | INFINITY | null | no |

<center><span class="caption">Table 2: After exploring vertex 3</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | | | | |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

Unexplored vertex with the smallest distance: 2

<center><span class="caption">Table 1: Default values</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | 1, 2, 4, 5 | INFINITY | null | no |
| 1 | 4, 5 | INFINITY | null | no |
| 2 | 3, 4 | INFINITY | null | no |
| 3 | 2 | INFINITY | null | no |
| 4 | 0, 1, 5 | INFINITY | null | no |
| 5 | none | INFINITY | null | no |

<center><span class="caption">Table 2: After exploring vertex 3</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | 1, 2, 4, 5 | INFINITY | null | no |
| 1 | 4, 5 | INFINITY | null | no |
| 2 | 3, 4 | **10** | **3** | no |
| 3 | 2 | **0** | null | **yes** |
| 4 | 0, 1, 5 | INFINITY | null | no |
| 5 | none | INFINITY | null | no |

</details>


3. How would these values change after exploring vertex $2$? Fill out Table 3 with your response. What is now the unexplored vertex with the smallest distance from vertex $3$?
    
<center><span class="caption">Table 3: After exploring vertex 2</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | | | | |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

Unexplored vertex with the smallest distance: $4$  

<center><span class="caption">Table 3: After exploring vertex 2</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |           
| 0 | 1, 2, 4, 5 | INFINITY | null | no |
| 1 | 4, 5 | INFINITY | null | no |
| 2 | 3, 4 | 10 | 3 | **yes** |
| 3 | 2 | 0 | null | yes |
| 4 | 0, 1, 5 | **22** | **2** | no |
| 5 | none | INFINITY | null | no |

</details>


4. How would these values change after exploring vertex $4$? Fill out Table 4 with your response. What is now the unexplored vertex with the smallest distance from vertex $3$? 
    
<center><span class="caption">Table 4: After exploring vertex 4</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | | | | |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

Unexplored vertex with the smallest distance: $0$  

<center><span class="caption">Table 4: After exploring vertex 4</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | 1, 2, 4, 5 | **34** | **4** | no |
| 1 | 4, 5 | **52** | **4** | no |
| 2 | 3, 4 | 10 | 3 | yes |
| 3 | 2 | 0 | null | yes |
| 4 | 0, 1, 5 | 22 | 2 | **yes** |
| 5 | none | **50** | **4** | no |

</details>

5. How would these values change after exploring vertex $0$? Fill out Table 5 with your response. What is now the unexplored vertex with the smallest distance from vertex $3$? 

<center><span class="caption">Table 5: After exploring vertex 0</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | | | | |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

Unexplored vertex with the smallest distance: $1$  

<center><span class="caption">Table 5: After exploring vertex 0</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | 1, 2, 4, 5 | 34 | 4 | **yes** |
| 1 | 4, 5 | **44** | **0** | no |
| 2 | 3, 4 | 10 | 3 | yes |
| 3 | 2 | 0 | null | yes |
| 4 | 0, 1, 5 | 22 | 2 | yes |
| 5 | none | **49** | **0** | no |

</details>


6. How would these values change after exploring vertex $1$? Fill out Table 6 with your response. What is now the unexplored vertex with the smallest distance from vertex $3$? 
    
<center><span class="caption">Table 6: After exploring vertex 1</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | | | | |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

Unexplored vertex with the smallest distance: $5$  

<center><span class="caption">Table 6: After exploring vertex 1</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | 1, 2, 4, 5 | 34 | 4 | yes |
| 1 | 4, 5 | 44 | 0 | **yes** |
| 2 | 3, 4 | 10 | 3 | yes |
| 3 | 2 | 0 | null | yes |
| 4 | 0, 1, 5 | 22 | 2 | yes |
| 5 | none | 49 | 0 | no |

</details>


7. How would these values change after exploring vertex $5$? Fill out Table 7 with your response.  
    
<center><span class="caption">Table 7: After exploring vertex 5</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | | | | |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

<center><span class="caption">Table 7: After exploring vertex 5</span></center>

| Vertex | Outgoing | Distance from 3 | Previous | Explored |             
| :----: | :------: | :-------------: | :------: | :------: |
| 0 | 1, 2, 4, 5 | 34 | 4 | yes |
| 1 | 4, 5 | 44 | 0 | yes |
| 2 | 3, 4 | 10 | 3 | yes |
| 3 | 2 | 0 | null | yes |
| 4 | 0, 1, 5 | 22 | 2 | yes |
| 5 | none | 49 | 0 | **yes** |

</details>


1. What is the weighted shortest path from vertex 3 to 5? What is the total distance of this path?  

<details class="solution" data-release="Apr 17, 2023 17:00:00">
<summary>Solution</summary>

The weighted shortest path from vertex $3$ to vertex $5$ is: 

$$
3 \implies 2 \implies 4 \implies 0 \implies 5
$$

And the distance is $49$.

</details>