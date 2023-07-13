$.ajax({
    url: `https://jsonplaceholder.typicode.com/users`
}).done(function (data) {
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


console.log("before setTimeout")
setTimeout(function () {
    console.log("in the callback")
}, 1000)
console.log("after setTimeout")