
const moveRight = function() {
    const ball = document.getElementById("ball")
    let left = parseInt(ball.style.left) || 0
    left += 15
    ball.style.left = left + "px"
}

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "darkcyan"
header.style.fontFamily = "Helvetica"
header.setAttribute("class", "my-header")
document.body.appendChild(header)


const subHeader = document.createElement("h2")
subHeader.innerHTML = "Created by Elevation"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)


const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const changeColor = function() {
    box.style.backgroundColor = "#8e44ad"
}

const addNewItem = function() {
    const list = document.getElementById("list")
    const item = document.createElement("li")
    item.innerHTML = "A new item!"
    list.appendChild(item)
}

const block = document.createElement("div")

block.setAttribute("class", "block")
block.onclick = function(){       // adding an event to the new element
    block.innerHTML = "I'm alive!"
}

document.getElementById("list").appendChild(block) // now the box will be on the page, and will react to a click!












/* console.log(document)
const down = document.getElementById("down")
// console.log(down)

// console.log(down.innerHTML)

down.innerHTML = "Down"

console.log(document.getElementById("playing-field").innerHTML)


document.getElementById("ball").style.backgroundColor = "hotpink" */
