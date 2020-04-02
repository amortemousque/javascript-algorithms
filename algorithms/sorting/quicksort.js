import chalk from 'chalk'



function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

let clock = 0
let delay = 1000


function drawBorders(arr, left, right, pivot) {
    let result = arr.map((v, i) => {
        let r = i == left || i == right ? ' | ' : '   '
        r = v == pivot ? ' P ' : r
        return r
    })
    clock += delay;
    setTimeout(() => console.log(`\n ${result.join(' ')}   pivot: ${pivot}`), clock);
}

function drawIndexes(arr, left, right) {
    let result = arr.map((v, i) => {
        let letterToAdd = 3 - [...(v.toString())].length
        v = i == left || i == right ? v : chalk.gray(v)
        if (letterToAdd == 2)
            v = ` ${v} `;
        else
            v += ' ';

        return v
    })
    clock += delay;
    setTimeout(() => console.log(`[${result.join(' ')}]`), clock);
}

function drawArray(arr, left, right) {
    let result = arr.map((v, i) => {
        let letterToAdd = 3 - [...(v.toString())].length
        v = i == left || i == right ? chalk.yellowBright(v) : chalk.gray(v)
        if (letterToAdd == 2)
            v = ` ${v} `;
        else
            v += ' ';

        return v
    })
    clock += delay;
    setTimeout(() => console.log(`[${result.join(' ')}]`), clock);
}


export default function quickSort(arr, left = 0, right = arr.length - 1) {
    let index = partition(arr, left, right)
    if (left < index - 1)
        quickSort(arr, left, index - 1)
    if (index < right)
        quickSort(arr, index, right)
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)]
    drawBorders(arr, left, right, pivot);
    while (left <= right) {
        while (arr[left] < pivot) {
            drawIndexes(arr, left, right)
            left++
        }

        while (arr[right] > pivot) {  // if (arr[right] >= pivot) equal then the pivot never swap wish is bad!
            drawIndexes(arr, left, right)
            right--
        }

        if (left <= right) {
            drawArray(arr, left, right)
            swap(arr, left, right)
            left++
            right--
        }
    }
    return left
}