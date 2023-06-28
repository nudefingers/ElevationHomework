const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }

    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}

const m = mathOperations()

console.log(m.add(13, 29))
console.log(m.mult(1.75, 24))
console.log(m.mult(7, m.div(36, 6)))

// What is 13 + 29?
// What is 1.75 x 24?
// What is 7 x (36 / 6)? (do this in one line)





/*
const family = function() {
    const memders = []

    const birth = function(name) {
        memders.push(name)
        console.log(memders)
    }

    return birth
}

const giveBirth = family()
giveBirth(`Eva`)
giveBirth(`Gefen`) */