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
let cart = []

$("#items .item[data-instock=true]").each(function () {
    let item = $(this).text()
    cart.push({ item: item, counter: 0 })
})


$(".item[data-instock=true]").click(function () {
    let text = $(this).text()
    let index = cart.findIndex(function (cartItem) {
        return cartItem.item === text
    })

    cart[index].counter++
    $(this).find(".counter").text(cart[index].counter)

    $(`#cart`).empty()
    cart.forEach(function (curent) {
        let _item = curent.item
        let _counter = curent.counter

        if (_counter > 0) {
            let _text = (_counter === 1) ? `${_item}` : `${_item} x${_counter}`
            let curentItem = $(`<div class="cart-item">${_text}</div>`)
            $("#cart").append(curentItem)
        }
    })
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



let posts = [{ name: 'Shoobert' }, { name: 'Kayne' }]

for (let post of posts) {
    $("#posts").append(`
        <div>${post.name}</div><input type="text" placeholder="say something nice" />
    `)
}

posts.splice(0, 1)