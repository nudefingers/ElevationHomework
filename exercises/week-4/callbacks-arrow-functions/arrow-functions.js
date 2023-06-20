// Exercise 7 - Arrow Functions
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")


// Exercise 6 - Arrow Functions
const determineWeather = temp => {
    if (temp > 25) {
        return "hot"
    }
    return "cold"
}

const commentOnWeather = temp => `It's ${determineWeather(temp)}` 

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"


// Exercise 5 - Arrow Functions
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()


// Exercise 4 - Arrow Functions
const add = (a, b, c) => a + b + c

console.log(add(1, 10, 100))