const square = document.querySelector('.player')
const body = document.querySelector('body')

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
    dir === 'a' && (square.style.right = x + 10 + 'px')
    dir === 'd' && (square.style.right = x - 10 + 'px')
    dir === 'w' && (square.style.top = y - 10 + 'px')
    dir === 's' && (square.style.top = y + 10 + 'px')
}