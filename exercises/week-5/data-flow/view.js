const Renderer = function () {

    const render = function (_posts) {

        $(`#container`).empty()

        for (const post of _posts) {
            let postDiv = $(`<div>`).html(`<b class='name'>${post.name}</b>: ${post.wish}`)
            postDiv.addClass(`post-item`)
            $(`#container`).append(postDiv);
        }
    }

    return {
        render
    }
}