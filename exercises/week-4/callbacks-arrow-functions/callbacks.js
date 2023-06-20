// Exercise 3 - Callbacks
const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data)
    logDataFunc(data)
}

const logData = function (data) {
    console.log(data)
}

displayData(alert, logData, "I like to party")



// Exercise 2 - Callbacks
const getTime = function (callback) {
    const time = new Date()
    callback(time)
}

const returnTime = function (time) {
    alert(`The current time is: ${time}`)
}

getTime(returnTime)



// Exercise 1 - Callbacks
const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}

const pushPull = func => func()

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"