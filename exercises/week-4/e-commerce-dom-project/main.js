let cart = []
const products = [
    { name: "mikelke", price: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNeNuV9XCo7cJdAghoHGW0IKtCp0ezbDAIjy9mOXmkLtNRY5vDGEi9T525aIzpbiAV9kg&usqp=CAU" },
    { name: "skittles", price: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAI9-3LmXnBJUKzIDuGTXvEiDDPxsOrqFcMoWH97YmFsy7s4UMs-mcQyYRUeCQr0hI7R8&usqp=CAU" },
    { name: "werther", price: 7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxvzwU87-hDd1UfQmrhlBfimDiLJOL3oU4wbDZ7E9YEyc8GOwMVNlVo9epazi8OP22rQ&usqp=CAU" },
    { name: "jolly", price: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_ClfpyG2NgZFzAN2n3ZuBauXxKXng7u8hOg69EuD8lDwHm1G1Sw_ibUBN-HTdjKR6T8&usqp=CAU" }
]

const buttonAboutUs = document.getElementById('about-us')
const buttonProducts = document.getElementById('products')
const buttonCart = document.getElementById('cart')

const containerAboutUs = document.getElementById('text-about-us')
const containerProduct = document.getElementById('product-container')
const containerCart = document.getElementById('cart-container')

buttonAboutUs.addEventListener('click', function () {
    containerAboutUs.style.display = 'grid'
    containerProduct.style.display = 'none'
    containerCart.style.display = 'none'
})

buttonProducts.addEventListener('click', function () {
    containerAboutUs.style.display = 'none'
    containerProduct.style.display = 'grid'
    containerCart.style.display = 'none'
})

buttonCart.addEventListener('click', function () {
    containerAboutUs.style.display = 'none'
    containerProduct.style.display = 'none'
    containerCart.style.display = 'grid'
})


products.forEach(product => {
    const div = document.createElement("div")
    const name = document.createElement("h3")
    const price = document.createElement("p")
    const image = document.createElement("img")
    const button = document.createElement("button")

    name.textContent = product.name
    price.textContent = "Price: $" + product.price
    image.src = product.img
    button.textContent = "Add to Cart"

    button.addEventListener("click", () => {
        cart.push(product)
        console.log("Product added to cart:", product.name);
        console.log(cart)
    })

    div.appendChild(name)
    div.appendChild(price)
    div.appendChild(image)
    div.appendChild(button)

    containerProduct.appendChild(div)
})


cart.forEach(product => {
    const div = document.createElement("div")
    const name = document.createElement("h3")
    const price = document.createElement("p")
    const image = document.createElement("img")
    const button = document.createElement("button")

    name.textContent = product.name
    price.textContent = "Price: $" + product.price
    image.src = product.img
    button.textContent = "Remove"

    button.addEventListener("click", () => {
        let index = cart.indexOf(product)
        cart.splice(index, 1)
        console.log("Product remove from cart:", product.name);
    })

    div.appendChild(name)
    div.appendChild(price)
    div.appendChild(image)
    div.appendChild(button)

    containerCart.appendChild(div)
})
