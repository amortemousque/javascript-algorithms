function merge(left, right) {
    let i = 0
    let j = 0
    let arr = []
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr.push(left[i])
            i++
        } else {
            arr.push(right[j])
            j++
        }
    }

    return arr.concat(left.slice(i), right.slice(j));
}

export default function mergeSort(arr) {

    if (arr.length < 2)
        return arr;

    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    return merge(await mergeSort(left, level), await mergeSort(right))
}

