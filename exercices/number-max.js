
// Number Max: Write a method that finds the maximum of two numbers. You should not use if-else or any other comparison operator.

// >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

function numberMax(a, b) {
    let sign = (a - b) >>> 31
    let reverse = sign ^ 1
    return reverse * a + sign * b
}

console.log(numberMax(-4, -2))
console.log(numberMax(4, 2))
console.log(numberMax(-4, 2))
