import validator from "validator"

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
let email = `shoobert@dylan`
if (validator.isEmail(email)) {
    console.log(`The email ${email} is valid`)
} else {
    console.log(`The email ${email} is invalid`)
}


//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
let phoneNumber = `786-329-9958`
if (validator.isMobilePhone(phoneNumber, `en-US`)) {
    console.log(`The phone number ${phoneNumber} is a valid US mobile phone number`)
} else {
    console.log(`The phone number ${phoneNumber} is not a valid US mobile phone number`)
}

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "`"]
//Along with validator`s `blacklist` method to clean this text:
let text = "I`M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
let cleanedText = validator.blacklist(text, blacklist).toLowerCase()
console.log(cleanedText)