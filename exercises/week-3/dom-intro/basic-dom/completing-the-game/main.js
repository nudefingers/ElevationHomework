const arrows = document.getElementsByClassName("arrow")
const STEP = 15
for (let i = 0; i < arrows.length; i++) {
    arrows[i].onclick = function () {
        const ball = document.getElementById("ball")
        let direction = "left"
        let shift

        if (this.id === "up") {
            direction = "top"
            shift = -STEP
        } else if (this.id === "down") {
            direction = "top"
            shift = STEP
        } else if (this.id === "left") {
            shift = -STEP
        } else if (this.id === "right") {
            shift = STEP
        }

        // console.log(ball.style.top)
        // console.log(direction)
        // console.log(`***`) 

        //left между 0 и 390px  : top между 0 и 420


        let value = (parseInt(ball.style[direction]) || 0) + shift

        if (direction === "left") {
            if (value >= 0 && value <= 390) {
                ball.style[direction] = value + "px"
            }
        } else if (direction === "top") {
            if (value >= 0 && value <= 405) {
                ball.style[direction] = value + "px"
            }
        }

    }
}