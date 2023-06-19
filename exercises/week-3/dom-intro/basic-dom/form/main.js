const button = document.getElementById("submit")
const submit = function () {

    const name = document.getElementById("name").value
    const salary = parseInt(document.getElementById("salary").value) || 0
    const birthday = document.getElementById("birthday").value
    const phone = document.getElementById("phone").value
    let text = ""

    if (name.length <= 2) {
        text += makeMistake("name")
    }
    if (salary <= 10000 || salary >= 16000) {
        text += makeMistake("salary")
    }
    if (!birthday) {
        text += makeMistake("birthday")
    }
    if (phone.length !== 10) {
        text += makeMistake("phone")
    }
    document.getElementById("message").innerHTML = text

    if (text == "") {
        const formElement = document.getElementById("form")
        formElement.style.display = "none"

        const welcomeElement = document.getElementById("welcome")
        welcomeElement.innerHTML =  `Welcome, ${name}`
        welcomeElement.style.display = "inline"
    }
}

const makeMistake = function (id) {
    let layout = " is missing\n\n";
    document.querySelector(`label[for="${id}"]`).style.color = "red";
    return (id + layout)
}

button.onclick = submit