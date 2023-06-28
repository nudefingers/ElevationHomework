var posts = [
    { name: "Uncle Jerome", wish: "Happy birthday kido!" },
    { name: "BFF Charlene", wish: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD" },
    { name: "Old High School Teacher", wish: "Hey ace, have a good one" }
]

function render() {
    $("#container").empty()

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i]
        let postDiv = $("<div>").html("<b class='name'>" + post.name + "</b>: " + post.wish)
        postDiv.addClass("post-item")
        $("#container").append(postDiv);
    }
}

render()

$("#post-button").click(function () {
    let name = $("#name-input").val()
    let wish = $("#wish-input").val()

    posts.push({ name: name, wish: wish })

    render()

    $("#name-input").val("")
    $("#wish-input").val("")
})

$("#container").on("click", ".post-item", function () {

    let nameToDelete = $(this).find('.name').text()

    posts = posts.filter(post => post.name !== nameToDelete)
    
    render()
})