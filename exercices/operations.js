function multiply(left, right) {
    let l = Math.abs(left), r = Math.abs(right)
    let result = 0
    for (let i = 0; i < l; i++)
        result += r

    return onlyOnMinusNumber(left, right) ? -result : result
}

function subtract(left, right) {
    return left + negate(right)
}

function divideBrutForce(left, right) {
    let l = Math.abs(left), r = Math.abs(right)
    let i = 1;
    while (l != multiply(i, r)) 
        i++

    return onlyOnMinusNumber(left, right) ? -i : i
}

function divide(left, right) {
    let l = Math.abs(left), r = Math.abs(right)
    let times = 0;
    let product = 0
    while (l != product) {
        product += r
        times++
    }

    return onlyOnMinusNumber(left, right) ? -times : times

}

5
function negate(a) {
    let r = 0, negate = 0
    let nsign = a < 0 ? 1 : -1
    let sign = a > 0 ? 1 : -1

    while(r != a) 
    {
        r += sign
        negate += nsign
    }
    return negate
}

function onlyOnMinusNumber(left, right) {
    return (left > 0 && right <= 0) || (right > 0 && left <= 0)
}

console.log(subtract(5, 3))
console.log(subtract(3, 5))
console.log(subtract(-3, 5))
console.log(subtract(-3, -5))

console.log(multiply(3, -5))
console.log(multiply(-5, -5))


console.log(divide(9, 3))
console.log(divide(8, 2))
console.log(divide(-8, 2))
console.log(divide(-8, -2))


console.log(negate(-10))