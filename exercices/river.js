function checkRiver(matrix, visitedMatrix, i, j) {
    let count = 0
    let queue = [{ i: i, j: j }]
    while (queue.length) {

        let { i, j } = queue.shift()

        if (visitedMatrix[i][j])
            continue;

        visitedMatrix[i][j] = true;
        if (matrix[i][j]) {
            count++
            if (matrix[i][j - 1] != undefined) {
                queue.push({ i: i, j: j - 1 })
            }
            if (matrix[i][j + 1] != undefined) {
                queue.push({ i: i, j: j + 1 })
            }
            if (matrix[i - 1] != undefined) {
                queue.push({ i: i - 1, j: j })
            }
            if (matrix[i + 1] != undefined) {
                queue.push({ i: i + 1, j: j })
            }
        }
    }
    return count
}

function riverSizes(matrix) {

    let visitedMatrix = matrix.map(l => [...l]);
    let result = []

    for (let i in visitedMatrix) {
        for (let j in visitedMatrix[i]) {
            visitedMatrix[parseInt(i)][parseInt(j)] = false
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] && visitedMatrix[i][j] == false)
                result.push(checkRiver(matrix, visitedMatrix, i, j))
        }
    }

    return result
}

console.log(riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
]))