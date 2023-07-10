// Exercise 1+2+3
let books = []
let isbns = [9782806269171,
    1440633908,
    9781945048470,
    9780307417138]


const addBookData = function (_data) {
    _data.items.forEach(function (_item) {
        let _info = _item.volumeInfo
        let author = _info.authors ? `, Author: ` + _info.authors[0] : ``
        let _bookDiv = $(`<div>`).text(`Name: ` + _info.title + author)
        $(`#books`).append(_bookDiv)
    })
}

const search = function () {
    isbns.forEach(function (isbn) {
        $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
            success: function (data) {
                addBookData(data)
                console.log(data)
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    })
}


const fetch = function () {
    books.forEach(function (book) {
        let queryType = book.queryType
        let queryValue = book.queryValue
        console.log(queryType)
        console.log(`888`)

        $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
            success: function (data) {
                addBookData(data)
                console.log(data)
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    })
}

// search()
books.push({ queryType: "isbn", queryValue: 9789814561778 })
books.push({ queryType: "title", queryValue: "How to Win Friends and Influence People" })
//fetch()