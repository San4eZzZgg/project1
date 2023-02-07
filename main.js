const board = document.querySelector('#board')

const squareNumber = 500

const colors = ['#F39F18', '#F75E25', '#FAD201', '#256D7B', '#F44611', '#606E8C', '#2271B3', '#F54021']

for(let i = 0; i < squareNumber; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}


function randomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function setColor(element){
    const color = randomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}