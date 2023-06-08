people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
]

function capitalize(properName) {
    return properName.charAt(0).toUpperCase() + properName.slice(1).toLowerCase();
}

function reside(city, country) {
    return capitalize(city) + ", " + capitalize(country)
}

function checkAge(age) {
    if (age < 21) {
        return "Underage"
    }
    if (age > 55) {
        return "55+"
    }
}

function encloseInQuotes(phrase) {
    return "\"" + phrase + "\""
}