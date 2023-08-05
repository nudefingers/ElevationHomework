var firstPiece = { id: 101, name: 'Ofri' }
var seoncdPiece = { country: 'Israel' }

var whole = { ...firstPiece, ...seoncdPiece }
console.log(whole)



let meatArr = ["beef", "chicken"]
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"]

let [rabbit, ...vegetables] = vegetableArr
let meats = [rabbit, ...meatArr]
console.log(vegetables)
console.log(meats)



let employeesArr = [
    { name: "Joey", id: 1, age: 26 },
    { name: "Lily", id: null, age: 24 },
    { name: "Alice", id: 7, age: null },
    { name: "Sam", id: 8, age: 24 },
    { name: "Ray", id: null, age: null }
]

console.log(employeesArr[0].id ?? true)
console.log(employeesArr[1].id ?? true)

employeesArr.filter(e => (!e.id || !e.age) ?? true)
            .map(e => e.name)
            .forEach(n => console.log(n))