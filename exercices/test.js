//16.1
function swap(a, b) {
    console.log(a, b)

    a = a + b
    b = a - b
    a = a - b
    console.log(a, b)
}

// swap(10, 5)

//16.2
let cacheOccurrence = new Map()

function wordFrequencies(books, word) {
    word = word.toLowerCase()
    if (cacheOccurrence.has(word))
        return cacheOccurrence.get(word)

    cacheOccurrence.set(word, 0)
    for (let w of books) {
        w = w.toLowerCase()
        cacheOccurrence.set(w, cacheOccurrence.get(w) || 0 + 1)
    }
    console.log(cacheOccurrence)
    return cacheOccurrence.get(word)
}


// console.log(wordFrequencies(['toto', 'tata', 'Toto'], 'toto'))

//16.5
function factorial(n) {
    if (n < 2)
        return n

    return n * factorial(n - 1);
}

function factorialZeros(n) {
    let fac = factorial(n)
    let count = 0
    while (fac % 10 == 0) {
        count++
        fac /= 10
    }
    return count
}

function fives(n) {
    let c = 0
    while (n % 5 == 0) {
        c++
        n /= 5
    }
    return c
}

function fac(n) {
    let count = 0
    for (let i = 2; i <= n; i++) {
        count += fives(i)
    }
    return count
}

// console.log(factorial(10))
// console.log(fac(10))


function sort(left, right) {
    let i = 0
    let j = 0
    let result = []
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        result.push(left[i])
        i++
    }

    while (j < right.length) {
        result.push(right[j])
        j++
    }

    return result
}

function mergeSort(a) {
    if (a.length <= 1)
        return a

    let middle = Math.floor(a.length / 2)
    let left = a.slice(0, middle)
    let right = a.slice(middle, a.length)

    return sort(mergeSort(left), mergeSort(right))
}

//16.6
function smallestDifference(left, right) {
    let sortedArray = sort(mergeSort(left), mergeSort(right))
    let distance = null

    for (let i = 0; i < sortedArray.length + 1; i++) {
        let isCurrentLeft = left.includes(sortedArray[i]) //todo : optimized
        let isCurrentRight = right.includes(sortedArray[i + 1]) //todo : optimized


        if (isCurrentLeft == isCurrentRight || !isCurrentLeft == !isCurrentRight) {
            let d = Math.abs(sortedArray[i + 1] - sortedArray[i]);

            if (distance == null || distance > d) {
                distance = d
            }
        }
    }

    return distance
}
    

console.log('result', smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]))