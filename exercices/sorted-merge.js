function sortedMerge(left, right) {

    let length = left.length - right.length + 1
    let i = 0;
    let j = length;
    while (i < length && right.length) {
        if (left[0] < right[0]) {

            let value = left.shift()
            left[j - 1] = value
            i++
        } else {

            let value = right.shift()
            left[j] = value
            j++
        }
    }
    while (i < length) {
        let value = left.shift()
        left.push(value)
    }

    while (right.length) {
        let value = right.shift()
        left.push(value)
    }
}

let left = [1, 2, 5, 6, 10, 12, 19, , , , , , ,]

let right = [3, 5, 8, 11, 13, 18, 20]

sortedMerge(left, right)

console.log(left);
