document.addEventListener("DOMContentLoaded", function() {
    const rubiksCube = document.getElementById("rubiksCube")
  
    for (let i = 0; i < 9; i++) {
      const cubePiece = document.createElement("div")
      cubePiece.style.background = getRandomColor()
      cubePiece.classList.add("cube-piece")

      cubePiece.onclick = function() {
        changeBackground(cubePiece)
      }
      
      rubiksCube.appendChild(cubePiece)
    }
})

const getRandomColor = function() {
    const niceColors = ["#F7CAC9", "#F8E5E5", "#F9E4C6", "#F8DFC2", "#F3EFE0", "#F0ECE2", "#EDE7E3", "#EAE7E0", "#E2D8C3", 
                        "#DDD6D0", "#D9D0CE", "#D4CCC7", "#C9C0BB", "#C3B4AD", "#BFAFAB", "#B6A8A3", "#AAA2A2", "#A59E98"]

    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
}

const getRandomGreenColor = function() {
    const shadesOfGreen = [
        '#00FF00',
        '#00EE00',
        '#00DD00',
        '#00CC00',
        '#00BB00',
        '#00AA00',
        '#009900',
        '#008800',
        '#007700',
        '#006600',
        '#005500',
        '#004400',
        '#003300',
        '#002200',
        '#001100',
        '#00FF33',
        '#00FF66',
        '#00FF99',
        '#00FFCC',
        '#00FFFF'
      ];                    
    const randomPosition = Math.floor(Math.random() * shadesOfGreen.length);
    return shadesOfGreen[randomPosition];
}

const changeBackground = function(item) {
    item.style.background = getRandomGreenColor()
}
