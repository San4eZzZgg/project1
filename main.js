const screens = document.querySelectorAll('.screen')
const form = document.querySelector('form')
const board = document.querySelector('#board')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
    const { sizeA, sizeB } = getSizes()
    const Blue = new Square(sizeA, 'blue', board).init()
    const Red = new Square(sizeB, 'red', board).init()
})


function getSizes() {
    const sizeA = getValidValue(+document.querySelector('.a').value)
    const sizeB = getValidValue(+document.querySelector('.b').value)

    function getValidValue(value) {
        if (!value) return 80
        if (value < 50 || value > 300) {
            return 80
        }
        return value
    }
    return { sizeA, sizeB }
}





// const square = document.querySelector('.square')
// const body = document.querySelector('body')
// const board = document.querySelector('#board')
// const STEP = 10
// const form = document.querySelector('form')

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const sizeBlue = document.querySelector('.a').value
//     const sizeRed = document.querySelector('.b').value

//     console.log('Форма отправлена', sizeBlue, sizeRed)
// })

// let moves = []

// body.addEventListener('keydown', (e) => {
//     if (!moves.includes(e.key)) {
//         moves.push(e.key)
//     }
// })

// body.addEventListener('keyup', (e) => {
//     moves = moves.filter(el => el !== e.key)
// })

// function movementController() {
//     delay(() => moves.forEach(d => ['w', 's', 'a', 'd'].includes(d) && move(d)))
// }

// movementController()

// function move(dir) {
//     const { width: board_W, height: board_H } = board.getBoundingClientRect()
//     const { width: square_W, height: square_H } = square.getBoundingClientRect()
//     const TOP = parseInt(window.getComputedStyle(square).top)
//     const RIGHT = parseInt(window.getComputedStyle(square).right)
//     dir === 'w' && TOP > 0 && (square.style.top = TOP - STEP + 'px')
//     dir === 'd' && RIGHT > 0 && (square.style.right = RIGHT - STEP + 'px')
//     dir === 'a' && board_W > RIGHT + square_W && (square.style.right = RIGHT + STEP + 'px')
//     dir === 's' && board_H > TOP + square_H && (square.style.top = TOP + STEP + 'px')
//     console.log(board_W, RIGHT, square_W)
// }

// function delay(callback) {
//     setInterval(callback, 30)
// }