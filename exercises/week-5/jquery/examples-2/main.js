$('.box').hover(
    function () {
        $(this).css("background-color", "aqua")
    },
    function () {
        $(this).css("background-color", "purple")
    }
)

$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')


// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// $("body").append(elem)


// const text = "Banana"
// const item = $(`<div class=fruit>${text}</div>`)

// $('body').append(item)


// $(".feedme").on("click", function () {
//     let divCopy = `<div class=feedme>${$(this).text()}</div>`

//         $("body").append(divCopy)
// })

