let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

let today = new Date()
let year = today.getFullYear()

if (boughtTesla && isUSCitizen) {
    if ((year - currentYear) >= 4) {
        console.log("Would you like an upgrade?")
    } else {
        console.log("Are you satisfied with the car?")
    }    
}
if (boughtTesla && !isUSCitizen) {
    console.log("Would you like to move to the US?")
}
if (!boughtTesla) {
    console.log("Are you interested in buying one?")
}
