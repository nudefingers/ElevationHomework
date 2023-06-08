const person = {
    name: "Julius",
    speak: function(food) {
      console.log("I like " + food)
    }
  }
//console.log(person.name)
//person.speak("potato")


//  Exercise 1
function isEven(number){
    return number % 2 == 0
}


//  Exercise 2
function  printOddNumbers(numbers){ 
    for (let number of Object.keys(numbers)) {
        if (!isEven(number)) {
            console.log(number)
        }
    }
}


//  Exercise 3
function existInArray(array, number){
    return array.includes(number)
}


//  Exercise 4
const calculator = {
    add: function(x, y) {
        return x + y
    },
    subtract: function(x, y) {
        return x - y
    }
}


// Exercise 5
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

function increaseByNameLength(money, name) {
    return money * 13
}

function makeRegal(name) {
    return "His Royal Highness, " + name
}
turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

