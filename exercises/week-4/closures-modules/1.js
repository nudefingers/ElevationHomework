function adder(x) {
    let sum = 0

    return function (x) {
        sum += x
        return sum
    }
}

const add = adder()


console.log(add(3));  //3
console.log(add(1));  //4
console.log(add(2));  //3
console.log(add(2));  //4
console.log(add(8));  //10




