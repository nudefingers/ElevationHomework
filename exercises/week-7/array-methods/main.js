$.ajax({
    url: `https://jsonplaceholder.typicode.com/users`
}).done(function(data) {
    let users = data

    // Exercise 1
    let companies = users.map(u => { return { email: u.email, companyName: u.company.name } })
    console.log(companies)

    // Exercise 2
    let users5 = users.filter(u => u.address.zipcode.startsWith(`5`))
    console.log(users5)

    // Exercise 3
    let users5Id = users.filter(u => u.address.zipcode.startsWith(`5`))
                        .map(u => u.id)
    console.log(users5Id)

    // Exercise 4
    let cNames = users.map(u => u.name)
                      .filter(u => u.toLowerCase().startsWith(`c`))
    console.log(cNames)

    // Exercise 5
    let isSouthChristy = users.every(u => u.address.city === `South Christy`)
    console.log(isSouthChristy)

    // Exercise 6
    let apt950 = users.find(u => u.address.suite === `Apt. 950`)
    console.log(apt950.company.name)

    // Exercise 7
    const named = function (user) {
        console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`)
    }
    users.forEach(u => named(u))
})


const people = [
    {id: 1, name: "Humbert", money: 499, hasAC: false},
    {id: 2, name: "Bellatrix", money: 499, hasAC: true},
    {id: 3, name: "Mola", money: 720, hasAC: false}
]

// let isCool = function(humbert){
//     return (humbert.money > 500 || humbert.hasAC)
// }

// let print = (p) => console.log(p)

// people.filter(isCool).map(p => p.name).forEach(print)

console.log(people.find(p.id === 2))