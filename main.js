const square = document.querySelector('.square')
const body = document.querySelector('body')
const board = document.querySelector('#board')
const STEP = 10

let moves = []

body.addEventListener('keydown', (e) => {
    if (!moves.includes(e.key)) {
        moves.push(e.key)
    }
})

body.addEventListener('keyup', (e) => {
    moves = moves.filter(el => el !== e.key)
})

function movementController() {
    delay(() => moves.forEach(d => ['w', 's', 'a', 'd'].includes(d) && move(d)))
}

movementController()

function move(dir) {
    const { width: board_W, height: board_H } = board.getBoundingClientRect()
    const { width: square_W, height: square_H } = square.getBoundingClientRect()
    const TOP = parseInt(window.getComputedStyle(square).top)
    const RIGHT = parseInt(window.getComputedStyle(square).right)
    dir === 'w' && TOP > 0 && (square.style.top = TOP - STEP + 'px')
    dir === 'd' && RIGHT > 0 && (square.style.right = RIGHT - STEP + 'px')
    dir === 'a' && (square.style.right = RIGHT + STEP + 'px')
    dir === 's' &&(square.style.top = TOP + STEP + 'px')
    /*
        Добавить движения 'a', 's', 'd'
    */
}

function delay(callback) {
    setInterval(callback, 30)
}