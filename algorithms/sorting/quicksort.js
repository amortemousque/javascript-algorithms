function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)]
    while (left <= right) {
        while (arr[left] < pivot)
            left++

        while (arr[right] > pivot)  // if (arr[right] >= pivot) equal then the pivot never swap wish is bad!
            right--


        if (left <= right) {
            swap(arr, left, right)
            left++
            right--
        }
    }
    return left
}

export default function quickSort(arr, left = 0, right = arr.length - 1) {
    let index = partition(arr, left, right)
    if (left < index - 1)
        quickSort(arr, left, index - 1)
    if (index < right)
        quickSort(arr, index, right)
}