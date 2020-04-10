let dictionary = {
    0: '',
    1: 'One',
    2: 'Two',
    3: 'Tree',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixteen',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
    100: 'Hundred',
}

let levels = ['Thousand', 'Million', 'Billion'];

export function serializeHundreds(number) {
    let strings = [];
    let hundreds = Math.floor(number / 100)
    if (hundreds)
        strings.push(`${dictionary[hundreds]} hundreds`)
    
    let tens = number % 100;
    if (tens > 20) {
        let rest = tens % 10
        tens = tens - rest
        strings.push(`${dictionary[tens]} ${dictionary[rest]}`)
    } else {
        strings.push(`${dictionary[number]}`)
    }

    return strings.join(' ')
}

export function englishInt(number) {
    let result = []
    let l = -1;
    while (number % 1000 && number > 1) {
        result.push(serializeHundreds(Math.floor(number) % 1000) + ' ' + (levels[l] || ''))
        number /= 1000
        l++
    }

    return result.reverse().join(', ')
}

console.log(englishInt(2192981))

