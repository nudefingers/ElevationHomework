const arrows = document.getElementsByClassName("arrow")
for (let i = 0; i < arrows.length; i++) {
    arrows[i].onclick = function () {
        const ball = document.getElementById("ball")
        let direction = "left"
        let shift

        if (this.id === "up") {
            direction = "top"
            shift = -15
        } else if (this.id === "down") {
            direction = "top"
            shift = 15
        } else if (this.id === "left") {
            shift = -15
        } else if (this.id === "right") {
            shift = 15
        }

        console.log(parseInt(ball.style[direction]))

        let value = (parseInt(ball.style[direction]) || 0) + shift

        ball.style[direction] = value + "px"

    }
}