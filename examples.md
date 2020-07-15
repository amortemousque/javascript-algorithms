
## BINARY SEARCH BOUNDS

```javascript
let logs = [ 200, 201, 201, 201,201 ]

function binarySearchLowerBound(logs, value, start = 0, end = logs.length) {

  if(start > end)
    return null
  
  let middle = Math.floor((start + end) / 2)
  
  if(logs[middle] == value && (logs[middle - 1] === undefined || logs[middle - 1] < logs[middle])) {
    return middle
  }
  
  if(value <= logs[middle])
    return binarySearchLowerBound(logs, value, start, middle - 1)
  else
    return binarySearchLowerBound(logs, value, middle + 1, end)
}

function binarySearchUpperBound(logs, value, start = 0, end = logs.length) {

  if(start > end)
    return null
  
  let middle = Math.floor((start + end) / 2)
  
  if(logs[middle] == value && (logs[middle + 1] === undefined || logs[middle + 1] > logs[middle])) {
    return middle
  }

  if(value < logs[middle])
    return binarySearchUpperBound(logs, value, start, middle - 1)
  else
    return binarySearchUpperBound(logs, value, middle + 1, end)
}

function find(logs, value) {
  let start = binarySearchLowerBound(logs, value)
  let end = binarySearchUpperBound(logs, value)
  console.log(start, end)
  return logs.slice(start, end + 1)
}

console.log(find(logs, 201))
```
