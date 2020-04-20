function peaksAndValleys(arr) {
    let temp = null;
    for (let i = 1; i < arr.length; i += 2) {
        let max = Math.max(arr[i - 1], arr[i], arr[i + 1] || 0)
        if (arr[i - 1] == max) {
            temp = arr[i]
            arr[i] = arr[i - 1]
            arr[i - 1] = temp
        } else if (arr[i + 1] == max) {
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
    return arr
}

console.log(peaksAndValleys([5, 3, 1, 2, 3, 9, 8, 7]))