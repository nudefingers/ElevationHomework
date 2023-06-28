const header = $("h1")
console.log(header)

$("h1").css("color", "blue")
$(".red-div").css("color", "red")

$("li:first").css("color", "green")
$("li:last").css("color", "pink")

$("#brown-div").css("color", "brown")

$("#b1").addClass("box")
$("#b2").addClass("box")

// $('#my-input').val("Terabyte")

const data = $("#data-color").data()
console.log(data.barcode)

const date = $("#data-color").data()
console.log(data.expirationdate)


// $('button').click(function () {
//     alert('clicked!')
// })


// const clicked = function () {
//     alert('clicked!')
// }

// $('button').click(clicked)


$('#brown-div').hover(
    function () {
        $('#brown-div').css("background-color", "aqua")
    },
    function () {
        $('#brown-div').css("background-color", "white")
    }
)


$("button").on("click", function () {
    alert($("#my-input").val())
})
















