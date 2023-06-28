$('#colors span').each(function() {
    var dataColor = $(this).data("color")

    $(this).addClass("picker")
    $(this).css("background-color", dataColor)

    $(this).on("click", function () {
        $(".box").css("background-color", dataColor)
    })
  })













// addClass