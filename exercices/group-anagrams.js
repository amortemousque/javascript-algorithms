
function getValue(char) {
    return char.charCodeAt(0)
}

function getValues([...str]) {
    let stringOfValues = str.map(c => getValue(c));
    let sum = stringOfValues.reduce((a, b) => a + b, 0)
    return sum
}

function groupAnagrams(arrayOfString) {
    arrayOfString.sort((left, right) => getValues(left) < getValues(right))
}

let arr = [
    'aymeric',
    'yameric',
    'toto',
    'ciremya',
    'ttata',
    'oott'
];

groupAnagrams(arr)
console.log(arr)
