function StringBuilder(strings) {
    let sentence = "";
    for(const s of strings) { //0(x)
        sentence += s; // 0(n)
    }
    return sentence;
}

console.log(StringBuilder(['aa', 'bb', 'cc', 'dd']));