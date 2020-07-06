let loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return (this.water / this.flour * 100)
    }
};

console.log(loaf.flour, loaf.water)
console.log(loaf.hydration())

let obj = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5
}

for (value in obj) console.log(value)

let obj2 = {
    meals: [
        'breakfast',
        'second breakfast',
        'elevenses',
        'lunch',
        'afternoon tea',
        'dinner',
        'supper'
    ]
}

console.log(obj2.meals[3]);

let obj3 = {
    name: "brett",
    jobTitle: "code monkey"
}
let obj4 = {
    name: "tterb",
    jobTitle: "coder",
    boss: "fred"
}
let obj5 = {
    name: "ret",
    jobTitle: "monkey",
    boss: "mercury"
}
let obj6 = {
    name: "play",
    jobTitle: "ball",
    boss: "your face"
}

let arr = [obj3, obj4, obj5, obj6];
arr.forEach(element => (element.boss !== undefined) ? console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}.`) : console.log(`${element.jobTitle} ${element.name} doesn't report to anybody.`))

function decode(codeWord) {
    let cypherObject = {
        a: 2,
        b: 3,
        c: 4,
        d: 5,
    }
    if (cypherObject[codeWord[0]] != undefined) return codeWord[cypherObject[codeWord[0]] - 1]
    else return " "
}
decode("abcde")

function decodeWords(words) {
    return words.forEach(word => console.log(decode(word)))
}

let words = [
    "abcde",
    "buuct",
    "castg",
    "dugjt",
    "esdfg",
    "apdfg",
    "btlhr",
    "doonu",
    "aguth"
]

decodeWords(words)

let charData = [
    ['Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff'],
    ['Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'],
    ['Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'a String and Barrow Blade'],
    ['Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, "Anduril"],
    ["Legolas", 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'a Bow and Arrow']
]

function constructChar(data) {
    let characters = [];
    for (let i = 0; i < charData.length; i++) {
        characters[i] = {
            name: data[i][0],
            nickname: data[i][1],
            race: data[i][2],
            origin: data[i][3],
            attack: data[i][4],
            defense: data[i][5],
            weapon: data[i][6],
            describe: function() {
                console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`)
            },

            evaluateFight: function() {
                console.log(`Your opponent takes ${this.attack} damage and you recieve ${this.defense} damage`)
            }
        }
    }
    return characters
}

let characters = constructChar(charData)

let newCharacter = {
    name: "Arwen Undomiel",
    nickname: "arwen",
    race: "Half-Elf",
    origin: "Rivendale",
    attack: 7,
    defense: 7,
    weapon: "Hadhafang"

}

characters.push(newCharacter)

characters.find(character => {
    if (character.nickname == "aragorn") character.describe()
})

let hobbits = characters.filter(character => character.race == "Hobbit")

console.log("Hobbitses:\n\n", hobbits)

let highAtk = characters.filter(character => character.attack > 5)

console.log("Strong attackers:\n\n", highAtk)