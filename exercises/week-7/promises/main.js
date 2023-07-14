const randomWordUrl = `https://random-word-api.herokuapp.com/word`
const booksUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:`
const giphyUrl = `http://api.giphy.com/v1/gifs/search?q=`

const key = `RI1CIXCll0k2LGXsHrH0DRkv859fx6vX&limit=5`
const api_key = `&api_key=${key}`


// Exercise 1
$.get(randomWordUrl)
    .then(words => $.get(`${booksUrl}${words[0]}`))
    .then(books => console.log(`The random book generator has chosen for you: ${books.items[0].volumeInfo.title}`))
    .catch(error => console.log(error))


// Exercise 2
$.get(randomWordUrl)
    .then(words => {
        const word = words[0]
        const booksPromise = $.get(`${booksUrl}${word}`)
        const gifPromise = $.get(`${giphyUrl}${words}${api_key}`)
        return Promise.all([booksPromise, gifPromise])
    })
    .catch(error => console.log(error))
    .then(([books, gif]) => {
        const title = books.items[0].volumeInfo.title
        const gifUrl = gif.data[0].images.downsized_large.url
        $(`#book-title`).html(title)
        $(`#gif`).attr(`src`, gifUrl)
    })
    .catch(error => console.log(error))