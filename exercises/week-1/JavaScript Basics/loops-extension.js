const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}
const title = "Words that begin with "
const keys = Object.keys(dictionary)

for (let key of keys) {
    console.log(title + key)

    let values = dictionary[key]

    for (let v of values) {
        console.log(v)
    }
}