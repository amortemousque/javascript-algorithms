// cash register change

//how many coin you have to get back has change 
// 33 bchange = 1 quater(25), 1nickel(5) and 3 pennies(1) : dime : 10
// getCoins(33) => 5;
function getCoins(cents) {

    let coins = 0;
    [25, 10, 5, 1].forEach(coinValue => {
        let c = Math.floor(cents / coinValue);
        coins += c;
        cents = cents - c * coinValue;
    })

    return coins;
}

function getMinCoins(cents) {

    let coins = 0;
    [25, 10, 1].forEach(coinValue => {
        let c = Math.floor(cents / coinValue);
        coins += c;
        cents = cents - c * coinValue;
    })

    return coins;
}

let wallet = getCoins(31);
console.log(wallet);
wallet = getMinCoins(31); //4
console.log(wallet);
