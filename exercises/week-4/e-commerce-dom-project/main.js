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

    displayProducts()
})

buttonCart.addEventListener('click', function () {
    containerAboutUs.style.display = 'none'
    containerProduct.style.display = 'none'
    containerCart.style.display = 'grid'

    displayCart()
})

const displayProducts = function () {
    while (containerProduct.firstChild) {
        containerProduct.removeChild(containerProduct.firstChild)
    }

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

}


const displayCart = function () {
    while (containerCart.firstChild) {
        containerCart.removeChild(containerCart.firstChild)
    }

    const groupedCart = cart.reduce((acc, product) => {
        if (!acc[product.name]) {
            acc[product.name] = { ...product, quantity: 1 }
        } else {
            acc[product.name].quantity += 1
        }
        return acc
    }, {})

    const transformedArray = Object.values(groupedCart)

    transformedArray.forEach(product => {
        const div = document.createElement("div")
        div.classList.add(product.name)
        const name = document.createElement("h3")
        const price = document.createElement("p")
        const quantity = document.createElement("p")
        const image = document.createElement("img")
        const button = document.createElement("button")

        name.textContent = product.name
        price.textContent = "Price: $" + product.price
        quantity.textContent = "Quantity: " + product.quantity
        image.src = product.img
        button.textContent = "Remove"

        button.addEventListener("click", () => {
            const name = button.parentElement.classList[0]
            const index = cart.findIndex(p => p.name === name)
            if (index !== -1) {
                cart.splice(index, 1)
            }
            displayCart()
        })

        div.appendChild(name)
        div.appendChild(price)
        div.appendChild(quantity)
        div.appendChild(image)
        div.appendChild(button)

        containerCart.appendChild(div)
    })
}