let p1 = {
    name: "Jill",
    age: 18,
    city: "Gaaga"
}

let p2 = {
    name: "Robert",
    age: 18,
    city: "London"
}

if (p1.age == p2.age) {
    if (p1.city == p2.city) {
        console.log("Jill wanted to date Robert")
    } else {
        console.log("Jill wanted to date Robert, but couldn\'t")
    }    
}

///////

let book1 = {
    title: "Peppi",
    author: "Lingren"
} 

let book2 = {
    title: "Tom",
    author: "Twen"
} 

let library = {
    books: [book1, book2]
}

///////

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

let name = prompt('Please enter the name for your reservation').toLowerCase

let reservationsToIgnoreCase = null

for(let key of Object.keys(reservations)) {
    reservationsToIgnoreCase.key = reservations.key.toLowerCase
}

for (let key in reservationsToIgnoreCase) {
    if (key === name) {
        let currentClaimed = reservationsToIgnoreCase.key.claimed;

        if (currentClaimed) {
            alert("Hmm, someone already claimed this reservation")
            break
        }
        if (!currentClaimed) {
            alert("Welcome, " + name)
            break
        }
    }
}

if (!(name in Object.keys(reservationsToIgnoreCase))) {
    alert("You have no reservation")
    let newName = {
        claimed: true
    }
    reservations[name] = newName
}

console.log(reservations)
