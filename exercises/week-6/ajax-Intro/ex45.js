// Exercise 4+5
const searchGif = function (cats) {
    const key = `RI1CIXCll0k2LGXsHrH0DRkv859fx6vX&limit=5`
    let xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${cats}&api_key=${key}`)
    xhr.done(function (data) {
        let firstGif = data.data[0]

        if (firstGif) {
            let embedUrl = firstGif.embed_url
            let iframe = $(`<iframe>`)
            iframe.attr(`src`, embedUrl)
            $(`body`).append(iframe)
        }
    })
}

$(document).ready(function () {
    const input = $(`<input>`).attr(`type`, `text`).attr(`id`, `requestInput`).attr(`placeholder`, `Get gif about...`)
    const button = $(`<button>`).attr(`id`, `searchButton`).text(`Get gif about...`)

    $(`body`).append(input, button)

    $(`#searchButton`).click(function () {
        let inputValue = $(`#requestInput`).val()
        searchGif(inputValue)
    })
})