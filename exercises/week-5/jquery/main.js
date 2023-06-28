// Exercise 1+2
$("#add-human").on("click", function () {
    let text = $("#human-input").val()
    let item = $(`<li class="name">${text}</li>`)

    $("#container").append(item)
    $('#human-input').val("")

    item.on("click", function () {
        $(this).remove()
    })
})


// Exercise 3
$('#box-container').hover(
    function () { },
    function () {
        $(".box").css("background-color", "#8e44ad")
        $(this).css("background-color", "white")
    }
)

$('.box').hover(
    function () {
        $(this).css("background-color", "#8e44ad")
    },
    function () {
        $(".box").css("background-color", "#8e44ad")
        $(this).css("background-color", "yellow")
    }
)


// Exercise 4
$(".item[data-instock=true]").click(function () {
    let text = $(this).text()
    let lastChild = $("#cart .cart-item:last")
    let lastText = lastChild.text()

    if (lastText.includes(text)) {
        if (!lastText.includes(" x")) {
            lastChild.text(`${text} x2`)
        } else {
            let counter = parseInt(lastText.match(/\d+/)[0]) + 1
            lastChild.text(`${text} x${counter}`)
        }
    } else {
        let cartItem = $(`<div class="cart-item">${text}</div>`)
        $("#cart").append(cartItem)
    }
})

$("#cart").on("click", ".cart-item", function () {
    $(this).remove()
})


// Exercise 5
const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
]

for (const fruit of fruits) {
    let fruitItem = $(`<div class=${fruit.color}>${fruit.name}</div>`)

    $("#basket").append(fruitItem)
}



let posts = [{name: 'Shoobert'}, {name: 'Kayne'}]

for(let post of posts){
    $("#posts").append(`
        <div>${post.name}</div><input type="text" placeholder="say something nice" />
    `)
}

posts.splice(0, 1)