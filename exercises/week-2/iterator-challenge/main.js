const myObject = {
  numbers: [],
  [Symbol.iterator]: function* () {
    this.fillRandom()
    for (const number of this.numbers) {
      if (number % 2 === 0) {
        yield number;
      }
    }
  },
  fillRandom: function () {
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 1000)
      this.numbers.push(randomNumber)
      console.log(randomNumber)
    }
    console.log("***")
  }
};

for (let x of myObject) {
  console.log(x);
}