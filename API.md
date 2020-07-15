## ARRAY API

```javascript
let array = [0,1,2,3,4,5].slice(1, 5) // [1, 2, 3, 4] : get index from 1 to 4 
let array = [0,1,2,3,4,5]
array.splice(2, 0, 'toto') // [0, 1, 'toto', 2, 3, 4] : insert 'toto' at the index 2
array.splice(2, 0, 'toto', 'tata') // [0, 1, 'toto', 'tata', 2, 3, 4] : insert 'toto' at the index 2 (so push the previous on at index 3)
array.splice(2, 2) // [0,1,4,5] delete two items starting at the index 2

array.concat(array2) // return a new array
array.reduce((accumulator, currentValue, index, array) => {}, 0)
array.find()
array.findIndex()
array.include()

function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
function compareNumbers(a, b) {
  return a - b;
}
```

## MATH API

let upperLimit = Number.MAX_SAFE_INTEGER : 9007199254740991 \
let lowerLimit = Number.MIN_SAFE_INTEGER : -9007199254740991

32 bit max : 2\*\*31 - 1 \
32 bit min : -2\*\*31

let pi = Math.PI; \
let squareRoot = Math.sqrt(); \
let max = Math.max(...numbers);

## STRING API

ASCII table : Majuscule before minuscule

```javascript
String.fromCharCode() // get the character from the char code position
'a'.charCodeAt(0) // get ghe ACII char code position
let char = ('a'.charCodeAt(0) + 'E'.charCodeAt(0) - 'A'.charCodeAt(0)) // 101 ('e') : get the code of the lower case
```



## DATE API
```javascript
let dateFromString = new Date('2017-2-10T00:00:00Z')
let dateFromTimstamp = new Date(1582217025)
let dateFromParams = new Date(YEAR, MOUNT_START_AT_I_0, DAY, HOURS, MIN, SEC)

let date = new Date(...)
date.getTime() // 1582217025
date.toISOString() // "2020-02-20T16:54:06.955Z"
date.toString() // "Thu Feb 20 2020 17:54:06 GMT+0100 (Central European Standard Time)"
```

> Construct one for each date, then compare them using the >, <, <= or >=.
> 
> The ==, !=, ===, and !== operators require you to use date.getTime() as in

## SYSTEM DESIGN AND SCALABILITY
read-heavy vs write-heavy \
failure \
availability vs reliability \
security \

Easy of use \
Easy to implement \
Flexible \


## OPERATORs
| Common operators ||  |
|---|---|---|
| Division assignment |	x /= y |	x = x / y |
| Remainder assignment | x %= y |	x = x % y |
| Exponentiation assignment	| x **= y |	x = x ** y |

|  Bitwise operators ||  |
|---|---|---|
|Left shift assignment |	x <<= y |	x = x << y |
|Right shift assignment |	x >>= y |	x = x >> y |
|Unsigned right shift assignment |	x >>>= y |	x = x >>> y |
|Bitwise AND assignment |	x &= y |	x = x & y |
|Bitwise XOR assignment	| x ^= y |	x = x ^ y |
|Bitwise OR assignment |	x \|= y |	x = x | y |


