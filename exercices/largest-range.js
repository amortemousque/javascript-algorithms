function merge(left, right) {
    let l = 0, r = 0;
    let result = []
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l])
            l++
        } else {
            result.push(right[r])
            r++
        }
    }
    return result.concat(left.slice(l), right.slice(r))
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function checkValue(array, result, first, last) {
    return first != array.length - 1 && Math.abs(result[1] - result[0]) < Math.abs(array[last - 1] - array[first])
}

function largestRange(array) {
    array = mergeSort(array);
    console.log(array)
    let result = [array[0], array[0]]
    let first = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i - 1] != array[i] - 1 && array[i - 1] != array[i]) {
            if (checkValue(array, result, first, i)) {
                result = [array[first], array[i - 1]]
                first = i
            }
            first = i
        }
    }

    if (checkValue(array, result, first, array.length))
        result = [array[first], array[array.length - 1]]

    return result
}

function largeRange2(array) {
    let positives = new Array(Math.max(...array))
    let negatives = new Array(Math.abs(Math.min(...array)))

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives[Math.abs(array[i])] = true
        } else {
            positives[array[i]] = true
        }
    }

    console.log(positives);
    let i = negatives.length - 2
    let result = [array[0], array[0]]
    let first = negatives.length - 1;
    while (i > 0) {

        if (negatives[i] == true) {

            if (!first)
                first = i


            if (Math.abs(result[1] - result[0]) < first - i) {
                result = [-first, -i]
            }

        } else {
            first = null;
        }
        i--
    }

    i = 0
    first = null

    while (i < positives.length) {

        if (positives[i] == true) {
            if (!first)
                first = i

            if (Math.abs(result[1] - result[0]) <  i - first) {
                result = [first, i]
            }
        }
        else {
            first = null;
        }
        i++
    }

    return result

}


// [1, 2, 5, 9, 3, 4, 5]
console.log(largeRange2([-1, -4, -2, -8, -3, 0, 1, 2, 3, 4, 5]))
// Do not edit the line below.
