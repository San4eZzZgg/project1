const square = document.querySelector('.player')
const body = document.querySelector('body')
let moves = []

body.addEventListener('keydown', moveController)

function moveController(e) {
    switch (e.key) {
        case 'w':
            moveFn(e.key)
            break
        case 's':
            moveFn(e.key)
            break
        case 'a':
            moveFn(e.key)
            break
        case 'd':
            moveFn(e.key)
            break
    }
}
function moveFn(dir) {
    const x = parseInt(window.getComputedStyle(square).right) 
    const y = parseInt(window.getComputedStyle(square).top) 
    dir === 'a' && (square.style.right = x + 50 + 'px')
    dir === 'd' && (square.style.right = x - 50 + 'px')
    dir === 'w' && (square.style.top = y - 50 + 'px')
    dir === 's' && (square.style.top = y + 50 + 'px')
}
body.addEventListener('keydown', (e)=> {
    if (!moves.includes(e.key)){
        moves.push(e.key)

    }
})
body.addEventListener('keyup', (e)=>{
    moves = moves.filter(el => el !== e.key)
})

function movementController(){
    delay(()=>{
        moves.includes('w') && move('шаг вверх')
        moves.includes('s') && move('вшаг вниз')
        moves.includes('a') && move('шаг влево')
        moves.includes('d') && move('шаг вправо')
    })
}
moveController()

function delay(callback) {
    setInterval(callback, 30)
}