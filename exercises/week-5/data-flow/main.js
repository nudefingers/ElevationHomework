const model = Model()
const renderer = Renderer()
const posts = model.getPosts()

renderer.render(posts)


$(`#post-button`).click(function () {
    let name = $(`#name-input`).val()
    let wish = $(`#wish-input`).val()

    model.addPost(name, wish)
    renderer.render(posts)

    $(`#name-input`).val(``)
    $(`#wish-input`).val(``)
})


$(`#container`).on(`click`, `.post-item`, function () {

    let nameToDelete = $(this).find('.name').text()
    // posts = posts.filter(post => post.name !== nameToDelete)

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].name === nameToDelete) {
            posts.splice(i, 1)
            break
        }
    }
    
    renderer.render(posts)
})