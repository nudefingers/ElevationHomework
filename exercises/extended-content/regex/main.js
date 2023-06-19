{
const str = "the fat cat hit the rat with a bat"
const str1 ="bob yelled hello"
const str2 = "it's fleece was white as snow";
const str3 = "0542212222";
const str4 = "054hihihii";
const str5 = "05422122221111";

//Checks if it contains “a” in the string
const checkIfContainsA = function (str) {
    const REGEX_A = /a/
    return REGEX_A.test(str)
}

//Checks if it’s a string that ends with “at”
const checkIfEndsWithAt = function(str) {
    const REGEX_AT = /at$/
    return REGEX_AT.test(str)
}
//Checks if it’s a number that starts with 054 and of size 10.
const checkIfStartsWithNum = function(str) {
    const REGEX_NUMBER = /^054[0-9]{7}$/ // /^054\d{7}$/
    return REGEX_NUMBER.test(str)

}
/*
console.log(checkIfContainsA(str)) //returns true
console.log(checkIfContainsA(str1)) //returns false

console.log(checkIfEndsWithAt(str)) //returns true
console.log(checkIfEndsWithAt(str1)) //returns false
console.log(checkIfEndsWithAt(str2)) //returns false

console.log(checkIfStartsWithNum(str)) //returns false
console.log(checkIfStartsWithNum(str3)) //return true
console.log(checkIfStartsWithNum(str4)) //return false
console.log(checkIfStartsWithNum(str5)) //return false */
}

{
const regexArr = [/a/, /b/, /^d/, /e$/]
const str = "Bike"
const str1 = "the room is on fire"
const str2 = "Fergalicious"
const str3 = "Fox in sheep clothing"

const searchMatchingRegex = function (str) {
    for(re of regexArr) {
        if (re.test(str)) {  
            return true
        }    
    } 
    return false
}
/*
console.log(searchMatchingRegex(str)) //return true (contains b)
console.log(searchMatchingRegex(str1)) //return true (ends with e)
console.log(searchMatchingRegex(str2)) //return true (contains a)
console.log(searchMatchingRegex(str3)) //return false*/
}

{
const email1 = "cat@meow.com"
const email2 = "bad1npuT!@gmail.com"
const email3 = "meow@gmail.net"

const emailValidator = function(str){
    const regex = /^[a-z]+@[a-z]+\.com$/ ///^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/;
    return regex.test(str)
}
/*
console.log(emailValidator(email1)) //return true
console.log(emailValidator(email2)) //return true !
console.log(emailValidator(email3)) //return false */
}


const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"

const urlValidator = function(str){
    const regex = /^www.+[a-z]+\.com$/ ///^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/;
    return regex.test(str)
}

console.log(urlValidator(firstURL)) //return true
console.log(urlValidator(secondURL)) //return true !
console.log(urlValidator(thirdURL)) //return false