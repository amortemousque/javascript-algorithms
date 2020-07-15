
# Tips
Write data structure and naming
Some time use your own class object object structure go return exemple to store exponential
dont store the calculation, dont use two array where the pair use the same index, just use un simple structure like
{coefficient;, exponent; }

Reuse code and spit 
Make function two describe and split the code, that way you can even assume the some function already exist if you are out of time

Error checking
you can make assumptions over the input and discribe what you should do to prevent it or do the code


Is there anything you'd suggest I work on for next time

1 byte => 8 bit
1 char => 8 bit

array, list => get, set, remove, count
stack => pop, push, peek, isEmpty
queue => add, push, peek, isEmpty

ALPHABET_SIZE = 26 letters

trees => 
balanced => left subtree hight and right subtree height <= 1
if balanced (means it is balanced enough to ensure ) => insert and find are O(log n)


# TREES
Pre order, post order, in order traversal
- **In order**  visit left, print, visit right : When performed on a binary search tree.
- **Pre order** ( = breads first search) => print, visit left, visit right : In a pre-order traversal, the root is always the first node visited.
- **Post order** ( = depth first search) => visit left, visit right, print : In a post-order traversal, the root is always the last node visited.

3 types of trees
- **Complete** (a complete is balanced but not the opposite): A complete binary tree is a binary tree in which every level of the tree is fully filled.
- **Full** A full binary tree is a binary tree in which every node has either zero or two children.
- **Perfect** A perfect binary tree is one that is both full and complete.

![](https://study.com/cimages/multimages/16/0e0646ba-30e5-40d9-b45c-a138f038f05b_full_complete_perfect.png)

# MIN HEAP
A min-heap is a complete binary tree where each node is smaller than its children. We have two key operations on a min-heap: insert and extract_min.
> use when you want to be able to access the maximum or minimum element very quickly

To insert into the heap in order : 
-  just insert at the end 
-  swap with the parent until you get to the right spot
  
To remove
- we swap the root with the last elem add  
- we bubble down the root whish is to hight
  
![](https://upload.wikimedia.org/wikipedia/commons/6/69/Min-heap.png)

# TRIES

> A trie can check if a string is a valid prefix in 0 (K) time, where K is the length of the string. This is actually the same runtime as a hash table will take. 
Although we often refer to hash table lookups as being O(1) time, this isn't entirely true. A hash table must read through all the characters in the input, which takes 0 (K) time in the case of a word lookup.

A node in a trie could have anywhere from 1 through ALPHABET_SIZE + 1 children (or, 0 through ALPHABET_SIZE if a boolean flag is used instead of a * node).

![](http://www.mathcs.emory.edu/~cheung/Courses/323/Syllabus/Text/FIGS/Trie/trie06.gif)

# GRAPHS
A graph is simply a collection of nodes with edges between (some of) them.
Graphs can be either directed (like the following graph) or undirected. While directed edges are like a one-way street, undirected edges are like a two-way street.
vocabulary: edges, vertices
BFS (need a stack), DFS (need a queue)




# BITWISE
and: &
or: | 
xor: ^
shift left: <<
shift right: >>
shift right without the 
Know how to count in base 2 and base X
iterate bitwise you can do : (number >>>= 1) and then (number & 1)

# MATHEMATICS API

Rules : k = N? -> log,16 =4 (ex: 24 = 16 )

 `2*2*2 = (2^3)` \
 --> `3 root 8 = 2 => 2^3 = 2*2*2 = 8` \
 --> `log2(8) = 3`
> racine : find the repeated number (exponent)\
  log : find the X of times the number is repeated (exponent or power) 

2 racine de 3   

3^1/2 = 3* 1,5

  R^L = resultat

- sqrt(9) = 9^1/2 = 3
> Attention : Pas de function pour le factoriel

Prime number
Median number
Power of, log, 
Factorial 
Square root Math.sqrt()
Exponential  Math.exp()
Logarithm Math.log2() or Math.log(2, ...)
Round : Math.round(), Math.pow(), Math.ceil()
The rest of a division is MODULE : 2 % 
loi des puissance : 
(x^m)^n = x^mn
x^m + x^n = x^m+n
x^m % x^n = x^m-n

Loi log : 
x^m = n => logx(n) = m
logX + logN = logXN
logx(m) - logx(n) = logx(m/n)

Mod(x,y) is the rest of the division of x/y

Loi square root:

sqrt(x)

```javascript
let pi = Math.PI;

let max = Math.sqrt();

let max = Math.max(...numbers);
```


# OOD
Must ask who is going to use it and how they are going to use it. Depending on the question, you may even want to go through the "six Ws": who, what, where, when, how, why.

# SYSTEM DESIGN AND SCALABILITY
read-heavy vs write-heavy
failure
availability vs reliability
security

Easy of use
Easy to implement
Flexible 

# ARRAY API

break a loop (except the forEeach function)
- continue; =>  go to the next iteration of the loop
- break; => break the execution off the loop

do not use for in for arrays because keys are strings

**for** perfect for everything

**for..in** is to loop through Object

**for..of ** can be used to iterate through String, Array ...

**forEach()** can't be stop or break other than by throwing an exception. No operation for uninitialized values (sparse arrays)


```javascript
let i = '1';
i = 1 + 1;  // i equals to '11'
```

```javascript
let i = '1'
i++ // i equals to 2
```

queue.push(...node.children)


# DATE API
### Create date
Create a date with **new Date(...).** 
Today with **new Date()**
**Date()** accept 3 ways to create 
```javascript
let dateFromString = new Date('2017-2-10T00:00:00Z')
let dateFromTimstamp = new Date(1582217025)
let dateFromParams = new Date(20, 2, 3, 12, 23, 2)
```
> **Attention**: 
Never create a date with the date string method. (browser dependent)
It's best to create dates with the arguments method.
Remember (and accept) that month is zero-indexed in JavaScript.

### Compare date

```javascript
let date1 = new Date(12)
let date2 = new Date(13)

if (date1 <= date2) {}
if (date1 <= date2) {}

if (date1.getTime() <= date2.getTime()) {}
```
> **Attention**: 
Do not use ==, ===, !== or !=== to compare two Date

### Format date
```javascript
let date = new Date(...)
date.getTime() // 1582217025
date.toISOString() // "2020-02-20T16:54:06.955Z"
date.toString() // "Thu Feb 20 2020 17:54:06 GMT+0100 (Central European Standard Time)"
```

