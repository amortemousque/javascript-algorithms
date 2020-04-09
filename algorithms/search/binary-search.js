
//O(log(n))

//bad one
function badBinarySearch(arr, value) {
    const middleIndex = Math.floor(arr.length / 2);
    const middle = arr[middleIndex];

    if (value < middle) {
        arr = arr.splice(0, middleIndex - 1)
        return binarySearch(arr, value)
    } else if (value > middle) {
        arr = arr.splice(middleIndex, arr.length - 1)
        return binarySearch(arr, value)
    } else if (value == middle) {
        return true
    }
    return false;
}

//right one
function binarySearch(arr, value, left, right) {
    const middleIndex = Math.floor(( left + right ) / 2);
    const middle = arr[middleIndex];
    
    if(left > right) return false

    if (value < middle) {
        return binarySearch(arr, value, left, middleIndex - 1)
    } else if (value > middle) {
        return binarySearch(arr, value, middleIndex + 1, right)
    } else if (value == middle) {
        return true
    }
}


let arr = [1, 2, 3, 4, 5, 6, 8, 9, 19, 28]

console.log(binarySearch(arr, 4, 0, arr.length - 1))