const Model = function () {
    
    const _posts = [
        { name: `Uncle Jerome`, wish: `Happy birthday kido!` },
        { name: `BFF Charlene`, wish: `HEARTS LOVE YOU FOREVER BFF4LYFE HBD` },
        { name: `Old High School Teacher`, wish: `Hey ace, have a good one` }
    ]

    const getPosts = function () {
        return _posts
    }

    const addPost = function (name, wish) {
        _posts.push({ name: name, wish: wish })
    }

    return {
        getPosts,
        addPost
    }
}