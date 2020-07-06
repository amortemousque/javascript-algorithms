function fibonacci(value) {

    for (let v = value; (v - 2) >= 0; v--) {
        let i = v - 1;
        let j = v - 2;

        // console.log(i + j)
    }
}

fibonacci(13)


function getNthFib(n) {
    let n1 = 1;
    let n2 = 0;
    let last = 0;
    for (var i = 0; i < n; i++) {
        if (i == 0 || i == 1) {
            last = i;
            continue;
        }

        last = n1 + n2;
        n2 = n1;
        n1 = last;
    }

    return last;
}

function getNthFib(n) {

    let i = 0
    let j = 1
    let current = 1;
    if(n == 0 || n == 1) return 0
    
    while (n - 2 > 0) {
        i = j
        j = current;
        current = i + j
        n--
    }
    return j
}

console.log(getNthFib(4))
