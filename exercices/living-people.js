
function naiveLivingPeople(people) {
    let years = new Array(101)
    years.fill(0)

    for (let person of people) {
        const nbYears = person.death - person.birth
        const startIndex = person.birth - 1900;
        for (let i = startIndex; i < startIndex + nbYears; i++) {
            years[i]++
        }
    }

    let max = 0
    let maxYear = null
    years.forEach((value, index) => {
        if (value > max) {
            max = value
            maxYear = index + 1900
        }
    })

    return maxYear
}


function livingPeople(people) {
    let births = people.sort((a, b) => a.birth < b.birth)
    let deaths = people.sort((a, b) => a.death < b.death)

    let count = 0
    let maxAlive = 0
    let maxYear = 0
    let bIndex = 0
    let dIndex = 0

    while (bIndex < births.length) {
        count++
 
        while(dIndex < deaths.length && deaths[dIndex].death <= births[bIndex].birth) {
            count--
            dIndex++
        }

        if (count > maxAlive) {
            maxAlive = count
            maxYear = births[bIndex].birth
        }
        bIndex++
    }

    return maxYear
}



let people = [
    { birth: 1912, death: 1915 },
    { birth: 1920, death: 1990 },
    { birth: 1910, death: 1998 },
    { birth: 1923, death: 1982 },
    { birth: 1990, death: 1998 },
    { birth: 1983, death: 1999 },
    { birth: 1975, death: 1994 }
]
console.log(livingPeople(people))