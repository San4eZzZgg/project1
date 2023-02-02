const board = document.querySelector('#board')
const squareNumber = 500
const colors = ['#F39F18', '#F75E25', '#FAD201', '#256D7B', '#F44611', '#606E8C', '#2271B3', '#F54021']

for(let i = 0; i < squareNumber; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    
    board.append(square)
}


function randomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function setColor(element){

}
function removeColor(element){

}