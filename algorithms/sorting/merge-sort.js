
// Worst-case performance	O(n log n)
// Best-case performance	O(n log n) typical, O(n) natural variant
// Average performance	O(n log n)
// Worst-case space complexity	О(n) total with O(n) auxiliary, O(1) auxiliary with linked lists[1]
import center from 'center-align'


let splitting = [];
let merging = [];

function addDrawingSNode(arr, level) {
    if (!splitting[level]) {
        splitting[level] = [arr]
    } else {
        splitting[level].push(arr)
    }
}

function addDrawingMNode(arr, level) {
    if (!merging[level]) {
        merging[level] = [arr]
    } else {
        merging[level].push(arr);
    }
}

function draw() {
    let output = []
    splitting.forEach(line => {
        line = line.map(arr => '[' + arr.map(v => `${v}`) + ']')
        output.push(line.join(' '))
    })

    merging.reverse().forEach(line => {
        line = line.map(arr => '[' + arr.map(v => `${v}`) + ']')
        output.push(line.join(' '))
    })
    let clock = 0
    let delay = 1000

    center(output).forEach(l => {
        clock += delay
        setTimeout(() => { console.log(l) }, clock);
    })
}

function merge(left, right) {
    let i = 0
    let j = 0
    let arr = []
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr.push(left[i])
            i++;
        } else {
            arr.push(right[j]);
            j++;
        }
    }


    arr = arr.concat(left.slice(i), (right.slice(j)))
    return arr;
}
export default function mergeSort(arr, level = 0) {

    level++;
    addDrawingSNode(arr, level)

    if (arr.length < 2)
        return arr;


    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle)

    let merged = merge(mergeSort(left, level), mergeSort(right, level));
    addDrawingMNode(merged, level)

    if (level == 1) {
        draw()
    }

    return merged
}

